const { sum, objReturns } = require("../index");

test("adds to equal 10", () => {
  expect(sum(1, 9)).toBe(10);
});

/** TIP
 * toEqual ignores object keys with undefined properties,
 *  undefined array items, array sparseness, or object type mismatch.
 * To take these into account use toStrictEqual instead.
 */
test("obj to equal", () => {
  expect(objReturns({ two: 3 })).toEqual({ one: 1, two: 3 });
});

test("", () => {
  expect();
});
