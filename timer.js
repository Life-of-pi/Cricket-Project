var counter = 10;
var x = setInterval(()=>{
    console.log(counter);
    counter--;
    if(counter < 1){
        clearInterval(x);
        console.log("Finished");
    }
},1000);