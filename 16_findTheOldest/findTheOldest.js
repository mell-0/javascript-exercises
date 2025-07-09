const findTheOldest = function(pplArr) { // this function returns the object of the oldest person
    let sortArr = pplArr.sort((a, b) => 
    {
        if (!('yearOfDeath' in b)) // checks if yearOfDeath key is in object b
        { // if not get the current year
            const year = new Date().getFullYear();
            return (year - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
        }   
        else
        {
            return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
        }
            
    });

    return sortArr[0];
    // do it the reduce way
};

// Do not edit below this line
module.exports = findTheOldest;
