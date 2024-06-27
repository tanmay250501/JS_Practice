//createOrder
//proceedToPayment
//showOrderSummary
//updateWallet


const cart = ["Bitcoin", "Ethrium", "Solana", "Dodge"];

// Mock database
let walletBalance = 1000; // Initial wallet balance

// Function to create an order
function createOrder(items) {
    return new Promise((resolve, reject) => {
        // Simulate order creation process
        setTimeout(() => {
            const orderId = Math.floor(Math.random() * 1000); // Generate a random order ID
            resolve({ orderId, items });
        }, 1000);
    });
}

// Function to proceed to payment
function proceedToPayment(orderId, paymentAmount) {
    return new Promise((resolve, reject) => {
        // Simulate payment process
        setTimeout(() => {
            if (paymentAmount <= walletBalance) {
                walletBalance -= paymentAmount; // Deduct payment amount from wallet balance
                resolve(`Payment successful for order ${orderId}`);
            } else {
                const perr = new Error("Insufficient funds in wallet")
                reject(perr);
            }
        }, 1500);
    });
}

// Function to show order summary
function showOrderSummary(orderId, items) {
    return new Promise((resolve, reject) => {
        // Simulate fetching order summary
        setTimeout(() => {
            // Mock order summary
            const orderSummary = {
                orderId: orderId,
                totalAmount: items.length  * 100, // Assuming each item costs $100
                items: items,
            };
            resolve(orderSummary);
        }, 500);
    });
}

// Function to update wallet balance
function updateWallet(amount) {
    return new Promise((resolve, reject) => {
        // Simulate updating wallet balance
        setTimeout(() => {
            walletBalance += amount; // Add amount to wallet balance
            resolve(`Wallet balance updated. Current balance: ${walletBalance}`);
        }, 1000);
    });
}

// Example usage
createOrder(cart)
    .then((orderData) => {
        console.log(`Order created with ID: ${orderData.orderId}`);
        return showOrderSummary(orderData.orderId, orderData.items);
    })
    .then((orderSummary) => {
        console.log("Order summary:");
        console.log(orderSummary);
        return proceedToPayment(orderSummary.orderId, orderSummary.totalAmount);
    })
    .then((paymentResult) => {
        console.log(paymentResult);
        return updateWallet(100); // Adding 100 to wallet balance
    })
    .then((walletUpdateResult) => {
        console.log(walletUpdateResult);
    })
    .catch((perr) => {
        console.error(perr.message);
    });
