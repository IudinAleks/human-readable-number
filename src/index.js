module.exports = function toReadable(number) {
    //Список письменных обозначений цифр
    let wordNumbArr = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    function toText(number) {
        if (number === 0) return "";
        return toHundred(number);
    }

    function toHundred(numbers) {
        if (number > 99)
            return (
                wordNumbArr[Math.floor(number / 100)] +
                " hundred " +
                toTens(number % 100)
            );
        return toTens(number);
    }

    function toTens(number) {
        if (number < 20) {
            return wordNumbArr[number];
        } else {
            return (
                wordNumbArr[Math.floor(number / 10) * 10] +
                " " +
                wordNumbArr[number % 10]
            );
        }
    }
    return toText(number);
};
