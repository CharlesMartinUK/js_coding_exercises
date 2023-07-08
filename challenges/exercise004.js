export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  let r = [];

  for (let c of nums) {
    if (c < 1) r.push(c);
  }

  return r;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here

  let r = [];

  for (let c of names) {
    if (c[0] == char) r.push(c);
  }

  return r;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here

  let r = [];

  for (let c of words) {
    if (c.startsWith("to ")) r.push(c);
  }

  return r;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  let r = [];

  for (let c of nums) {
    if (Number.isInteger(c)) r.push(c);
  }

  return r;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here

  let r = []; // assume only want each city once so use dict

  for (let c of users) {
    r.push(c.data.city.displayName);
  }

  return r;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  let r = [];

  for (let c of nums) {
    r.push(parseFloat(Math.sqrt(c).toFixed(2)));
  }

  return r;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here

  let r = [];

  for (let c of sentences) {
    if (c.toUpperCase().includes(str.toUpperCase())) r.push(c);
  }

  return r;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here

  let r = [];

  for (let c of triangles) {
    r.push(Math.max(...c));
  }

  return r;
}
