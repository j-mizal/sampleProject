const playerOne = {
    name: 'Jess',
    age: 21,
    jerseyNum: 17, 
    active: true,
    injured: false
};

const playerArray = [
    ['name', 'Jackson'],
    ['age', 22],
    ['jerseyNum', 10],
    ['active', true]
]


/*
const clonedPlayerOne = Object.assign({}, playerOne, {
    name: 'Jordan',
    injured: true,
    allStar: true
})
*/
/*
const test = Object.entries(playerOne);
console.log(test[1]);
*/
/*
const arrayToObject = Object.fromEntries(playerArray);
console.log(arrayToObject);
arrayToObject.Object.assign{}
*/


const numbers = [3, 6, 2, 9, 1];
const sum = numbers.reduce((p, c) => {
    return p + c;
}, 0);

console.log(sum);


//added this comment here. test only 