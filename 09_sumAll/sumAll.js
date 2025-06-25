const sumAll = function(a, b) 
{
    if ((a < 0 || b < 0) || !Number.isInteger(a) || !Number.isInteger(b))
        return "ERROR";

    if (a > b)
    {
        let temp = a;
        a = b;
        b = temp;
    }
    
    let sum = 0;
    for(; a<=b; a++)
    {
        sum+=a;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
