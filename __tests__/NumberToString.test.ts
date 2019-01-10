import NumberToString from "../src/NumberToString";

const expectations = [
  [0, 'zero'],
  [100, 'hundred'],
  [56945781, 'fifty six million, nine hundred and forty five thousand, seven hundred and eighty one'],
  [1000015, 'one million and fifteen'],
  [1001000012, 'one billion, one million and twelve'],
  [-12302, 'negative twelve thousand, three hundred and two'],
];

test('should throw exception if not an integer number', () => {
  const func = () => {
    const num = new NumberToString(0.00000000001);
  };
  expect(func).toThrow(Error);
});

for (const exp of expectations) {
  const [number, numberAsString] = exp;
  test(`expecting ${number} to be equal ${numberAsString}`, () => {
    const num = new NumberToString(<number>number);
    const result = num.toString();
    expect(result).toEqual(numberAsString);
  });
}
