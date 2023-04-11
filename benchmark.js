const fs = require("fs");

const basic_switch = require("./basic_switch");
const nested_switch = require("./nested_switch");

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

const checks = words.length * iterations;

console.log();
console.log(
  "time_basic_switch:",
  time_basic_switch.toFixed(5) + "ms",
  (checks / (time_basic_switch / 1000.0) / 1_000_000.0).toFixed(1) + "M/s"
);
console.log(
  "time_nested_switch:",
  time_nested_switch.toFixed(5) + "ms",
  (checks / (time_nested_switch / 1000.0) / 1_000_000.0).toFixed(1) + "M/s"
);

console.log(`${checks} checks`);

console.log();
console.log("random result (stop optimization)", shuffle(res[0]));
