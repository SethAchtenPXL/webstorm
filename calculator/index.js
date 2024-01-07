let display = document.getElementById('display');
let input;
function handleButtonClick(value) {
    // You can perform additional logic here based on the button value
    // For simplicity, let's update the display with the clicked button value
    if(display.innerText === "0"){
        display.innerText = value;
    }else{
        display.innerText += value;
    }


}
let optellen = 0;
let verschil = 0;
let vermenigvuldigen = 0;
let delen = 0;
let answer = 0;

document.getElementById('button-0').addEventListener('click', function() {
    handleButtonClick('0');
});

document.getElementById('button-1').addEventListener('click', function() {
    handleButtonClick('1');
});

document.getElementById('button-2').addEventListener('click', function() {
    handleButtonClick('2');
});

document.getElementById('button-3').addEventListener('click', function() {
    handleButtonClick('3');
});

document.getElementById('button-4').addEventListener('click', function() {
    handleButtonClick('4');
});

document.getElementById('button-5').addEventListener('click', function() {
    handleButtonClick('5');
});

document.getElementById('button-6').addEventListener('click', function() {
    handleButtonClick('6');
});

document.getElementById('button-7').addEventListener('click', function() {
    handleButtonClick('7');
});

document.getElementById('button-8').addEventListener('click', function() {
    handleButtonClick('8');
});

document.getElementById('button-9').addEventListener('click', function() {
    handleButtonClick('9');
});









let firstAmount;


document.getElementById('button-+').addEventListener('click', function() {
    firstAmount = parseFloat(display.innerText);
    display.innerText = "0";
    optellen += 1;

});
document.getElementById('button-=').addEventListener('click', function() {

    // answer = firstAmount + parseFloat(display.innerText);
    // display.innerText = answer;

    if(optellen === 1){
            answer = firstAmount + parseFloat(display.innerText);
            display.innerText = answer;
        }else if(verschil === 1){
            answer = firstAmount - parseFloat(display.innerText);
            display.innerText = answer;
        }else if(delen === 1){
            answer = firstAmount / parseFloat(display.innerText);
            display.innerText = answer;
        }else{
            answer = firstAmount * parseFloat(display.innerText);
        display.innerText = answer;
    }


});

document.getElementById('button-C').addEventListener('click', function() {
    firstAmount = 0;
    display.innerText = "0";
    optellen = 0;
    verschil = 0;
    vermenigvuldigen = 0;
    delen = 0;
    answer = 0;
});

document.getElementById('button--').addEventListener('click', function() {
    firstAmount = parseFloat(display.innerText);
    display.innerText = "0";
    verschil += 1;
});

document.getElementById('button-*').addEventListener('click', function() {
    firstAmount = parseFloat(display.innerText);
    display.innerText = "0";
    vermenigvuldigen += 1;
});

document.getElementById('button-/').addEventListener('click', function() {
    firstAmount = parseFloat(display.innerText);
    display.innerText = "0";
    delen += 1;
});