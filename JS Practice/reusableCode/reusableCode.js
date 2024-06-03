const radius = [3 , 1, 2 ,4]


// <----- use to calculate area
const area = function(radius){
    return Math.PI * radius * radius;
}

// <----- use to calculate circuference 

const cicumference = function(radius){
    return  2 * Math.PI * radius
}

const calculate = function(radius , logic){
    const output = []

    for(let i = 0 ; i<radius.length ; i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius , area))
console.log(calculate(radius , cicumference))