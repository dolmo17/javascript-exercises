const calculateAge = (birth, death) => {
    return death - birth;
}

const findTheOldest = (people) => {
    let maxAge = 0;
    let age = 0;
    let oldest = {};

    for (let person of people) {
        debugger;
        if (person.hasOwnProperty('yearOfDeath')) {
            age = person.yearOfDeath - person.yearOfBirth;
        // handle if yearOfDeath is missing
        } else {
            const thisYear = new Date().getFullYear();
            age = thisYear - person.yearOfBirth;
        }
        
        // update oldest person and maximum age encountered if necessary
        if (age > maxAge) {
            maxAge = age;
            oldest = person;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
