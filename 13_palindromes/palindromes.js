const palindromes = function (str) {
    let newStr = str.toLowerCase().replace(/[^\w\s]|_/g, "").replaceAll(" ", "");

    let strArr = newStr.split("").reverse().join('');

    return strArr === newStr;
};

// Do not edit below this line
module.exports = palindromes;
