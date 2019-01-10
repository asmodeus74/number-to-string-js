import DigitGroup from "./DigitGroup";
import Helper from "./Helper";

export default class NumberToString {
  number: number;

  constructor(number: number) {
    if (!Number.isInteger(number)) {
      throw new Error("Invalid number");
    }
    this.number = number;
  }

  public toString() {
    const digitGroups = Helper.getDigitGroups(this.number);
    let negative = this.number < 0;
    let groupIndex = digitGroups.length;
    let numberAsString = "";
    for (const group of digitGroups) {
      groupIndex--;
      let word = group.toString();
      if (numberAsString && word) {
        if (groupIndex == 0 && parseInt(group.digits) < 100) {
          numberAsString += " and ";
        } else {
          numberAsString += ", ";
        }
      }
      numberAsString += word;
    }
    return negative ? "negative " + numberAsString : numberAsString;
  }
}
