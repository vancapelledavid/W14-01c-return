let number = 4;
const checkNum = number => number > 100;

let result = checkNum(number);
console.log(result);


const checkOnEntry = function (maxOccupance, occupance, age) {
    if (occupance >= maxOccupance) {
        return (`It's too busy now, come back later`)
    } else if (age < 18) {
        return (`This is a club for adults`)
    }
    return (`Come in`);
}

console.log(checkOnEntry(100, 99, 17));

const checkOnEntryAlt = function (maxOccupance, occupance, age) {
    return (occupance >= maxOccupance ?
        (`It's too busy now, come back later`) :
        (age < 18 ?
            (`This is a club for adults`) :
            (`Come in`)));
}

console.log(checkOnEntryAlt(100, 0, 19));

const calcAverage = function (num1, num2, num3, num4, num5) {
    let sum = num1 + num2 + num3 + num4 + num5;
    return Math.round(sum / 5);
}

console.log(calcAverage(1, 2, 3, 4, 8))
