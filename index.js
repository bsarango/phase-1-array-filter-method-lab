// Code your solution here


function findMatching(drivers,driverName){
    return drivers.filter(function (elementName){return elementName === driverName || elementName === driverName.toLowerCase()})
}

function fuzzyMatch(drivers, nameLetters){
    return drivers.filter(function (elementName){return elementName.startsWith(nameLetters) || (elementName.toLowerCase()).startsWith(nameLetters)})
}

function matchName(drivers, driverName){
    return drivers.filter(function (driverObject){return driverObject.name === driverName})
}
