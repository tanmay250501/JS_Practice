// function b(){

//     for( var i =1 ; i<=5 ; i++){
//     function close(x){
//             setTimeout(function (){
//                 console.log(x);
//             } , x * 1000);
//         }

//         close(i);
//     }


//     console.log("Namaste Js");
// }

// b();

function outest(){
    let c = 100;
    function outter (b){
        
        function inner(){
            console.log(a,b, c);
        }
        let a = 10;
        return inner;
    }
    return outter;
}
var close = outest()("hello");

close()


