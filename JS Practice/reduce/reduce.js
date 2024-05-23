// Here we will talk about how to write and use reduce function

const arr = [8 , 9 , 10 , 45 , 7];

// sum or max

function findSum(arr){
    let sum = 0;

    for(let i = 0 ; i<arr.length ; i++){
        sum = sum + arr[i]
    }
    return sum;
}

// using the same example by using reduc
const output = arr.reduce(function (acc , curr){
    acc = acc + curr; // here curr => arr[i]
    return acc; // acc => sum
}, 0);

console.log(output)

// use to find max 
console.log(findSum(arr))

function findMax(arr){
    let max = 0;

    for(let i = 0 ; i<arr.length ; i++){
        if( arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

console.log(findMax(arr))

// using reduc() to find max

const output1 = arr.reduce(function(acc , curr){
    if(curr > acc){
        acc = curr
    }
    return acc ;
}, 0)

console.log(output1)


const users = [
    {firstName : "tanmay" , lastName : "sawwalakhe" , age: 23},
    {firstName : "vaishnavi" , lastName : "sawwalakhe" , age: 27},
    {firstName : "vedant" , lastName : "bopanwar" , age: 23},
    {firstName : "deepak" , lastName : "mandwakar" , age: 24},
]

//  firstName and age < 24 using filter ()

const ageLess30 = users.filter(x => x.age < 24).map(x => x.firstName)

console.log(ageLess30)

//  firstName and age < 24 using reduce ()

const ageLess24 = users.reduce(function(acc , curr){
    if(curr.age< 24){
        acc.push(curr.firstName)
    }
    return acc
}, [])
console.log(ageLess24)
// const print = users.map( x => x.firstName + " " + x.lastName)

// console.log(print)


// acc = {23 : 2, 24 : 1 , 27 : 1}

const age1 = users.reduce( function(acc , curr){
    if(acc[curr.age]){
        acc[curr.age] = ++ acc[curr.age];
    }else {
        acc[curr.age] = 1;
    }
    return acc;
} , {})

console.log(age1)



