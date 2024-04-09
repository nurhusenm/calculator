const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}

function calculate(){
try{
    display.value = eval(display.value);

}catch{
    display.value = "invalid";
}
}

function clearOne(){
    display.value = display.value.slice( 0,-1);
}

document.body.addEventListener("keydown", (event) =>{
    if(event.key === "1"){
        appendToDisplay("1")
    }else if(event.key === "2"){
        appendToDisplay("2")
    }else if(event.key === "3"){
        appendToDisplay("3")
    }else if(event.key === "4"){
        appendToDisplay("4")
    }else if(event.key === "5"){
        appendToDisplay("5")
    }else if(event.key === "6"){
        appendToDisplay("6")
    }else if(event.key === "7"){
        appendToDisplay("7")
    }else if(event.key === "8"){
        appendToDisplay("8")
    }else if(event.key === "9"){
        appendToDisplay("9")
    }else if(event.key === "+"){
        appendToDisplay("+")
    }else if(event.key === "-"){
        appendToDisplay("-")
    }else if(event.key === "*"){
        appendToDisplay("*")
    }else if(event.key === "/"){
        appendToDisplay("/")
    }else if(event.key === "c"){
        clearDisplay("c")
    }else if(event.key === "="){
        calculate("=")
    }else if(event.key === "."){
        appendToDisplay(".")
    }else if(event.key === "0"){
        appendToDisplay("0")
    }else if(event.key === "("){
        appendToDisplay("(")
    }else if(event.key === ")"){
        appendToDisplay(")")
    }else if(event.key === "d"){
        clearOne("")
    }
})