const removeFromArray = function(...theArgs) // this lets us have dynamic number of parameters
{
    // use splice and find method?
    // use argument object?
    let arr = theArgs[0];
    
    // loops throught the argument array
    for(let i=1; i<theArgs.length; i++) // starts at 1 bc index 0 is array
    {
        let numToRemove = theArgs[i];

        for(let i=0; i<arr.length; i++)
        {
            if (numToRemove === arr[i])
            {
                console.log(`Removing ${arr[i]} in index ${i}`);
                arr.splice(i, 1);
                i--;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
