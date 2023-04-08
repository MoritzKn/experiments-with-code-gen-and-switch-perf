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
          return 40;

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
          return 28;

        // for
        case "f":
          return 17;

        // get
        case "g":
          return 7;

        // let
        case "l":
          return 31;

        // new
        case "n":
          return 23;

        // try
        case "t":
          return 36;

        // var
        case "v":
          return 4;
      }

    // case, else, type, enum, void, null, this, true
    case 4:
      switch (input[0]) {
        // case
        case "c":
          return 0;

        // else, enum
        case "e":
          switch (input[1]) {
            // else
            case "l":
              return 3;

            // enum
            case "n":
              return 14;
          }

        // null
        case "n":
          return 20;

        // type, this, true
        case "t":
          switch (input[1]) {
            // this
            case "h":
              return 22;

            // true
            case "r":
              return 26;

            // type
            case "y":
              return 9;
          }

        // void
        case "v":
          return 19;
      }

    // throw, while, super, false, yield, const, catch
    case 5:
      switch (input[0]) {
        // const, catch
        case "c":
          switch (input[1]) {
            // catch
            case "a":
              return 41;

            // const
            case "o":
              return 38;
          }

        // false
        case "f":
          return 27;

        // super
        case "s":
          return 21;

        // throw
        case "t":
          return 2;

        // while
        case "w":
          return 18;

        // yield
        case "y":
          return 37;
      }

    // number, string, module, typeof, public, export, return, static
    case 6:
      switch (input[0]) {
        // export
        case "e":
          return 15;

        // module
        case "m":
          return 8;

        // number
        case "n":
          return 5;

        // public
        case "p":
          return 12;

        // return
        case "r":
          return 25;

        // string, static
        case "s":
          switch (input[2]) {
            // static
            case "a":
              return 30;

            // string
            case "r":
              return 6;
          }

        // typeof
        case "t":
          return 11;
      }

    // private, finally, extends, package
    case 7:
      switch (input[0]) {
        // extends
        case "e":
          return 29;

        // finally
        case "f":
          return 16;

        // private, package
        case "p":
          switch (input[1]) {
            // package
            case "a":
              return 32;

            // private
            case "r":
              return 13;
          }
      }

    // function, continue
    case 8:
      switch (input[0]) {
        // continue
        case "c":
          return 39;

        // function
        case "f":
          return 35;
      }

    // interface
    case 9:
      return 34;

    // instanceof, implements
    case 10:
      switch (input[1]) {
        // implements
        case "m":
          return 33;

        // instanceof
        case "n":
          return 10;
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
    let isKeyword = index !== null && word === keywords[index];
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
