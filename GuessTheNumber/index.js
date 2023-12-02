let a;


function startGame(){

    a = Math.floor(Math.random() * 9) + 1;
    // document.getElementById("test").innerHTML = a;
    counter = 0;
    document.getElementById("replay").setAttribute("disabled");

}

function opnieuw(){
    document.getElementById("extratest").innerHTML = "Let's try again!";
    a = Math.floor(Math.random() * 9) + 1;
    // document.getElementById("test").innerHTML = a;
    counter = 0;
    document.getElementById("replay").disabled = true;

}

function testFunction(){

    document.getElementById("extratest").innerHTML = "";
    let answer = document.getElementById("antwoord").value;



    if (answer != a && counter == 0){
        document.getElementById("extratest").innerHTML = "Wrong! You got 2 more lives.";
    } else if (answer != a && counter == 1){
        document.getElementById("extratest").innerHTML = "Wrong! You got 1 more live.";
    }else if (answer != a && counter == 2){
        document.getElementById("extratest").innerHTML = "Wrong! The number was: " + a;
        document.getElementById("replay").removeAttribute("disabled");
    }else if (answer = a && counter < 3){
        document.getElementById("extratest").innerHTML = "Juist!";
        document.getElementById("replay").removeAttribute("disabled");

    }else{
        document.getElementById("extratest").innerHTML = "Foutmelding";

    }

    document.getElementById("antwoord").value = "";
    counter++;

}

