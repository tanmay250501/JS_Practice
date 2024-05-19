console.log("Hello");

function x(y){
    console.log("x");
    y();
};

x( function y(){
    console.log("y");
});

setTimeout(function (){
    console.log("Timer is expired");

} , 3000)

function attactEventlistener(){
    let count = 0;

    document.getElementById("clickMe")
    .addEventListener("click", function xyz(){
        console.log("Button Clicked" , ++count);
    });
}

attactEventlistener();

document.write("Hello")



// console.log("Start");

// setTimeout(function cbT(){
//     console.log("CB SetTimeout");

// }, 5000);

// fetch("https://www.facebook.com").then(function cbF(){
//     console.log("CB Netflix")
// });

// console.log("End")