// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    let newArray = array.slice(0, 2);
    return newArray;
}

const returnLastTwoDrivers = function (array) {
    let newArray = array.slice(array.length - 2, array.length);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    const fareMultiplier = function (fare) {
        return fare *int;
    };
    return fareMultiplier;
}  

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

/* const fareDoubler = function (fare) {
    return fare * 2;
}; */

function selectDifferentDrivers(arrayNames, f){
    return f(arrayNames);
}
    