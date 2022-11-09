// Variables
var counter = 0

// Function with Parameter
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    if(btn.innerText === "Red"){
        btn.innerText = "Blue";
    }else{
        btn.innerText= "Red";
    }
});
