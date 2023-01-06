module.exports = function toReadable(number) {
    let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let fromTwenty = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 10) {
        return digits[number];
    } else if (number < 20) {
        return tenNineteen[number % 10];
    } else if (number < 100) {
        let index = Math.trunc(number / 10);
        if (number % 10 != 0) {
            return fromTwenty[index] + ' ' + digits[number % 10];
        } else {
            return fromTwenty[index];
        }
    } else if (number < 1000) {
        let hundred = Math.trunc(number / 100);
        let dozens = Math.trunc((number % 100) / 10);
        if (number % 10 != 0) {
            if (dozens === 0) {
                return digits[hundred] + ' hundred ' + digits[number % 10];
            } else if (dozens === 1) {
                return digits[hundred] + ' hundred ' + tenNineteen[number % 10];
            } else {
                return digits[hundred] + ' hundred ' + fromTwenty[dozens] + ' ' + digits[number % 10];
            }
        } else {
            if (dozens === 0) {
                return digits[hundred] + ' hundred';
            } else if (dozens === 1) {
                return digits[hundred] + ' hundred ' + tenNineteen[number % 10];
            } else {
                return digits[hundred] + ' hundred ' + fromTwenty[dozens];
            }
        }
    }

}
