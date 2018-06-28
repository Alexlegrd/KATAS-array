

const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"



//Note 1
var note1 = gotCitiesCSV.split(',');
var note1Element = document.createElement("p");
note1Element.textContent = JSON.stringify(note1);
document.body.appendChild(kata1Element);

//Note 2
var note2 = bestThing.split(" ");
var note2Element = document.createElement("p");
note2Element.textContent = JSON.stringify(note2);
document.body.appendChild(note2Element);

//Note 3
var note3 = note1.join(";");
var note3Element = document.createElement("p");
kata3Element.textContent = JSON.stringify(note3);
document.body.appendChild(note3Element);

//Note 4

var note4 = lotrCitiesArray.join(", ");
var note4Element = document.createElement("p");
kata4Element.textContent = JSON.stringify(note4);
document.body.appendChild(note4Element);

//Note 5
var note5 = [];
for (var i = 3; i < 8; i++) {
    var arrayItem = lotrCitiesArray[i];
    note5.push(arrayItem);
}
var note5Element = document.createElement("p");
note5Element.textContent = JSON.stringify(note5);
document.body.appendChild(note5Element);

//Note 6
var note6 = lotrCitiesArray;
note6.splice(2, 1);
var note6Element = document.createElement("p");
kata6Element.textContent = JSON.stringify(note6);
document.body.appendChild(note6Element);

//Note 7
var note7 = bestThing.slice(23, 38);
var note7Element = document.createElement("p");
note7Element.textContent = JSON.stringify(note7);
document.body.appendChild(note7Element);

//Note 8
var note8 = bestThing.indexOf("only");
var note8Element = document.createElement("p");
note8Element.textContent = JSON.stringify(note8);
document.body.appendChild(note8Element);

//Note 9
var note9array = gotCitiesCSV.split(',');
var note9 = [];
for (var i = 0; i < 7; i++) {
    var note9temp = note9array[i];
    console.log(kata9temp);
    if (note9temp.includes("aa") || note9temp.includes("ee") || note9temp.includes("ii") || note9temp.includes(
            "oo") || note9temp.includes("uu")) {
        note9.push(note9temp);
    }
}
var note9Element = document.createElement("p");
note9Element.textContent = JSON.stringify(note9);
document.body.appendChild(note9Element);

//Note 10
var note10 = lotrCitiesArray;
note10.sort(function(a,b){
    return a.length-b.length;
}
);
var note10Element = document.createElement("p");
kata10Element.textContent = JSON.stringify(note10);
document.body.appendChild(note10Element);