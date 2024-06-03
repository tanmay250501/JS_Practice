const arr = [5 , 6 , 7, 8]

// Double the arr

const double = function(x){
    return x * 2;
}


// Triple the arr
const triple = function(x){
    return x * 3
}

// Change arr to binary

const binary = function(x){
    return x.toString(2)
}

//  Output 
const output = function(x){
    return console.log(arr.map(x))
}

output(double)

output(triple)

output(binary)