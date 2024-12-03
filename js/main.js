// Creo un array di items
const nav = [
  "Home",
  "i punti di forza",
  "Recensioni",
  "Paperelle",
  "FAQs",
  "Newsletter",
];

// Seleziono tutti gli elementi <ul> nel documento
const navLists = document.querySelectorAll("ul");

// Creo un array di elementi <li> in formato stringa
const navItems = nav.map((item) => {
  return `<li>${item}</li>`; // Restituisco una stringa HTML per ogni elemento dell'array
});

// Popolo ogni <ul> con gli elementi di navigazione generati
navLists.forEach((ul) => {
  ul.innerHTML = navItems.join(""); // Unisco gli elementi <li> in una singola stringa e la assegno all'innerHTML di ciascun <ul>
});

// Stampo nella console l'elenco di <ul> selezionati per verificare il risultato
console.log(navLists);

// array oggetti (i punti di vista)
const viewPoints_sx = [
  {
    title: "Lunga Durata della Batteria",
    text: 'Goditi ore di assistenza cintinua nella risoluzione dei bug grazie alla lunga durata della "batteria" (ovvero, la tua pazienza) della paperella di gomma.',
  },
  {
    title: "Compatibilità Universale",
    text: "Funziona con tutti i linguaggi di programmazione e sistemi operativi, la paperella di gomma è l'unico strumento di debugging che non necessita di aggiornamenti.",
  },
  {
    title: "Design Elegante",
    text: "Mostra con orgoglio il design elegante e raffinato della tua paperella di gomma, disponibile in vari colori per abbinarsi al tuo stile di programmatore.",
  },

];

const viewPoints_dx = [
    {
        title: "Resistenza agli Spruzzi",
        text: "Perfetta per resistere ai piccoli incidenti con caffè e bevande, la tua paperella di gomma non teme schizzi, mantenendoti sempre pronto per il debugging.",
    },
    {
        title: "Portabilità",
        text: "Leggera e facile da trasportare, la paperella di gomma può essere il tuo compagno di lavoro ovunque tu vada. Portala con te per un supporto costante.",
      },
      {
        title: "Promemoria Anti-Stress",
        text: "Quando lo stress del codice diventa troppo, spremi la tua paperella di gomma per un rapido sollievo anti-stress, senza bisogno di software complicati.",
    },
];


// Funzione per stampare i punti di vista
function printViewPoints(viewPoints, container) {
    viewPoints.forEach(point => {
      const pointElement = document.createElement('div');
      pointElement.classList.add('point');
  
      const titleElement = document.createElement('h3');
      titleElement.textContent = point.title;
  
      const textElement = document.createElement('p');
      textElement.textContent = point.text;
  
      pointElement.appendChild(titleElement);
      pointElement.appendChild(textElement);
      container.appendChild(pointElement);
    });
  }

  // Seleziona i contenitori per i punti di vista
const leftContainer = document.querySelector('.col-sx .text-punti-di-vista');
const rightContainer = document.querySelector('.col-dx .text-punti-di-vista');

  // Stampa i punti di vista
printViewPoints(viewPoints_sx, leftContainer);
printViewPoints(viewPoints_dx, rightContainer);
