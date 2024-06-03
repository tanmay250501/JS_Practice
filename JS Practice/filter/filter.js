const arr = [5 , 6 , 7, 8]
// Their are two types in which you can use filter


// 1. Using an arrow function  " => "
const output = arr.filter((x) => x % 2 ===0) // ---> This can also be used for the same

console.log(output)


// 2. Using callback function
const isOdd = function(x){
    return x % 2
}

const otp = function(x){
    return console.log(arr.filter(x))
}

otp(isOdd)