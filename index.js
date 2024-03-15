// Code your solution in this file!
const array = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(array){
    const newArray = array
    return newArray.slice(0,2);
}

function returnLastTwoDrivers(array){
    const newArray = array
    return  newArray.slice(-2);
}

console.log(returnFirstTwoDrivers(array));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a){
    return function(b){
        return b * a;
    }
}


const fareDoubler = createFareMultiplier(2);
function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(DriverArray, driverSelection){
    return driverSelection(DriverArray);
}
    const FirstTwoDrivers = selectDifferentDrivers(array, returnFirstTwoDrivers); 
    console.log(FirstTwoDrivers);
    const LastTwoDrivers = selectDifferentDrivers(array, returnLastTwoDrivers);
    console.log(LastTwoDrivers);

 
