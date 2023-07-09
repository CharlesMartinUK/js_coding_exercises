export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  var r = [];

  for (let c of nums) {
    r.push(c * c);
  }

  return r;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!

  var r = "";

  for (let i in words) {
    if (i == 0) r += words[i];
    else r += words[i][0].toUpperCase() + words[i].slice(1);
  }

  return r;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let r = 0;

  for (let c of people) r += c.subjects.length;

  return r;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!

  for (let c of menu) {
    if (c.ingredients.indexOf(ingredient) >= 0) return true;
  }

  return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  let dups = [];

  for (var c of arr1) {
    if (arr2.indexOf(c) >= 0) {
      if (dups.indexOf(c) == -1) dups.push(c); // only add unique
    }
  }

  return dups.sort();
}
