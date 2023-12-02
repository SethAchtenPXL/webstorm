// 1.1
// let opleidingen = ["opleiding1", "opleiding2", "opleiding3","opleiding4","opleiding5"];
// let aantal = opleidingen.length;
// console.log("aantal: " + aantal);
// console.log(opleidingen);


// 1.2
// let opleidingen = ["opleiding1", "opleiding2", "opleiding3","opleiding4","opleiding5"];
// opleidingen.push("Bachelor Multimedia- en Communicatietechnologie");
// console.log(opleidingen);


// 1.3
// let opleidingen = ["opleiding1", "opleiding2", "opleiding3","opleiding4","opleiding5","Bachelor Multimedia- en Communicatietechnologie"];
// document.getElementById("tekst").innerText = opleidingen.join("\n");


// 1.4
// let hondenrassen = ["chihuaua","stafford","wolfshond","beagle","pitbull","dolmatier","yorkshire","shitzu","labrador","rottweiler"];
// let getal = parseInt(prompt("Geef een nummer tussen 1 & 10"));
// getal = getal - 1;
// if (getal > -1 && getal < 10){
//     document.getElementById("tekst").innerText = hondenrassen[getal];
// }else{
//     document.getElementById("tekst").innerText = "sorry, katten niet toegelaten";
// }


// 1.5
// let hondenrassen = ["chihuaua","stafford","wolfshond","beagle","pitbull","dolmatier","yorkshire","shitzu","labrador","rottweiler"];
// hondenrassen.unshift("labradoedel","akita inu","chowchow","duitse herder","windhond");
// console.log(hondenrassen);


// 1.6
// let hondenrassen = ["labradoedel","akita inu","chowchow","duitse herder","windhond","chihuaua","stafford","wolfshond","beagle","pitbull","dolmatier","yorkshire","shitzu","labrador","rottweiler"];
// hondenrassen.shift();
// hondenrassen.pop();
// console.log(hondenrassen);
// document.getElementById("tekst").innerText = hondenrassen;


// 1.7
// let hondenrassen = ["labradoedel","akita inu","chowchow","duitse herder","windhond","chihuaua","stafford","wolfshond","beagle","pitbull","dolmatier","yorkshire","shitzu","labrador","rottweiler"];
// hondenrassen.splice(1, 0, "daschund"); // we voegen op positie 1 een extra hond toe
// console.log(hondenrassen);
// hondenrassen.splice(5, 2); // op de 5e positie verwijderen we 2 items
// console.log(hondenrassen);


// 1.8
// let dagen = ["01","02","03","04","05","06","07"]; // ge zijt zot als ge denkt dat ik dat allemaal ga doen!
// let maanden = ["01","02","03","04"];
// for (let i = 0; i < maanden.length; i++) {
//
//     for (let j = 0; j < dagen.length; j++) {
//         document.getElementById("tekst").innerText += dagen[j] + "/" + maanden[i] + "/2023" + "\n";
//     }
//     document.getElementById("tekst").innerText += "\n";
// }


// // 1.9
// let dagen = ["01","02","03","04","05","06","07"]; // ge zijt zot als ge denkt dat ik dat allemaal ga doen!
// let maanden = ["01","02","03","04"];
// let namen = ["woensdag","donderdag","vrijdag","zaterdag","zondag","maandag","dinsdag"];
// for (let i = 0; i < maanden.length; i++) {
//
//     for (let j = 0; j < dagen.length; j++) {
//         document.getElementById("tekst").innerText += namen[j] + " : " + dagen[j] + "/" + maanden[i] + "/2023" + "\n";
//     }
//     document.getElementById("tekst").innerText += "\n";
// }