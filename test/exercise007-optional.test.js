import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise007-optional";

describe("sumDigits", () => {
  test("returns number that is the sum off all digits eg 123 return 6", () => {
    expect(sumDigits(1)).toEqual(1);
    expect(sumDigits(12)).toEqual(3);
    expect(sumDigits(123)).toEqual(6);
    expect(sumDigits(961)).toEqual(16);
  });

  test("returns 0", () => {
    expect(sumDigits(0)).toEqual(0);
  });
});

describe("createRange", () => {
  test("returns array starting from param 1, to param 2, by optional pareameter 3", () => {
    expect(createRange(0, 1)).toEqual([0, 1]);
    expect(createRange(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(createRange(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]); //test step
    expect(createRange(3, 10)).toEqual([3, 4, 5, 6, 7, 8, 9, 10]); // test start and end
    expect(createRange(3, 10, 2)).toEqual([3, 5, 7, 9]); // test all
    expect(createRange(3, 28, 8)).toEqual([3, 11, 19, 27]); // test all
  });

  test("returns 0", () => {
    expect(createRange(0, 0)).toEqual([0]);
    expect(createRange(0, 0, 4)).toEqual([0]);
  });
});

describe("getScreentimeAlertList", () => {
  const beth = {
    username: "beth_1234",
    name: "Beth Smith",
    screenTime: [
      {
        date: "2019-05-01",
        usage: { twitter: 34, instagram: 22, facebook: 40 },
      },
      {
        date: "2019-05-02",
        usage: { twitter: 56, instagram: 40, facebook: 31 },
      },
      {
        date: "2019-05-03",
        usage: { twitter: 12, instagram: 15, facebook: 19 },
      },
      {
        date: "2019-05-04",
        usage: { twitter: 10, instagram: 56, facebook: 61 },
      },
    ],
  };

  const sam = {
    username: "sam_j_1989",
    name: "Sam Jones",
    screenTime: [
      {
        date: "2019-06-11",
        usage: { mapMyRun: 50, whatsApp: 30, facebook: 40, safari: 10 },
      },
      {
        date: "2019-06-13",
        usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
      },
      {
        date: "2019-06-14",
        usage: { mapMyRun: 90, whatsApp: 0, facebook: 0, safari: 31 },
      },
    ],
  };

  const justinUnder = {
    username: "justin_u_1988",
    name: "Justin Under",
    screenTime: [
      {
        date: "2019-06-11",
        usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 100 },
      },
      {
        date: "2019-06-13",
        usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 99 },
      },
      {
        date: "2019-06-14",
        usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 101 },
      },
    ],
  };

  test("returns list of users with over 100 minutes of screen time a day", () => {
    expect(getScreentimeAlertList([beth], "2019-05-04")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList([sam], "2019-06-13")).toEqual([]);
    expect(getScreentimeAlertList([justinUnder], "2019-06-11")).toEqual([]);
    expect(
      getScreentimeAlertList([beth, sam, justinUnder], "2019-06-14"),
    ).toEqual(["sam_j_1989", "justin_u_1988"]);
    expect(
      getScreentimeAlertList([beth, sam, justinUnder], "2019-06-13"),
    ).toEqual([]);
  });

  test("handle nothing", () => {
    expect(getScreentimeAlertList([], "2019-05-04")).toEqual([]);
  });
});

describe("hexToRGB", () => {
  test("returns rgb from hex eg #FFAA33", () => {
    expect(hexToRGB("#FF0000")).toEqual([255, 0, 0]);
    expect(hexToRGB("#00FF00")).toEqual([0, 255, 0]);
    expect(hexToRGB("#0000FF")).toEqual([0, 0, 255]);
    expect(hexToRGB("#AA00AA")).toEqual([170, 0, 170]);
  });
});

describe("findWinner", () => {
  test("finds winner on board p1 = x, 0 = p2", () => {
    expect(
      findWinner([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]),
    ).toEqual(null);

    expect(
      findWinner([
        ["X", "X", "X"],
        [null, null, null],
        [null, null, null],
      ]),
    ).toEqual("X");

    expect(
      findWinner([
        [null, null, null],
        ["X", "X", "X"],
        [null, null, null],
      ]),
    ).toEqual("X");

    expect(
      findWinner([
        [null, null, null],
        [null, null, null],
        ["X", "X", "X"],
      ]),
    ).toEqual("X");

    expect(
      findWinner([
        ["Y", null, null],
        ["Y", null, null],
        ["Y", null, null],
      ]),
    ).toEqual("Y");

    expect(
      findWinner([
        [null, "Y", null],
        [null, "Y", null],
        [null, "Y", null],
      ]),
    ).toEqual("Y");

    expect(
      findWinner([
        ["Y", null, null],
        [null, "Y", null],
        [null, null, "Y"],
      ]),
    ).toEqual("Y");

    expect(
      findWinner([
        [null, null, "X"],
        [null, "X", null],
        ["X", null, null],
      ]),
    ).toEqual("X");
  });
});
