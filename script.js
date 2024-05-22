const plus=document.querySelector(".plus-btn");
const minus=document.querySelector(".minus-btn");
const mult=document.querySelector(".mult-btn");
const divide=document.querySelector(".divide-btn");
const res=document.querySelector(".result-input")


plus.addEventListener("click",plusNum);
minus.addEventListener("click",minusNum);
mult.addEventListener("click",multNum);
divide.addEventListener("click",divideNum);

function check(){
    if (document.querySelector(".num1").value =="" || document.querySelector(".num2").value=="" ) {
        alert("Please enter a number")
    }
    else{
        return true
    }
}
function plusNum() {
    if (check()) {
        res.value=Number(document.querySelector(".num1").value)+Number(document.querySelector(".num2").value)
        document.querySelector(".num1").value=""
        document.querySelector(".num2").value=""
    }
}

function minusNum() {
    if (check()) {
        res.value=Number(document.querySelector(".num1").value)-Number(document.querySelector(".num2").value)
        document.querySelector(".num1").value=""
        document.querySelector(".num2").value=""
    }
   
}
function multNum() {
    if (check()) {
        res.value=Number(document.querySelector(".num1").value)*Number(document.querySelector(".num2").value)
        document.querySelector(".num1").value=""
        document.querySelector(".num2").value=""
    }
   
}
function divideNum() {
    if (check()) {
        if (document.querySelector(".num2").value==0) {
            alert("Cannot divide by zero")
        }
        else{
        res.value=Number(document.querySelector(".num1").value)/Number(document.querySelector(".num2").value)
        document.querySelector(".num1").value=""
        document.querySelector(".num2").value=""
        }
    }
    
}