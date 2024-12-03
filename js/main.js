// Creo un array di items 
const nav = ['Home', 'i punti di forza', 'Recensioni', 'Paperelle', 'FAQs', 'Newsletter'];

// Seleziono tutti gli elementi <ul> nel documento
const navLists = document.querySelectorAll("ul");

// Creo un array di elementi <li> in formato stringa
const navItems = nav.map(item => {
    return `<li>${item}</li>`; // Restituisco una stringa HTML per ogni elemento dell'array
});

// Popolo ogni <ul> con gli elementi di navigazione generati
navLists.forEach(ul => {
    ul.innerHTML = navItems.join(''); // Unisco gli elementi <li> in una singola stringa e la assegno all'innerHTML di ciascun <ul>
});

// Stampo nella console l'elenco di <ul> selezionati per verificare il risultato
console.log(navLists);