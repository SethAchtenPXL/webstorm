// 1.1
// let geboortejaar = parseInt(prompt("Geef je geboortejaar in"));
// const d = new Date();
// const jaartal = d.getFullYear();
// let leeftijd = jaartal - geboortejaar;
// if (leeftijd > 20){
//     alert("Je bent oud genoeg om de inhoud van deze pagina te bekijken");
// }
// console.log(leeftijd);
// // geen zin in de uitbreiding


// 1.2
// let vraag = prompt("Sport je graag? (Ja/Nee)");
// if (vraag == "Ja" || vraag == "ja"){
//     result = "Just do it!";
// }else {
//     result = "Jammer, blijf dan maar liggen!";
// }
//
// document.getElementById("sporten").innerHTML = result;


// 1.3
// let d = new Date();
// let uren = d.getHours();
// let minuten = d.getMinutes();
//
// if (uren < 12){
//     result = "voormiddag";
// }else{
//     result = "namiddag";
// }
// document.getElementById("tijd").innerHTML = "Goede " + result + "! Het is op het moment: " + uren + " : " + minuten;


// 1.4
// let d = new Date();
// let uren = d.getHours();
// let minuten = d.getMinutes();
//
// if (uren > 7 && uren < 12){
//     result = "Goedemorgen!";
// }else if (uren > 12 && uren < 18){
//     result = "Goede dag!";
// }else{
//     result = "Goede avond!";
// }
// document.getElementById("tijd").innerHTML =  result + " Het is op het moment: " + uren + " : " + minuten;


// 1.5
// let getal = parseInt(prompt("Geef een random getal in: "));
// if (getal < 50){
//     document.getElementById("tekst").innerText = "Te laag";
// }else if(getal == 50){
//     document.getElementById("tekst").innerText = "Proficiat, goed gegokt!";
// }else{
//     document.getElementById("tekst").innerText = "Te hoog";
// }


// 1.6
// let vraag = prompt("Sport je graag? (Ja/Nee)");
// switch (vraag){
//     case "Ja":
//         result = "Just do it!";
//         break;
//     case "Nee":
//         result = "Jammer, blijf dan maar liggen";
//         break;
//     default:
//         result = "Dat was niet duidelijk, antwoord je vanuit je luie zetel?";
//         break;
// }
// document.getElementById("sporten").innerHTML = result;


// 1.7
// let d = new Date();
// let maand = d.getMonth();
// switch (maand){
//     case 1:
//         result = "Januari";
//         break;
//     case 2:
//         result = "Februari";
//         break;
//     case 3:
//         result = "Maart";
//         break;
//     case 4:
//         result = "April";
//         break;
//     case 5:
//         result = "Mei";
//         break;
//     case 6:
//         result = "Juni";
//         break;
//     case 7:
//         result = "Juli";
//         break;
//     case 8:
//         result = "Augustus";
//         break;
//     case 9:
//         result = "September";
//         break;
//     case 10:
//         result = "Oktober";
//         break;
//     case 11:
//         result = "November";
//         break;
//     case 12:
//         result = "December";
//         break;
// }
// document.getElementById("tekst").innerText = "We zijn nu in de maand " + result;


// 1.8
// ??? waarom zou ge een switch & een if-else gebruiken? domme oefening, dubbel werk, overbodig


// 1.9
// getal = parseInt(prompt("Geef een getal tussen 1 & 10 in: "));
// if (getal > 0 && getal < 11){
//     for (let i = 0; i < 11; i++) {
//         document.getElementById("tekst").innerText += i + " * " + getal + " = " + (getal*i) + "\n";
//     }
// }else{
//     console.log("Niet mogelijk!");
// }


// 1.10
// var aantalLijnen = 7;
// let tekst = "" ;
//
// for (let i = 1; i <= aantalLijnen; i++) {
//
//         let symbol = "#";
//         tekst += symbol;
//         console.log(tekst);
// }


// 1.11
// let aantalLijnen = parseInt(prompt("Geef een getal 1 - 10: "));
// let tekst = "";
// if (aantalLijnen > 0 && aantalLijnen < 11){
//         for (let i = 0; i < aantalLijnen ; i++) {
//                 let symbol = "#";
//                 tekst += symbol;
//                 console.log(tekst);
//         }
// }else{
//         console.log("niet mogelijk");
// }


// 1.12 & 1.13
// fuck dees, fuck figuren, nooit goed in geweest
