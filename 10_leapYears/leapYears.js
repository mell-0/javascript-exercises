// Leap years are years divisible by four (like 1984 and 2004). However, years divisible
// by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 
// (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
const leapYears = function(year) 
{
    let isLeap = false;

    if (year % 4 === 0) // 1984, 1900, 2000 will pass
    {
        if (Number.isInteger(year / 100)) // 1800 and 1900 & 1600 and 2000 will pass
        {
            if (Number.isInteger(year / 400)) // 1600 and 2000 will pass
            {
                isLeap = true;
            } 
            // 1800 and 1900 will not pass
        }
        else // 1984, 2004 will pass
        {
            isLeap = true;
        }
        
    }

    return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
