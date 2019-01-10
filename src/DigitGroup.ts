import {
  secondDigitWords,
  firstDigitWords,
  tenToTwentyWords,
  numberNames
} from "./words";

export default class DigitGroup {
  digits: string;
  nameIndex: number = 0;

  constructor(digits: string, nameIndex: number) {
    this.digits = digits;
    this.nameIndex = nameIndex;
  }

  secondDigitToWord(digit) {
    return secondDigitWords[parseInt(digit)];
  }

  firstDigitToWord(digit) {
    return firstDigitWords[parseInt(digit)];
  }

  tenToTwentyToWord(num) {
    return tenToTwentyWords[parseInt(num) - 10];
  }

  toString(): string {
    if (parseInt(this.digits) == 0) {
      return this.nameIndex > 0 ? "" : "zero";
    }
    let digitsAsString = this._toString();
    if (this.nameIndex > 0) {
      digitsAsString += " " + numberNames[this.nameIndex];
    }
    return digitsAsString;
  }

  formatDigit(index: number, digitIndex: number): string {
    const digit = parseInt(this.digits[digitIndex]);
    if (digit === 0) {
      return "";
    }
    switch (index) {
      case 3:
        return this.firstDigitToWord(digit) + " hundred";
      case 2:
        return digit == 1
          ? this.tenToTwentyToWord(this.digits.substr(-2, 2))
          : this.secondDigitToWord(digit);
      case 1:
        return this.firstDigitToWord(digit);
    }
  }

  _toString(): string {
    let digitsAsString = "";
    if (this.digits.length == 0) {
      return digitsAsString;
    }
    let tenths = 0;
    if (parseInt(this.digits) == 100) {
      return "hundred";
    }
    let word = "";
    for (let i = this.digits.length; i > 0; i--) {
      switch (i) {
        case 3:
          digitsAsString += this.formatDigit(3, 0);
          break;
        case 2:
          word += this.formatDigit(2, this.digits.length - i);
          if (digitsAsString && word) {
            digitsAsString += " and ";
          }
          digitsAsString += word;
          tenths = parseInt(this.digits[this.digits.length - i]);
          if (tenths == 1) {
            return digitsAsString;
          }
          break;
        case 1:
          word = this.formatDigit(1, this.digits.length - 1);
          if (digitsAsString) {
            digitsAsString += tenths == 0 ? " and " : " ";
          }
          digitsAsString += word;
          break;
      }
    }
    return digitsAsString;
  }
}
