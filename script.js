$(document).ready(function() {

// Your code here....
var firstNumber = "";
var operator = "";
var secondNumber = "";
var isFinal = false;
var result = 0;
var hasBeenCalculated = false;

function clear() {
    firstNumber = "";
    operator = "";
    mathOperator = "";
    secondNumber = "";
    isFinal = false;
    result = 0;
    $("#first-number").empty();
    $("#second-number").empty();
    $("#operator").empty();
    $("#result").empty();
}

$(".number").on("click", function() {
    if (hasBeenCalculated) {
        clear();
        hasBeenCalculated = false;
    }

    if (!isFinal) {
        firstNumber += $(this).attr("value");
        $("#first-number").text(firstNumber);
    } else {
        secondNumber += $(this).attr("value");
        $("#second-number").text(secondNumber);
    }
});

$(".operator").on("click", function(){
    if (hasBeenCalculated) {
        clear();
        hasBeenCalculated = false;
    }
    
    if (firstNumber === ""){
        firstNumber = "0";
        $("#first-number").text(firstNumber);
    } 
    operator = $(this).attr("data-operator");
    $("#operator").text(operator);

    isFinal = true;
})

$(".equal").on("click", function () {
    if (firstNumber === "" || secondNumber === "") {
        alert ("Please input your desired calculation.");
    } else {
        if (operator === "^") {
            result = Math.pow(parseInt(firstNumber),parseInt(secondNumber));
        } else {
            result = eval(parseInt(firstNumber) + operator + parseInt(secondNumber));
        }
        $("#result").text(result);
        hasBeenCalculated = true;
    }
})

$(".clear").on("click", function() {
    clear();
});

});