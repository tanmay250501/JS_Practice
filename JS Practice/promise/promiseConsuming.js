const cart = ['kurta', 'Jeans', 'paijama', 'Trouser'];

const promise = createOrder(cart);


promise.then( (orderId) => {
    console.log(orderId)
    return orderId
})
    .then(function (orderId) {
        return procedeToPayment(orderId)
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo)
    })
    .catch((err) => console.log(err.message))
    .catch((perr) => console.log(perr.message))




function createOrder(cart) {

    const pr = new Promise(function (resolve, reject) {
        // here comse the logic for reject 

        if (!validateCart(cart)) {
            const err = new Error("Cart is not Valid");
            reject(err);
        }

        // here comes logic for the resolve

        // let our order id be "12345"

        const orderId = '12345';

        if (orderId) {
            setTimeout(function () {
                resolve('This your order ID : ' + orderId)
            },1000 )
        }


    });

    return pr;

}
// for validate the cart
function validateCart(cart) {
    return true;
}

function procedeToPayment(orderId) {
    return new Promise(function (resolve, reject) {

        if (!validatePayment(orderId)) {
            perr = new Error("Payment Failed : Order ID is not valid")
            reject(perr)
        }

        if (orderId) {

            resolve("Payment is Succesfull!")
        }
    });
}
// for validate the Payment
function validatePayment(orderId) {
    return true;
}