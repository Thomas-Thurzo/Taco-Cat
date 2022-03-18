
// Start Funktion
function startFunktion(){

    // Einlesen des Wortes
    let eingabeText = document.getElementById("eingabeText").value;

    let ergebnis = logikFunktion(eingabeText);
    displayFunktion(ergebnis);

}

// Logik Funktion, Check ob die Eingabe ein Palindrom ist
function logikFunktion(eingabeText){

    let ergebnis = "Es handelt sich bei diesem Wort um kein Palindrom!";
    let wortReverse = "";

    for (let index = eingabeText.length - 1; index >= 0; index--) {
        wortReverse = wortReverse + eingabeText[index];      
    }

    eingabeText = eingabeText.toUpperCase();
    wortReverse = wortReverse.toUpperCase();

    if(eingabeText == wortReverse && eingabeText != ""){
        ergebnis = "Das Wort ist ein Palindrom!"
    }

    return ergebnis;

}

// Display Funktion
function displayFunktion(ergebnis){

    document.getElementById("ausgabe").innerHTML = ergebnis;

    document.getElementById("alert").classList.remove("invisible");
}

// Clear Funktion, zum löschen der Konsole
function clearFunktion(){

    document.getElementById("eingabeText").value = "";

    document.getElementById("alert").classList.add("invisible");
}