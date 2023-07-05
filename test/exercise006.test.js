import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered ,
} from "../challenges/exercise006";


describe("sumMultiples", () => {
  test("returns sum of any numbers that ate multiple of 3 or 5 in the array", () => {
    expect(sumMultiples([ 3, 5])).toBe(8);
    expect(sumMultiples([ 2, 4, 5])).toBe(5);
    expect(sumMultiples([10, 2, 15, 1, 3])).toBe(28);
  });


  test("returns 0 on empty array", () => {
    expect(sumMultiples([])).toBe(0);
  });
  
  test("returns 0 if nothing is found", () => {
    expect(sumMultiples([2,4])).toBe(0);
  });
 
});

describe("isValidDNA", () => {
  test("returns boolean if string contains only  C, G, T or A", () => {
    
    expect(isValidDNA("C")).toBe(true);
    expect(isValidDNA("G")).toBe(true);
	expect(isValidDNA("T")).toBe(true);
	expect(isValidDNA("A")).toBe(true);
	expect(isValidDNA("CGTA")).toBe(true);
	expect(isValidDNA("CGTAF")).toBe(false);
	expect(isValidDNA("CGHTA")).toBe(false);
  });


  test("returns false on empty string", () => {
    expect(isValidDNA("")).toBe(false);
  });
  
});


describe("getComplementaryDNA", () => {
  test("returns pair of DNA: T pairs with A, C pairs with G", () => {
	  expect(getComplementaryDNA("T")).toBe("A");
	  expect(getComplementaryDNA("C")).toBe("G");
	  expect(getComplementaryDNA("A")).toBe("T");
	  expect(getComplementaryDNA("G")).toBe("C");
	  expect(getComplementaryDNA("ACTG")).toBe("TGAC");
  });
  
});

describe("isItPrime", () => {
  test("returns boolean based on number been prime", () => {
	expect(isItPrime("1")).toBe(false);
	expect(isItPrime("2")).toBe(true);
	expect(isItPrime("3")).toBe(true);
	expect(isItPrime("4")).toBe(false);
	expect(isItPrime("100")).toBe(false);
	expect(isItPrime("101")).toBe(true);
  });
  
});

describe("createMatrix", () => {
  test("creates matrix: first parameter is size, second param is inital value", () => {
	expect(createMatrix(1, 99 )).toStrictEqual([[99]]);
	expect(createMatrix(2, 88 )).toStrictEqual([ [88,88],[88,88] ]);
	expect(createMatrix(4, "spam" )).toStrictEqual([ ["spam","spam","spam","spam"],
													["spam","spam","spam","spam"],
													["spam","spam","spam","spam"],
													["spam","spam","spam","spam"]]);
  });
});



describe("areWeCovered", () => {
	const sal  = { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] }
	const pedro = { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] }
	const george = { name: "George", rota: [ "Monday", "Tuesday", "Wednesday"] }
	const jill = { name: "Jill", rota: [ "Monday"] }
	
  test("are at least 3 members of staff available", () => {
	expect(areWeCovered([sal, pedro  ],"Tuesday")).toBe(false);
	expect(areWeCovered([sal, pedro, george  ],"Tuesday")).toBe(true);
	expect(areWeCovered([sal, pedro, jill  ],"Saturday")).toBe(false);
	expect(areWeCovered([sal, pedro, george, jill  ],"Monday")).toBe(true);
  });
  
});