const cart = ["shoes", "pants", "kurta" ]

createOrder(cart , function(orderId){
    procedToPayment(orderId)
})

const promise = createOrder(cart);

// {object : undefined}  --> emty object
// after line 7 is exicuted the emty object will have promise {object : Promise}

// promise.then(function(orderId){
//     procedToPayment(orderId)
// })

createOrder(cart)
    .then(function(orderId) {
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function(paymentInfo) {
        return updateWalletBalance(paymentInfo);
    });

    // or use arrow function to increase redability

createOrder(cart)
.then((orderId) =>procedToPayment(orderId) )
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updateWalletBalance(paymentInfo))


// Example (1)..

const GITHUB_API = "https://api.github.com/users/tanmay250501";

const users = fetch(GITHUB_API)

console.log(users)

users.then((data)=>{
    console.log(data)
})

//  summary
// 1. Before promise we used to depend on callback functions which would result in 1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control
// 2. Inversion of control is overcome by using promise.
// 2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
// 2.2) A promise has 3 states: pending | fulfilled | rejected.
// 2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state.
// 2.4) A promise resolves only once and it is immutable. 
// 2.5) Using .then() we can control when we call the cb(callback) function.

// 3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands vertically instead of horizontally. Chaining is done using '.then()'
// 4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to return a value. This returned value will be used by the next .then()



