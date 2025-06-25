const reverseString = function(str) 
{
    let strArr = str.split('');
    let reverseStr = strArr.reverse();

    let newStr = '';
    for(let i=0; i<str.length; i++)
    {
        newStr += reverseStr[i];
    } 

    console.log(newStr);
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
