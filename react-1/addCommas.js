function addCommas(number) {
    let str = number.toString()

    let parts = str.split(".");
    let integerPart = parts[0]
    let decimalPart = parts[1] || "";

    let formattedInteger = "";
    let negativeSign = "";

    if (integerPart.charAt(0) === "-") {
        negativeSign = "-";
        integerPart = integerPart.slice(1);
    }

    while (integerPart.length > 3) {
        formattedInteger = "," + integerPart.slice(-3) + formattedInteger;
        integerPart = integerPart.slice(0, integerPart.length - 3);
    }

    let result = negativeSign + integerPart + formattedInteger;
    if (decimalPart !== "") {
        result += "." + decimalPart
    }

    return result;
}


module.exports = addCommas;
