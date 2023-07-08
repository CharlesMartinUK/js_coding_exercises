// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!

  return (firstName[0] + "." + lastName[0]).toUpperCase();
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!

  return parseFloat((originalPrice * (1 + vatRate / 100)).toFixed(2));
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!

  return parseFloat(
    (originalPrice - originalPrice * (reduction / 100)).toFixed(2),
  );
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!

  let mi = Math.floor(str.length / 2);

  if (str.length % 2 == 0) return str.substr(mi - 1, 2);
  else return str[mi];
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return [...word].reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  let r = [];
  for (let w of words) r.push([...w].reverse().join(""));

  return r;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!

  let count = 0;

  for (let u of users) {
    if (u.type == "Linux") count++;
  }

  return count;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!

  let a = 0;
  for (let c of scores) {
    a += c;
  }

  return parseFloat((a / scores.length).toFixed(2));
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!

  if (n % 3 == 0 && n % 5 == 0) return "fizzbuzz";

  if (n % 3 == 0) return "fizz";

  if (n % 5 == 0) return "buzz";

  return n;
}
