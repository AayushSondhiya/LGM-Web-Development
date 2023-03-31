function valuebutton(e){
    calculatorform.screen.value +=e.value;
}

function Clear(){
    calculatorform.screen.value=null;
}

function Calculate(){
    calculatorform.screen.value = eval(calculatorform.screen.value);
}

function Delete(){
    calculatorform.screen.value= calculatorform.screen.value.slice(0,-1)
}
