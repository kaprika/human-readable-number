module.exports = function toReadable(number) {
  const digits = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const tenNineteen = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const fromTwenty = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  if (number < 10) {
    return digits[number];
  }
  if (number < 20) {
    return tenNineteen[number % 10];
  }
  if (number < 100) {
    const index = Math.trunc(number / 10);
    if (number % 10 !== 0) {
      return `${fromTwenty[index]} ${digits[number % 10]}`;
    }
    return fromTwenty[index];
  }

  if (number < 1000) {
    const hundred = Math.trunc(number / 100);
    const dozens = Math.trunc((number % 100) / 10);
    if (number % 10 !== 0) {
      if (dozens === 0) {
        return `${digits[hundred]} hundred ${digits[number % 10]}`;
      }
      if (dozens === 1) {
        return `${digits[hundred]} hundred ${tenNineteen[number % 10]}`;
      }
      return `${digits[hundred]} hundred ${fromTwenty[dozens]} ${digits[number % 10]}`;
    }
    if (dozens === 0) {
      return `${digits[hundred]} hundred`;
    }
    if (dozens === 1) {
      return `${digits[hundred]} hundred ${tenNineteen[number % 10]}`;
    }
    return `${digits[hundred]} hundred ${fromTwenty[dozens]}`;
  }
  return '';
};
