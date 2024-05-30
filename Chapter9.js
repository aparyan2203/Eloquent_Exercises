//Q1
verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(/ferr(et | y | ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/[a-zA-Z]*ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/[a-zA-Z]{7,}/,
       ["bad punctuation ."],
       ["escape the period"]);

verify(/\b(?![a-zA-Z]*[eE])[a-zA-Z]+\b/g,
       ["red platypus", "wobbling nest"],
       ["earth bed", "bedrøvet abe", "BEET"]);

//Q2
let text = "'I'm the cook,' he said, 'it's my job.'";

console.log(text.replace(/(^|\P{L})'|'(\P{L}|$)/gu, '$1"$2'));

//Q3
/^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/