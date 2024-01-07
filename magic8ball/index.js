document.getElementById("reveal").addEventListener('click', function(){
    a = Math.floor(Math.random() * 9) + 1;

    switch(a){
        case 1:
            document.getElementById("answer").innerText = "Without a doubt.";
            break;
        case 2:
            document.getElementById("answer").innerText = "Yes definitely!";
            break;
        case 3:
            document.getElementById("answer").innerText = "Ask again later.";
            break;
        case 4:
            document.getElementById("answer").innerText = "Better not tell you now.";
            break;
        case 5:
            document.getElementById("answer").innerText = "Can not predict now.";
            break;
        case 6:
            document.getElementById("answer").innerText = "My reply is no.";
            break;
        case 7:
            document.getElementById("answer").innerText = "My reply is yes.";
            break;
        case 8:
            document.getElementById("answer").innerText = "Very doubtful.";
            break;
        case 9:
            document.getElementById("answer").innerText = "Don't count on it.";
            break;
    }
    document.getElementById("question").value = " ";


});

