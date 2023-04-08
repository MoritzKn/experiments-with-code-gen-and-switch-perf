const util = require("util");

let keywords = [
  "case",
  "if",
  "throw",
  "else",
  "var",
  "number",
  "string",
  "get",
  "module",
  "type",
  "instanceof",
  "typeof",
  "public",
  "private",
  "enum",
  "export",
  "finally",
  "for",
  "while",
  "void",
  "null",
  "super",
  "this",
  "new",
  "in",
  "return",
  "true",
  "false",
  "any",
  "extends",
  "static",
  "let",
  "package",
  "implements",
  "interface",
  "function",
  "try",
  "yield",
  "const",
  "continue",
  "do",
  "catch",
];

function option(value) {
  if (value === undefined) {
    return { type: "option" };
  }

  return {
    type: "option",
    value: {
      type: "literal",
      value,
    },
  };
}

function basedOnPrefix(values, depth) {
  let prefixBuckets = [];

  values.forEach((value) => {
    let prefix = value[depth];

    if (prefixBuckets[prefix]) {
      prefixBuckets[prefix].push(value);
    } else {
      prefixBuckets[prefix] = [value];
    }
  });

  let prefixes = Object.keys(prefixBuckets).sort();

  if (prefixes.length === 1) {
    // Skip this character
    return basedOnPrefix(values, depth + 1);
  }

  let cases = prefixes.flatMap((prefix) => {
    const valuesLeft = prefixBuckets[prefix];
    if (valuesLeft.length === 1) {
      const value = valuesLeft[0];

      const resultAst = {
        type: "return",
        value: option(keywords.indexOf(value)),
      };
      const mismatchAst = {
        type: "return",
        value: option(),
      };

      let bodyAst = resultAst;
      const uncheckedLetters = value.length - (depth + 1);
      if (uncheckedLetters > 0) {
        let conditionAst;

        // Trickery to safe comparisons of known letters and
        // avoid bounds checks. But seems to make no real difference.
        // Maybe rustc can already tell that this is possible.
        if (uncheckedLetters > 0 && uncheckedLetters <= 3) {
          let conditions = [];
          for (let i = value.length - uncheckedLetters; i < value.length; i++) {
            // for (let i = 0; i < value.length; i++) {
            conditions.push({
              type: "equalityCheck",
              a: { type: "nthLetterOf", ofVar: "input", nth: i },
              b: { type: "literal", value: value[i] },
            });
          }
          conditionAst = conditions.pop();
          let nextCondition;
          while ((nextCondition = conditions.pop())) {
            conditionAst = {
              type: "and",
              a: nextCondition,
              b: conditionAst,
            };
          }
        } else {
          // Just check it all using a native function...
          conditionAst = {
            type: "equalityCheck",
            a: {
              type: "var",
              name: "input",
            },
            b: {
              type: "literal",
              value: valuesLeft[0],
            },
          };
        }

        bodyAst = {
          type: "ifelse",
          condition: conditionAst,
          ifTrue: resultAst,
          ifFalse: mismatchAst,
        };
      }

      return [
        { type: "comment", content: valuesLeft.join(", ") },
        {
          type: "case",
          value: prefix,
          body: bodyAst,
        },
        { type: "nl" },
      ];
    }

    return [
      { type: "comment", content: valuesLeft.join(", ") },
      {
        type: "case",
        value: prefix,
        body: basedOnPrefix(valuesLeft, depth + 1),
      },
      { type: "nl" },
    ];
  });

  let ast = {
    type: "switch",
    value: { type: "nthLetterOf", ofVar: "input", nth: depth },
    cases,
    default: { type: "return", value: option() },
  };

  return ast;
}

function generateNestedSwitch(values) {
  let lengthBuckets = {};
  values.forEach((value) => {
    let length = value.length;
    if (lengthBuckets[length]) {
      lengthBuckets[length].push(value);
    } else {
      lengthBuckets[length] = [value];
    }
  });

  let lengths = Object.keys(lengthBuckets)
    .map(Number)
    .sort((a, b) => a - b);

  let cases = lengths.flatMap((length) => {
    const valuesLeft = lengthBuckets[length];
    if (valuesLeft.length === 1) {
      return [
        { type: "comment", content: valuesLeft.join(", ") },
        {
          type: "case",
          value: length,
          body: {
            type: "ifelse",
            condition: {
              type: "equalityCheck",
              a: {
                type: "var",
                name: "input",
              },
              b: {
                type: "literal",
                value: valuesLeft[0],
              },
            },
            ifTrue: {
              type: "return",
              value: option(keywords.indexOf(valuesLeft[0])),
            },
            ifFalse: {
              type: "return",
              value: option(),
            },
          },
        },
        { type: "nl" },
      ];
    }

    return [
      { type: "comment", content: valuesLeft.join(", ") },
      { type: "case", value: length, body: basedOnPrefix(valuesLeft, 0) },
      { type: "nl" },
    ];
  });

  let ast = {
    type: "function",
    name: "nested_switch",
    args: [
      {
        type: "arg",
        name: "input",
        argType: "&str",
      },
    ],
    returnType: "Option<usize>",
    body: {
      type: "block",
      statements: [
        {
          type: "switch",
          value: { type: "lengthOf", value: { type: "var", name: "input" } },
          cases,
          default: { type: "return", value: option() },
        },
        // { type: "nl" },
        // { type: "return", value: option() },
      ],
    },
  };

  return ast;
}

function generateBasicSwitch(values) {
  let cases = values.flatMap((value, i) => {
    return [
      {
        type: "case",
        value: value,
        body: {
          type: "return",
          value: option(i),
        },
      },
    ];
  });

  let ast = {
    type: "function",
    name: "basic_switch",
    args: [
      {
        type: "arg",
        name: "input",
        argType: "&str",
      },
    ],
    returnType: "Option<usize>",
    body: {
      type: "block",
      statements: [
        {
          type: "switch",
          value: { type: "var", name: "input" },
          cases,
          default: { type: "return", value: option() },
        },
        { type: "nl" },
        { type: "return", value: option() },
      ],
    },
  };

  return ast;
}

function deIndent(code, trimNl = true) {
  if (trimNl) {
    let match = /\n\s*((:?\n\s*)+)$/.exec(code);
    if (match) {
      let [, extraNewLines] = match;
      code = code.substring(0, code.length - extraNewLines.length);
    }
  }

  if (code.endsWith("  ")) {
    // Set indentation back one line
    return code.substring(0, code.length - 2);
  }

  return code;
}

function astToJs(ast, depth = 0) {
  let ind = "  ".repeat(depth);

  // console.log(ind, "astToJs", ast.type, depth, "{");

  let code = (() => {
    try {
      switch (ast.type) {
        case "function": {
          return (
            `module.exports = function ${ast.name} (${ast.args.map((arg) =>
              astToJs(arg, depth + 1)
            )}) ${astToJs(ast.body, depth)}` + ind
          );
        }
        case "switch": {
          let body = ast.cases.map((case_) => astToJs(case_, depth + 1));
          if (ast.default) {
            body.push(`default:\n${ind}    ${astToJs(ast.default, depth + 1)}`);
          }

          return (
            `switch (${astToJs(ast.value, depth + 1)}) {\n${ind}  ${deIndent(
              body.join("")
            )}}\n` + ind
          );
        }
        case "block": {
          if (ast.statements.length === 0) {
            return "{}\n" + ind;
          }

          return (
            `{\n${ind}  ${deIndent(
              ast.statements
                .map((statement) => astToJs(statement, depth + 1))
                .join("")
            )}}\n` + ind
          );
        }
        case "var": {
          return `${ast.name}`;
        }
        case "comment": {
          return `// ${ast.content}\n` + ind;
        }
        case "case": {
          let value = ast.value;
          if (typeof value === "string") {
            if (value.length === 1) {
              value = `'${ast.value}'`;
            } else {
              value = JSON.stringify(value);
            }
          }

          return `case ${value}:\n${ind}  ${deIndent(
            astToJs(ast.body, depth + 1)
          )}`;
        }
        case "nl": {
          return `\n` + ind;
        }
        case "nthLetterOf": {
          return `${ast.ofVar}[${ast.nth}]`;
        }
        case "return": {
          return `return ${astToJs(ast.value, depth)};\n` + ind;
        }
        case "option": {
          if (ast.value === undefined) {
            return "null";
          }
          return astToJs(ast.value, depth);
        }
        case "literal": {
          return JSON.stringify(ast.value);
        }
        case "ifelse": {
          return (
            `if (${astToJs(ast.condition, depth)}) {\n${ind}  ${deIndent(
              astToJs(ast.ifTrue, depth + 1)
            )}} else {\n${ind}  ${deIndent(
              astToJs(ast.ifFalse, depth + 1)
            )}}\n` + ind
          );
        }
        case "equalityCheck": {
          return `${astToJs(ast.a)} == ${astToJs(ast.b)}`;
        }
        case "and": {
          return `(${astToJs(ast.a)}) & (${astToJs(ast.b)})`;
        }
        case "arg": {
          return `${ast.name}`;
        }
        case "lengthOf": {
          return `${astToJs(ast.value)}.length`;
        }
        default:
          return `/* No code gen for ${ast.type} */\n` + ind;
      }
    } catch (error) {
      console.error(
        ind + "  Failed to generated code for",
        util.inspect(ast, { depth: 1 })
      );
      console.error(ind, error);

      return `/* Code gen failed for ${ast?.type || "undefined"} */\n` + ind;
    }
  })();

  // console.log(ind, "}");

  return code;
}

function astToRust(ast, depth = 0) {
  let ind = "  ".repeat(depth);

  // console.log(ind, "astToRust", ast.type, depth, "{");

  let code = (() => {
    try {
      switch (ast.type) {
        case "function": {
          return (
            `pub fn ${ast.name} (${ast.args.map((arg) =>
              astToRust(arg, depth + 1)
            )}) -> ${ast.returnType} ${astToRust(ast.body, depth)}` + ind
          );
        }
        case "switch": {
          let body = ast.cases.map((case_) => astToRust(case_, depth + 1));
          if (ast.default) {
            body.push(
              `_ => {\n${ind}    ${astToRust(ast.default, depth + 1)}}\n${ind}  `
            );
          }

          return (
            `match ${astToRust(ast.value, depth + 1)} {\n${ind}  ${deIndent(
              body.join("")
            )}}\n` + ind
          );
        }
        case "block": {
          if (ast.statements.length === 0) {
            return "{}\n" + ind;
          }

          return (
            `{\n${ind}  ${deIndent(
              ast.statements
                .map((statement) => astToRust(statement, depth + 1))
                .join("")
            )}}\n` + ind
          );
        }
        case "var": {
          return `${ast.name}`;
        }
        case "comment": {
          return `// ${ast.content}\n` + ind;
        }
        case "case": {
          let value = ast.value;
          if (typeof value === "string") {
            if (value.length === 1) {
              value = `'${ast.value}'`;
            } else {
              value = JSON.stringify(value);
            }
          }

          return (
            `${value} => {\n${ind}  ${deIndent(
              astToRust(ast.body, depth + 1),
              false
            )}},\n` + ind
          );
        }
        case "nl": {
          return `\n` + ind;
        }
        case "nthLetterOf": {
          // return `unsafe { *${ast.ofVar}.as_bytes().get_unchecked(${ast.nth}) } as char`;
          return `${ast.ofVar}.as_bytes()[${ast.nth}] as char`;
        }
        case "return": {
          return `return ${astToRust(ast.value, depth)};\n` + ind;
        }
        case "option": {
          if (ast.value === undefined) {
            return "None";
          }
          return `Some(${astToRust(ast.value, depth)})`;
        }
        case "literal": {
          let value = ast.value;
          if (typeof value === "string") {
            if (value.length === 1) {
              value = `'${ast.value}'`;
            } else {
              value = JSON.stringify(value);
            }
          }
          return value;
        }
        case "ifelse": {
          return (
            `if ${astToRust(ast.condition, depth)} {\n${ind}  ${deIndent(
              astToRust(ast.ifTrue, depth + 1)
            )}} else {\n${ind}  ${deIndent(
              astToRust(ast.ifFalse, depth + 1)
            )}}\n` + ind
          );
        }
        case "equalityCheck": {
          return `${astToRust(ast.a)} == ${astToRust(ast.b)}`;
        }
        case "and": {
          return `(${astToRust(ast.a)}) & (${astToRust(ast.b)})`;
        }
        case "arg": {
          return `${ast.name}: ${ast.argType}`;
        }
        case "lengthOf": {
          return `${astToRust(ast.value)}.len()`;
        }
        default:
          return `/* No code gen for ${ast.type} */\n` + ind;
      }
    } catch (error) {
      console.error(
        ind + "  Failed to generated code for",
        util.inspect(ast, { depth: 1 })
      );
      console.error(ind, error);

      return `/* Code gen failed for ${ast?.type || "undefined"} */\n` + ind;
    }
  })();

  // console.log(ind, "}");

  return code;
}

console.log(astToRust(generateNestedSwitch(keywords)));
