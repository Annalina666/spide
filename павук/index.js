// Variables
var counter = 0

// Function with Parameter
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    if(btn.value === "Red"){
        btn.value = "Blue";
    }else{
        btn.value= "Red";
    }
})
