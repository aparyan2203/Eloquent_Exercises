//Q1
// For each of the following items, write a regular expression to test whether the given pattern occurs in a string. The regular expression should match only strings containing the pattern. When your expression works, see whether you can make it any smaller.
// car and cat
// pop and prop
// ferret, ferry, and ferrari
// Any word ending in ious
// A whitespace character followed by a period, comma, colon, or semicolon
// A word longer than six letters
// A word without the letter e (or E)
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
// Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue. Now you want to replace all the dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.
// Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace method that does the proper replacement.
let text = "'I'm the cook,' he said, 'it's my job.'";

console.log(text.replace(/(^|\P{L})'|'(\P{L}|$)/gu, '$1"$2'));

//Q3
// Write an expression that matches only JavaScript-style numbers. It must support an optional minus or plus sign in front of the number, the decimal dot, and exponent notation—5e-3 or 1E10—again with an optional sign in front of the exponent. Also note that it is not necessary for there to be digits in front of or after the dot, but the number cannot be a dot alone. That is, .5 and 5. are valid JavaScript numbers, but alone dot isn’t.
/^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/