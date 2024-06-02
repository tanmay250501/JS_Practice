// array in js

let arr = [1 , 2, 3, 4];

console.log(arr)

// getting perticular value from array using index

console.log(arr[0])
console.log(arr[2])
console.log(arr[3])

// changing value in arr using index

arr[0] = 10;

console.log(arr[0])
console.log(arr)

// (1) .removing value from arr using pop method

arr.pop() // ---> it will remove the last value from array and will decrease the length of arr by -1
console.log(arr)

// (2) . adding value in arr using push method

arr.push(45); // ---> it will add the value in the arr in the last 
console.log(arr);

// (3) . removing 1st element from the array using shift() method

arr.shift()
console.log(arr);

// (4) .The unshift( ) method is used to add one or more elements to the beginning of the array and returns the new length of array.

arr.unshift(10 , 100)
console.log(arr);

// When using an array inside an array, you can access the value of the inner array directly 

let arr1 = [ 1, 2 , [2 , 3]]

console.log(arr1[2][1]) // --> If you access the array outside its range, i.e., pass an invalid index(whether negative or greater than the array’s length), then undefined is returned.
console.log(arr1)