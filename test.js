const fs = require("fs");

const alpha = fs.readFileSync("./alpha.txt", "utf8").split("\n");

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

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

let words = [...alpha];

for (let i = 0; i < 1000; i++) {
  words.push(...keywords);
}

let res = words.map(() => false);

function nested_switch(input) {
  switch (input.length) {
    // if, in, do
    case 2:
      switch (input[0]) {
        // do
        case "d":
          if (input[1] == "o") {
            return 40;
          } else {
            return null;
          }

        // if, in
        case "i":
          switch (input[1]) {
            // if
            case "f":
              return 1;

            // in
            case "n":
              return 24;
          }
      }

    // var, get, for, new, any, let, try
    case 3:
      switch (input[0]) {
        // any
        case "a":
          if ((input[1] == "n") & (input[2] == "y")) {
            return 28;
          } else {
            return null;
          }

        // for
        case "f":
          if ((input[1] == "o") & (input[2] == "r")) {
            return 17;
          } else {
            return null;
          }

        // get
        case "g":
          if ((input[1] == "e") & (input[2] == "t")) {
            return 7;
          } else {
            return null;
          }

        // let
        case "l":
          if ((input[1] == "e") & (input[2] == "t")) {
            return 31;
          } else {
            return null;
          }

        // new
        case "n":
          if ((input[1] == "e") & (input[2] == "w")) {
            return 23;
          } else {
            return null;
          }

        // try
        case "t":
          if ((input[1] == "r") & (input[2] == "y")) {
            return 36;
          } else {
            return null;
          }

        // var
        case "v":
          if ((input[1] == "a") & (input[2] == "r")) {
            return 4;
          } else {
            return null;
          }
      }

    // case, else, type, enum, void, null, this, true
    case 4:
      switch (input[0]) {
        // case
        case "c":
          if (input == "case") {
            return 0;
          } else {
            return null;
          }

        // else, enum
        case "e":
          switch (input[1]) {
            // else
            case "l":
              if ((input[2] == "s") & (input[3] == "e")) {
                return 3;
              } else {
                return null;
              }

            // enum
            case "n":
              if ((input[2] == "u") & (input[3] == "m")) {
                return 14;
              } else {
                return null;
              }
          }

        // null
        case "n":
          if (input == "null") {
            return 20;
          } else {
            return null;
          }

        // type, this, true
        case "t":
          switch (input[1]) {
            // this
            case "h":
              if ((input[2] == "i") & (input[3] == "s")) {
                return 22;
              } else {
                return null;
              }

            // true
            case "r":
              if ((input[2] == "u") & (input[3] == "e")) {
                return 26;
              } else {
                return null;
              }

            // type
            case "y":
              if ((input[2] == "p") & (input[3] == "e")) {
                return 9;
              } else {
                return null;
              }
          }

        // void
        case "v":
          if (input == "void") {
            return 19;
          } else {
            return null;
          }
      }

    // throw, while, super, false, yield, const, catch
    case 5:
      switch (input[0]) {
        // const, catch
        case "c":
          switch (input[1]) {
            // catch
            case "a":
              if (input == "catch") {
                return 41;
              } else {
                return null;
              }

            // const
            case "o":
              if (input == "const") {
                return 38;
              } else {
                return null;
              }
          }

        // false
        case "f":
          if (input == "false") {
            return 27;
          } else {
            return null;
          }

        // super
        case "s":
          if (input == "super") {
            return 21;
          } else {
            return null;
          }

        // throw
        case "t":
          if (input == "throw") {
            return 2;
          } else {
            return null;
          }

        // while
        case "w":
          if (input == "while") {
            return 18;
          } else {
            return null;
          }

        // yield
        case "y":
          if (input == "yield") {
            return 37;
          } else {
            return null;
          }
      }

    // number, string, module, typeof, public, export, return, static
    case 6:
      switch (input[0]) {
        // export
        case "e":
          if (input == "export") {
            return 15;
          } else {
            return null;
          }

        // module
        case "m":
          if (input == "module") {
            return 8;
          } else {
            return null;
          }

        // number
        case "n":
          if (input == "number") {
            return 5;
          } else {
            return null;
          }

        // public
        case "p":
          if (input == "public") {
            return 12;
          } else {
            return null;
          }

        // return
        case "r":
          if (input == "return") {
            return 25;
          } else {
            return null;
          }

        // string, static
        case "s":
          switch (input[2]) {
            // static
            case "a":
              if (input == "static") {
                return 30;
              } else {
                return null;
              }

            // string
            case "r":
              if (input == "string") {
                return 6;
              } else {
                return null;
              }
          }

        // typeof
        case "t":
          if (input == "typeof") {
            return 11;
          } else {
            return null;
          }
      }

    // private, finally, extends, package
    case 7:
      switch (input[0]) {
        // extends
        case "e":
          if (input == "extends") {
            return 29;
          } else {
            return null;
          }

        // finally
        case "f":
          if (input == "finally") {
            return 16;
          } else {
            return null;
          }

        // private, package
        case "p":
          switch (input[1]) {
            // package
            case "a":
              if (input == "package") {
                return 32;
              } else {
                return null;
              }

            // private
            case "r":
              if (input == "private") {
                return 13;
              } else {
                return null;
              }
          }
      }

    // function, continue
    case 8:
      switch (input[0]) {
        // continue
        case "c":
          if (input == "continue") {
            return 39;
          } else {
            return null;
          }

        // function
        case "f":
          if (input == "function") {
            return 35;
          } else {
            return null;
          }
      }

    // interface
    case 9:
      if (input == "interface") {
        return 34;
      } else {
        return null;
      }

    // instanceof, implements
    case 10:
      switch (input[1]) {
        // implements
        case "m":
          if (input == "implements") {
            return 33;
          } else {
            return null;
          }

        // instanceof
        case "n":
          if (input == "instanceof") {
            return 10;
          } else {
            return null;
          }
      }
  }

  return null;
}

function basic_switch(input) {
  switch (input) {
    case "case":
      return 0;
    case "if":
      return 1;
    case "throw":
      return 2;
    case "else":
      return 3;
    case "var":
      return 4;
    case "number":
      return 5;
    case "string":
      return 6;
    case "get":
      return 7;
    case "module":
      return 8;
    case "type":
      return 9;
    case "instanceof":
      return 10;
    case "typeof":
      return 11;
    case "public":
      return 12;
    case "private":
      return 13;
    case "enum":
      return 14;
    case "export":
      return 15;
    case "finally":
      return 16;
    case "for":
      return 17;
    case "while":
      return 18;
    case "void":
      return 19;
    case "null":
      return 20;
    case "super":
      return 21;
    case "this":
      return 22;
    case "new":
      return 23;
    case "in":
      return 24;
    case "return":
      return 25;
    case "true":
      return 26;
    case "false":
      return 27;
    case "any":
      return 28;
    case "extends":
      return 29;
    case "static":
      return 30;
    case "let":
      return 31;
    case "package":
      return 32;
    case "implements":
      return 33;
    case "interface":
      return 34;
    case "function":
      return 35;
    case "try":
      return 36;
    case "yield":
      return 37;
    case "const":
      return 38;
    case "continue":
      return 39;
    case "do":
      return 40;
    case "catch":
      return 41;
  }

  return null;
}

function test_basic_switch() {
  let start = performance.now();
  const len = words.length;
  for (let i = 0; i < len; i++) {
    const word = words[i];
    let index = basic_switch(word);
    let isKeyword = index !== null;
    res[i] = isKeyword;
    // console.log(word, index, isKeyword);
  }
  let took = performance.now() - start;
  return took;
}

function test_nested_switch() {
  let start = performance.now();
  const len = words.length;
  for (let i = 0; i < len; i++) {
    const word = words[i];
    let index = nested_switch(word);
    let isKeyword = index !== null;
    res[i] = isKeyword;
    // console.log(word, index, isKeyword);
  }
  let took = performance.now() - start;
  return took;
}

let iterations = 100;
let time_basic_switch = 0;
let time_nested_switch = 0;
for (let iteration = 0; iteration < iterations; iteration++) {
  if (iteration !== 0 && iteration % (iterations / 10) === 0) {
    console.log(
      "Iteration",
      iteration,
      (time_basic_switch / time_nested_switch).toFixed(3)
    );
  }
  words = shuffle(words);

  time_basic_switch += test_basic_switch();
  time_nested_switch += test_nested_switch();
}

console.log();
console.log("time_basic_switch: ", time_basic_switch);
console.log("time_nested_switch: ", time_nested_switch);

console.log(`${words.length * iterations} checks`);

console.log();
console.log("random result (stop optimization)", shuffle(res[0]));
