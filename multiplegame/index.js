document.getElementById("guess").addEventListener('click', function(){

    let gamename = document.createElement("p");
    gamename.textContent = "Guess a number between 0 & 5";
    document.getElementById("game").appendChild(gamename);
    let inputfield = document.createElement("INPUT");

    inputfield.setAttribute("type", "text");
    inputfield.setAttribute("id", "userInput");

    let guessbutton = document.createElement("button");
    let buttontext = document.createTextNode("Guess");
    guessbutton.appendChild(buttontext);

    document.getElementById("game").appendChild(inputfield);
    document.getElementById("game").appendChild(guessbutton);

    guessbutton.addEventListener('click', function (){
        let result = document.createElement("p");
        let a = Math.floor(Math.random() * 6);
        let userGuess = parseInt(inputfield.value);
        if(userGuess === a){
            result.textContent = `You got it right! the number was ${a}`;
        }else{
            result.textContent = `You got it wrong! the number was ${a}`;
        }
        document.getElementById("game").appendChild(result);

       let reset = document.createElement("button");
       let resettext = document.createTextNode("Reset");
       reset.appendChild(resettext);
       document.getElementById("game").appendChild(reset);


       reset.addEventListener('click', function(){
           inputfield.remove();
           guessbutton.remove();
           result.remove();
           reset.remove();
           gamename.remove();
       })



    });
});







document.getElementById("math").addEventListener('click', function(){

    let gamename = document.createElement("p");
    gamename.textContent = "Can you solve this equation?";
    document.getElementById("game").appendChild(gamename);

    let equation = document.createElement("p");
    let number1 = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * 50) + 50;
    equation.textContent = number1 + " x " + number2;
    document.getElementById("game").appendChild(equation);



    let answer = document.createElement("INPUT");

    answer.setAttribute("type", "text");
    answer.setAttribute("id", "userInput");

    let checkbutton = document.createElement("button");
    let checkbuttontext = document.createTextNode("Check Answer");
    checkbutton.appendChild(checkbuttontext);

    document.getElementById("game").appendChild(answer);
    document.getElementById("game").appendChild(checkbutton);

    let result = document.createElement("p");


    checkbutton.addEventListener('click', function(){
       if((number1 * number2) === parseInt(answer.value)){
           result.textContent = "Well done!";
       }else{
           result.textContent = `Wrong! The correct answer was ${number1 * number2}`;
       }
        document.getElementById("game").appendChild(result);


        let reset = document.createElement("button");
        let resettext = document.createTextNode("Reset");
        reset.appendChild(resettext);
        document.getElementById("game").appendChild(reset);


        reset.addEventListener('click', function(){
            equation.remove();
            gamename.remove();
            answer.remove();
            checkbutton.remove();
            result.remove();
            reset.remove();
        });

    });
});





document.getElementById("tf").addEventListener('click', function() {

    let gamename = document.createElement("p");
    gamename.textContent = "Is the following statement True or False?";
    document.getElementById("game").appendChild(gamename);

    let randomnumber = Math.floor(Math.random() * 6);


    vraag = document.createElement("p");
    let no;
    let yes;
    let result;

    yes = document.createElement("INPUT");
    yes.setAttribute("type", "radio");
    yes.setAttribute("id", "yes")
    document.getElementById("options").appendChild(yes);
    optionTrue = document.createElement("p");
    optionTrue.textContent = "True";
    document.getElementById("options").appendChild(optionTrue);

    no = document.createElement("INPUT");
    no.setAttribute("type", "radio");
    no.setAttribute("id", "no")
    document.getElementById("options").appendChild(no);
    optionFalse = document.createElement("p");
    optionFalse.textContent = "False";
    document.getElementById("options").appendChild(optionFalse);

    switch(randomnumber){
        case 0:

            vraag.textContent = "More people are killed each year by cows than by sharks.";
            document.getElementById("game").appendChild(vraag);




            yes.addEventListener('click', function() {
                if (yes.checked === true) {
                    result = document.createElement("p");
                    result.textContent = "You got it right!";
                    document.getElementById("result").appendChild(result);
                }
            });

            no.addEventListener('click', function() {
                if (no.checked === true) {
                    result = document.createElement("p");
                    result.textContent = "You got it wrong.";
                    document.getElementById("result").appendChild(result);
                }
            });
            break;
        case 1:
            vraag.textContent = "There are 14 bones in a human foot";
            document.getElementById("game").appendChild(vraag);


            yes.addEventListener('click', function() {
                if (yes.checked === true) {
                    result = document.createElement("p");
                    result.textContent = "You got it wrong.";
                    document.getElementById("result").appendChild(result);
                }
            });

            no.addEventListener('click', function() {
                if (no.checked === true) {
                    result = document.createElement("p");
                    result.textContent = "You got it right!";
                    document.getElementById("result").appendChild(result);
                }
            });
            break;


        case 2:
            vraag.textContent = "Matches were invented before lighters";
            document.getElementById("game").appendChild(vraag);


            yes.addEventListener('click', function() {
                if (yes.checked === true) {
                    result = document.createElement("p");
                    result.textContent = "You got it wrong.";
                    document.getElementById("result").appendChild(result);
                }
            });

            no.addEventListener('click', function() {
                if (no.checked === true) {
                    result = document.createElement("p");
                    result.textContent = "You got it right!";
                    document.getElementById("result").appendChild(result);
                }
            });
            break;


        case 3:
            vraag.textContent = "Hot and cold water sound the same when you pour them";
            document.getElementById("game").appendChild(vraag);


            yes.addEventListener('click', function() {
                if (yes.checked === true) {
                    result = document.createElement("p");
                    result.textContent = "You got it wrong.";
                    document.getElementById("result").appendChild(result);
                }
            });

            no.addEventListener('click', function() {
                if (no.checked === true) {
                    result = document.createElement("p");
                    result.textContent = "You got it right!";
                    document.getElementById("result").appendChild(result);
                }
            });
            break;


        case 4:
            vraag.textContent = "More people are killed each year by cows than by sharks";
            document.getElementById("game").appendChild(vraag);


            yes.addEventListener('click', function() {
                if (yes.checked === true) {
                    result = document.createElement("p");
                    result.textContent = "You got it right!";
                    document.getElementById("result").appendChild(result);
                }
            });

            no.addEventListener('click', function() {
                if (no.checked === true) {
                    result = document.createElement("p");
                    result.textContent = "You got it wrong.";
                    document.getElementById("result").appendChild(result);
                }
            });
            break;

        case 5:
            vraag.textContent = "Human facial hair grows faster than the hair on the rest of the body.";
            document.getElementById("game").appendChild(vraag);


            yes.addEventListener('click', function() {
                if (yes.checked === true) {
                    result = document.createElement("p");
                    result.textContent = "You got it right!";
                    document.getElementById("result").appendChild(result);
                }
            });

            no.addEventListener('click', function() {
                if (no.checked === true) {
                    result = document.createElement("p");
                    result.textContent = "You got it wrong.";
                    document.getElementById("result").appendChild(result);
                }
            });
            break;
    }


    let reset = document.createElement("button");
    let resettext = document.createTextNode("Reset");
    reset.appendChild(resettext);
    document.getElementById("again").appendChild(reset);


    reset.addEventListener('click', function(){
        reset.remove();
        yes.remove();
        no.remove();
        vraag.remove();
        optionTrue.remove();
        optionFalse.remove();
        gamename.remove();
        result.remove();

    });

});