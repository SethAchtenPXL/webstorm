// 1.1
// let getal1 = parseInt(prompt("Geef een eerste getal:"));
// let getal2 = parseInt(prompt("Geef een tweede getla: "));
// let vermenigvuldigen = function (getal1, getal2){
//     return getal1 * getal2;
// }
// document.getElementById("tekst").innerText = getal1 + " x " + getal2 + " = " +  vermenigvuldigen(getal1, getal2);


// 1.2
// let getal1 = parseInt(prompt("Geef een getal in:"));
//
// let verschil = function(getal1, getal2){
//     return getal1 - 100;
// }
// document.getElementById("tekst").innerText = getal1 + " - 100" + " = " +  verschil(getal1, 100);


// 1.3
// let getal1 = parseInt(prompt("Geef een eerste getal:"));
// let getal2 = parseInt(prompt("Geef een tweede getal: "));
//
// let isVijftig = function (getal1, getal2){
//     if (getal1 == 50 || getal2 == 50 || (getal1+getal2) == 50){
//         uitkomst = "hoera";
//     }
//     return uitkomst;
// }
// document.getElementById("tekst").innerText = isVijftig(getal1, getal2);


// 1.4
// let zin = prompt("Geef een random zin in:");
// let startMetHallo = function(zin){
//     if (zin.slice(0,5) === "Hallo"){
//         return zin;
//     }else{
//         return "Hallo " + zin.toLowerCase();
//     }
// }
// document.getElementById("tekst").innerText = startMetHallo(zin);


// 1.5
// let zin = prompt("Geef een zin in:");
// let getal = parseInt(prompt('Geef een getal kleiner dan ' + zin.length));
// let zinSplitsen = function(zin, getal){
//     if (getal < zin.length){
//         var eersteStuk = zin.slice(0, getal);
//         var tweedeStuk = zin.slice(getal);
//         return eersteStuk + "\n" + tweedeStuk;
//     }else{
//         return "Sorry, je koos een te hoog getal";
//     }
// }
// alert(zinSplitsen(zin, getal));


// 1.6
// let zin = prompt("Geef een zin in:");
// let getal = parseInt(prompt('Geef een getal kleiner dan ' + zin.length));
// let zinSplitsen = function(zin, getal){
//     if (getal < zin.length){
//         var eersteStuk = zin.slice(0, getal);
//         var tweedeStuk = zin.slice(getal +1);
//         return eersteStuk + "\n" + tweedeStuk;
//     }else{
//         return "Sorry, je koos een te hoog getal";
//     }
// }
// alert(zinSplitsen(zin, getal));


// 1.7
// let zin = "Deze oefeningen zijn heel leuk";
// let alleWoordenMetHoofdletter = function(zin){
//
//     let opgesplitst = zin.split(" ");
//     for (let i = 0; i < opgesplitst.length; i++) {
//         opgesplitst[i] = opgesplitst[i][0].toUpperCase() + opgesplitst[i].substring(1);
//     }
//     return opgesplitst.join(" ");
// }
// console.log(alleWoordenMetHoofdletter(zin));
// document.getElementById("tekst").innerText = alleWoordenMetHoofdletter(zin);


// 1.8
// let zin = prompt("Geef een zin in:");
// let telDeKlinkers = function(zin){
//     let aantal = 0;
//     for (let i = 0; i < zin.length; i++) {
//         if (zin.charAt(i) === "e" || zin.charAt(i) === "i" || zin.charAt(i) === "o" || zin.charAt(i) === "u" || zin.charAt(i) === "a"){
//             aantal++;
//         }
//     }
//     return aantal
// }
// alert("Het aantal klinkers in de zin is: " + telDeKlinkers(zin));


// 1.9
// function grootsteGetal() {
//     let userInput;
//     let largestNumber = 0;
//
//     while (userInput !== "stop") {
//         userInput = prompt("Enter a number or type 'stop' to end:");
//
//             let number = parseFloat(userInput);
//
//                 if (number > largestNumber) {
//                     largestNumber = number;
//                 }
//
//     }
//
//     console.log("The largest number entered is: " + largestNumber);
// }
//
// // Call the function to start the loop
// grootsteGetal();

