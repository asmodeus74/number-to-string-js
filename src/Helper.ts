import DigitGroup from "./DigitGroup";

export default class Helper {
  static getDigitParts(number: number): string[] {
    let numberAsString = number.toString();
    if (numberAsString[0] == "-") {
      numberAsString = numberAsString.substr(1);
    }
    let len = numberAsString.length;
    const digitGroups = [];
    while (len > 0) {
      let start = len - 3;
      let take = 3;
      if (start < 0) {
        take = 3 + start;
        start = 0;
      }
      digitGroups.push(numberAsString.substr(start, take));
      len -= 3;
    }
    return digitGroups;
  }

  static getDigitGroups(number: number): DigitGroup[] {
    const parts = Helper.getDigitParts(number);
    const digitGroups = [];
    let nameIndex = 0;
    for (const part of parts) {
      digitGroups.push(new DigitGroup(part, nameIndex));
      nameIndex++;
    }
    return digitGroups.reverse();
  }
}
