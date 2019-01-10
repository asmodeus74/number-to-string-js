import Helper from "../src/Helper";

test('expecting Helper to create 2 string groups', () => {
  const groups = Helper.getDigitParts(110212);
  expect(groups.length).toEqual(2);
});

test('expecting Helper to create 3 digit groups', () => {
  const groups = Helper.getDigitGroups(6110212);
  expect(groups.length).toEqual(3);
});
