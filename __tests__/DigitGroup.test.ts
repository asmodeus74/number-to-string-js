import DigitGroup from "../src/DigitGroup";

const expectations = [
  ['0', 0, "zero"],
  ['1', 0, "one"],
  ['13', 0, "thirteen"],
  ['21', 0, "twenty one"],
  ['100', 0, "hundred"],
  ['112', 0, "one hundred and twelve"]
];

for (const exp of expectations) {
  const [number, nameIndex, numberAsString] = exp;
  test(`expecting ${number} to be equal ${numberAsString}`, () => {
    const group = new DigitGroup(<string>number, <number>nameIndex);
    expect(group.toString()).toEqual(numberAsString);
  });
}
