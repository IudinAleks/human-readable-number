module.exports = function toReadable(number) {
    //Список письменных обозначений цифр
    let numberToWordArr = {
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

    // Функция преобразованя чисел > 99 в письменный вид
    function toHundred(number) {
        if (number > 99 && number % 100 !== 0) {
            return (
                numberToWordArr[Math.floor(number / 100)] +
                " hundred " +
                toTens(number % 100)
            );
        } else if (number > 99 && number % 100 === 0)
            return numberToWordArr[Math.floor(number / 100)] + " hundred";
        return toTens(number);
    }

    // Функция преобразованя чисел < 100 в письменный вид
    function toTens(number) {
        if (number === 0) return "zero";
        if (number < 20 || number % 10 === 0) {
            return numberToWordArr[number];
        } else {
            return (
                numberToWordArr[Math.floor(number / 10) * 10] +
                " " +
                numberToWordArr[number % 10]
            );
        }
    }

    return toHundred(number);
};
