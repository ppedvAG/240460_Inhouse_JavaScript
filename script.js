// <script src="script.js"></script>
// JavaScript Code

// Einzeiliger Kommentar

/*
Hallo Ich bin ein 
Mehrzeilliger Kommentar
*/

// Variablen deklarieren
var Zahl1 = 10;
let Text = "Hallo";
const Zahlen = 40;

// Passenden Namen zu passendem Wert
var ZahlZwei = "Hallo";

// Konsole
console.log("Zahl 1 : " + Zahl1);

// Auf der Seite
document.write("Zahl 1 : " + Zahl1);

// Bonus Aufgabe:
// typeof() verwenden um den Datentyp herauszufinden von einer Variable
// Ausgabe in Konsole und auf der Seite
console.log(typeof (Zahl1));
document.write("<br>" + typeof (Zahl1) + "<br>");

document.write(`Hallo ${Zahl1} ${Zahlen}`);

document.write("<br>" + "Hallo \"Test\"");

// Funktioniert nicht!!
document.writeln(2 == "2");

// Funktionen
function greeter() {
    console.log("Hallo Welt!");
}

// Aufruf der Funktion
greeter();

// Funktionen können auch andere Funktionen als Parameter übergeben
function greetPerson(name) {
    return "Hallo " + name;
}

console.log(greetPerson("Max Mustermann"));

// Schreibe mir eine 4 Funktionen
// Additon, Subtraktion, Multiplikation, Divison
// die jeweils 2 Zahlen als Parameter bekommen und dieses Ergebnis dann zurückgeben auf der Konsole

function validateForm() {
    let x = document.forms["myForm"]["vname"].value;
    if (x == "") {
        alert("Vorname muss befüllt sein!");
        return false;
    }
}

// Kontrollstrukturen
let numberOne = 10;
let numberTwo = 20;
if (numberOne < numberTwo) {
    console.log("NumberOne ist kleiner als NumberTwo");
}
else if (numberOne > numberTwo) {
    console.log("NumberOne ist größer als NumberTwo");
}
else {
    console.log("NumberOne und NumberTwo sind gleich groß");
}

// var fahrzeug = "Boot";
/*
    Wenn das Fahrzeug = "Flugzeug" => Konsolenausgabe: "Flieg!"
    Wenn das Fahrzeug = "Boot" => Konsolenausgabe: "Schwimm!"
    Wenn das Fahrzeug = "Auto" => Konsolenausgabe: "Fahr!"
    Ansonsten => Konsolenausgabe: "Geh zu Fuß!" 

    Bonus: Das ganze ins Switch-Case anwenden!
*/

// Ternary Operator
var zahl = 5;
(zahl == 5) ? console.log("Die Zahl ist 5") : console.log("Die Zahl ist keine 5");

// Schleifen
// For-Schleife
for (var i = 0; i <= 10; i++) {
    console.log("Zahl : " + i);
}

// While-Schleife
let zaehler = 10;
while (zaehler <= 20) {
    console.log("Zahl : " + zaehler);
    zaehler++;
}

// Do-While Schleife
let tuWas = 20;
do {
    console.log("Zahl : " + tuWas);
    tuWas++;
} while (tuWas <= 30);

/*
    Hotkeys:
    Kommentieren: STRG + K STRG + C ODER STRG + #
    Unkommentieren: STRG + K STRG + U ODER STRG + #
*/

/* 
    Erstelle 3x Schleifen
    1. Schleife 0 - 15 soll das i immer dem Ergebnis addiert werden
    2. Schleife 15 - 30 soll das i immer dem Ergebnis subrahiert werden
    3. Schleife 30 - 45 soll das i immer dem Ergebnis * genonmmen werden

    Tipps:
    Wir brauchen 3x For-Schleifen
    Operatoren: +, -, *
*/

// Array

// Array - Erzeugen (1)
var bundesliga = new Array() // leeres Feld

// Arraay befuellen (1)
bundesliga[0] = 100;
bundesliga[1] = "Dortmund";
bundesliga[2] = 800;

// Array Ausgeben (1)
console.log(bundesliga[0] + bundesliga[1] + bundesliga[2]);
document.write(bundesliga[0] + bundesliga[1] + bundesliga[2])

// Array - Erzeugen (2)
const stadt = new Array(3) // Array mit 3 Elementen

// Array - befuellen (2)
stadt[0] = "München";
stadt[1] = "Berlin";
stadt[2] = "Hamburg";

// Array ausgeben (2)
console.log(stadt[0] + stadt[1] + stadt[2]);

// Array - Erzeugen (3)
var Laender = ["Deutschland", "Polen", "Italien"];

// Array - Ausgeben (3)
console.log(Laender[0] + Laender[1] + Laender[2]);

// Assoziativen Arrays
var Stadt = new Array();

// Felder befuellen
Stadt["Wohnort"] = "Burghausen";
Stadt["Name"] = "Philipp";

// Ausgaben (4)
var wohnort = "Wohnort";

console.log(Stadt[wohnort]);
console.log(Stadt["Name"]);

// Array Methods
// length
const fruechte = ["Apfel", "Mango", "Banane"];
let size = fruechte.length;
console.log(size);

// toString()
let string = fruechte.toString();
console.log(string);

// join()
let join = fruechte.join(" * ");
console.log(join);

// push() 
let push = fruechte.push("Kiwi");
console.log(push);

// shift()
let shift = fruechte.shift();
console.log(shift);

// unshift()
let unshift = fruechte.unshift();
console.log(unshift);

// concat()
const Maedels = ["Lena", "Laura"];
const Jungs = ["Peter", "Max"];

const Gruppe = Jungs.concat(Maedels);
console.log(Gruppe);

// 2D- Arrays
let items = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(items[0][0]); // 1
console.log(items[0][1]); // 2
console.log(items[1][0]); // 3
console.log(items[1][1]); // 4
console.log(items);

// 3D-Arrays
let array3D = [
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    [[10, 11, 12], [13, 14, 15], [16, 17, 18]],
    [[19, 20, 21], [22, 23, 24], [25, 26, 27]]
];

console.log(array3D[0][0][0]);

// reverse()
const reversedArray = fruechte.reverse();
console.log(reversedArray);

// Objekten

// Konstruktor
function Auto(Marke, Modell) {
    this.Marke = Marke;
    this.Modell = Modell;
}

var BMW = new Auto("BMW", "M4");

console.log(BMW.Marke);
console.log(BMW.Modell);

// Anonyme Objekte
var ObjVar = {
    "Wohnort" : "Burghausen",
    "Staatsangehoerigkeit" : "Deutsch",
}

// Ausgeben
console.log(ObjVar.Wohnort);
console.log(ObjVar.Staatsangehoerigkeit);

// Typeof
console.log(typeof(BMW));

// Konstruktor
function Person(Vorname, Name) {
    this.Vorname = Vorname;
    this.Name = Name;
}

var Jogi = new Person("Joachim", "Löw");

// With-Anweisung
with(Jogi) {
    console.log(Vorname);
    console.log(Name);
}

function AutoFahrer(Marke, Modell, Fahrer) {
    this.Marke = Marke;
    this.Modell = Modell;
    this.Fahrer = Fahrer;
}

var Golf = new AutoFahrer("VW", "Golf VII", Jogi);

console.log(Golf.Marke);
console.log(Golf.Modell);
console.log(Golf.Fahrer);

// Konstruktor
function Trainer(name) {
    this.name = name;
}

var Kd = new Trainer("Klopp");

// Dynamisches Hinzufuegen von Eigenschaften
Kd.Vorname = "Jürgen";
console.log(Kd.name + Kd.Vorname);

delete Kd.name;
console.log(Kd.name);

// if(Kd.Vorname) {
//     alert("Die Eigenschaft existiert");
// }
// else {
//     alert("Die Eigenschaft existiert nicht");
// }

// Navigator

// appCodeName => Gibt Hersteller Namen des Browsers zurueck
console.log(navigator.appCodeName);

// appName => Gibt den offiziellen Namen des Browsers zurueck
console.log(navigator.appName);

// appVersion => Gibt die Version des Browsers, Plattform zurueck
console.log(navigator.appVersion);

// userAgent => Gibt vollstaendigen Browserbezeichnung zurueck
console.log(navigator.userAgent);

// plattform => Gibt Betriebssystem zurueck
console.log(navigator.platform);

// language => Gibt Sprache des Client computers zuerueck
console.log(navigator.language);

// plugins => Gibt Feld mit allen Installierten Plugins zurueck
console.log(navigator.plugins);

// javaEnabled() => aktiviert oder nicht?
console.log(navigator.javaEnabled());

// Screen-Objekt
console.log("Bildschirm Hoehe: " + screen.height + "px");
console.log("Bildschirm Breite: " + screen.width + "px");

console.log("Wirkliche Hoehe: " + screen.availHeight + "px");
console.log("Wirkliche Breite: " + screen.availWidth + "px");

console.log("Fabrtiefe : " + screen.colorDepth + "px");


// Window-Objekt
//alert("Meldefenster");

// var myWindow = window.open("https:www.google.com", "myWindow", "width=200", "height=100");
// myWindow.close();

// confirm() => Bestaetigungsfenster 
// var confirmTest = window.confirm("Bestätige");

// prompt() => Eingabefenster fuer ein Text
// var promptText = window.prompt("Geb deinen Namen ein!");


// Location-Objekt

// protocol => Gibt verwendetes Internet-Protokoll wieder
console.log(location.protocol);

// hostname => Liest Host- und Domainnamen aus
console.log(location.hostname);

// port => Gibt den verwendeten Port des Servers zurueck
console.log(location.port);

// pathname => Gibt Pfadangabe des Dokumentes an
console.log(location.pathname);

// search => Gibt Querystring zuerueck
console.log(location.search);

// hash => Gibt URL Anker zurueck
console.log(location.hash);

// href => gibt die vollstaendige URL zurueck

// host => gibt Hostnamen:Port zurueck

function closePage() {
    alert("Die Seite wird geschlossen!");
    window.close();
}

if(onclose) {
    alert("Die Seite wird geschlossen!");
}