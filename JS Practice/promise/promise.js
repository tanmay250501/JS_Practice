const cart = ["shoes", "pants", "kurta" ]

createOrder(cart , function(orderId){
    procedToPayment(orderId)
})

const promise = createOrder(cart);

// {object : undefined}  --> emty object
// after line 7 is exicuted the emty object will have promise {object : Promise}

promise.then(function(orderId){
    procedToPayment(orderId)
})
