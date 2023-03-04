/*
Consegna
L'utente clicca su un bottone
che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella,
la cella cliccata si colora di azzurro ed emetto
un messaggio in console con il numero della cella cliccata.
*/

// Creo variabile per utilizzare il button
const playBtnEl = document.getElementById("play-btn");

// Creo una variabile per bersagliare il container dove creeremo la griglia
const gridEl = document.getElementById("grid");


// Creo un evento al click del button
playBtnEl.addEventListener("click", function() {

    // al click il display della griglia passa da none a flex
    gridEl.style.display = "flex";
    
    // Creo un ciclo che genera le celle all'interno della griglia
    for (let i = 1; i <= 100; i++) {
        
        // Creo variabile per creare nuovo elemento in pagina
        let squareEl = document.createElement("div");
        // gli asseglo una classe
        squareEl.className = "square";
        // faccio comparire un numero crescente da 1 a 100 al suo interno usando i
        squareEl.innerHTML = i;
        // dico che l'elemento deve essere aggiunto all'interno della griglia
        gridEl.append(squareEl);


        // creo un evento al click della cella
        squareEl.addEventListener("click", function(){

            // al click della cella deve essere alternativamente aggiunta e tolta la classe active
            squareEl.classList.toggle("active");
            
            // Mostro in console il numero della cella cliccata
            console.log(`Hai cliccato la cella n. ${i}`);
        });

    };

});
