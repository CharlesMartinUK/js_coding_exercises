export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!

  return person.city == "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!

  return Math.ceil(people / 40);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let count = 0;

  for (var s of arr) {
    if (s == "sheep") count++;
  }

  return count;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!

  if (person.address.postCode[0] == "M") {
    if (person.address.city != "Manchester") return false;
    return true;
  }
  return false;
}
