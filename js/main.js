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
  viewPoints.forEach((point) => {
    const pointElement = document.createElement("div");
    pointElement.classList.add("point");

    const titleElement = document.createElement("h3");
    titleElement.textContent = point.title;

    const textElement = document.createElement("p");
    textElement.textContent = point.text;

    pointElement.appendChild(titleElement);
    pointElement.appendChild(textElement);
    container.appendChild(pointElement);
  });
}

// Seleziona i contenitori per i punti di vista
const leftContainer = document.querySelector(".col-sx .text-punti-di-vista");
const rightContainer = document.querySelector(".col-dx .text-punti-di-vista");

// Stampa i punti di vista
printViewPoints(viewPoints_sx, leftContainer);
printViewPoints(viewPoints_dx, rightContainer);

const dev_pov = [
  {
    text: `"La paperella di gomma è diventata il mio strumento di debugging preferito. Spiegare i problemi al mio 'assistente' silenzioso mi ha aiutato a risolvere bug che altrimenti mi avrebbero fatto impazzire. È anche un ottimo antistress nelle giornate difficili!"
            "Non avrei mai immaginato quanto una semplice paperella di gomma potesse fare la differenza. E incredibile come verbalizzare i problemi davanti alla paperella mi aiuti a vedere soluzioni che prima non notavo. Inoltre, è carinissima sulla mia scrivania!"`,
    star: `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
    name: "David William - Feb 22,2 023",
  },
  {
    text: `"Non avrei mai immaginato quanto una semplice paperella di gomma potesse fare la differenza. E incredibile come verbalizzare i problemi davanti alla paperella mi aiuti a vedere soluzioni che prima non notavo. Inoltre, è carinissima sulla mia scrivania!"`,
    star: `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
    name: "Emma Turner - April 5, 2023",
  },
  {
    text: `"La paperella di gomma è diventata il mio piccolo amico durante le riunioni. Ogni volta che la guardo, mi ricorda di mantenere la calma e affrontare le sfide con un sorriso. Non posso più farne a meno!"`,
    star: `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
    name: "Luca Rossi - April 10, 2023",
  },
  {
    text: `"Ho sempre pensato che le paperelle di gomma fossero solo dei giocattoli, ma questa ha cambiato la mia prospettiva. Parlarle dei miei pensieri mi aiuta a chiarire le idee e a trovare nuove soluzioni. È un'esperienza sorprendente!"`,
    star: `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
    name: "Sara Bianchi - April 15, 2023",
  },
  {
    text: `"La mia paperella di gomma è diventata una fonte di ispirazione. Ogni volta che la vedo, mi ricorda di essere creativo e di affrontare la vita con leggerezza. È incredibile come un semplice oggetto possa avere un impatto così grande!"`,
    star: `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
    name: "Marco Verdi - April 20, 2023",
},
{
    text: `"In un mondo frenetico, la mia paperella di gomma è il mio rifugio. Mi aiuta a ritrovare la calma nei momenti di stress. Ogni volta che la guardo, mi ricorda di prendere una pausa e respirare profondamente."`,
    star: `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
    name: "Giulia Neri - April 25, 2023",
}
];

// Seleziona i contenitori
const visibleSlider = document.getElementById('visible-slider');
const scrollableSlider = document.getElementById('scrollable-slider');

// Aggiungo tutte le card al scrollableSlider
dev_pov.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
        <div class="text">${item.text}</div>
        <div class="star text-warning pt-2 pb-2">${item.star}</div>
        <div class="name"><b>${item.name}</b></div>
    `;
    
    scrollableSlider.appendChild(card);
});

// Mostro le card nel visibleSlider
let currentIndex = 0;

// Seleziono i punti di navigazione
const navigationDots = document.querySelector('.navigation-dots');

function showCards(index) {
    const cards = scrollableSlider.querySelectorAll('.card');
    visibleSlider.innerHTML = ''; 

    // Mostra solo la prima card su mobile, e le prime due card su desktop
    const isMobile = window.innerWidth < 768; // Controlla se è mobile
    const numberOfCardsToShow = isMobile ? 1 : 2; // Mostra 1 card su mobile, 2 su desktop

    for (let i = 0; i < numberOfCardsToShow; i++) {
        const cardToShow = cards[index + i];
        if (cardToShow) {
            const cardClone = cardToShow.cloneNode(true); // Clona la card corrente
            visibleSlider.appendChild(cardClone); // Aggiungi la copia della card corrente
        }
    }

    // Aggiorna i punti di navigazione
    updateNavigationDots(index);
}

// Aggiorna i punti di navigazione
function updateNavigationDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.remove()); // Rimuovi i punti esistenti

    const isMobile = window.innerWidth < 768;
    const numberOfCardsToShow = isMobile ? 1 : 2; // 1 per mobile, 2 per desktop
    const totalCards = dev_pov.length;
    const totalDots = Math.ceil(totalCards / numberOfCardsToShow); // Calcola i punti in base al numero di card visualizzate

    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = i * numberOfCardsToShow; // Ogni dot corrisponde a un gruppo di card
            showCards(currentIndex);
        });
        if (i === Math.floor(index / numberOfCardsToShow)) {
            dot.classList.add('active'); // Aggiungi classe attiva al dot corrente
        }
        navigationDots.appendChild(dot);
    }
}

// Gestione della navigazione su mobile
document.addEventListener('keydown', (event) => {
    const cards = scrollableSlider.querySelectorAll('.card');
    if (event.key === 'ArrowRight') {
        currentIndex = Math.min(currentIndex + 1, cards.length - 1); // Non superare il numero totale di card
        showCards(currentIndex);
    } else if (event.key === 'ArrowLeft') {
        currentIndex = Math.max(currentIndex - 1, 0); // Non andare sotto zero
        showCards(currentIndex);
    }
});

// Inizializza la visualizzazione delle prime card
showCards(currentIndex);

// Mostra la sezione scrollabile
scrollableSlider.style.display = 'none';