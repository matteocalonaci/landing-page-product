Come da indicazioni fornite, dobbiamo replicare il layout presente negli asset, adottando un approccio mobile-first.


**HEADER** 
Iniziamo con la creazione dell'header. Utilizzando Bootstrap, ho suddiviso l'header in due colonne:

Logo: posizionato a sinistra.
Menu di navigazione: posizionato a destra.

Grazie a Bootstrap, ho implementato un hamburger menu per la visualizzazione mobile, in modo che i link siano accessibili in questo formato. Nelle versioni tablet e desktop, invece, il menu è completamente visibile.

Inoltre, i link del menu non sono stati inseriti manualmente, ma vengono generati dinamicamente tramite un ciclo forEach nel file JavaScript.

**SECTION 1**
La prima sezione è anch'essa divisa in 2 colonne.

- colonna 1 -> immagine di una papera.
- colonna 2 -> testo di presentazione.

nella vista mobile le colonne sono una sotto l'altra mentre nelle altre viste sono affiancate.

**SECTION 2**
La seconda sezione è divisa in 3 colonne

- colonna 1 -> punti di vista 1.
- colonna 2 -> immagine di una papera.
- colonna 3 -> punti di vista 2.

nella vista mobile le colonne sono una sotto l'altra mentre nelle altre viste sono affiancate.

Inoltre, i punti di vista composti da titlo e testo non sono stati inseriti manualmente, ma vengono generati dinamicamente tramite la funzione printViewPoints() nel file JavaScript.

**SECTION 3**
Con l'aiuto dell'intelligenza artificiale  ho sviluppato questa sezione in modo da visualizzare diversamente le card a seconda del dispositivo:

Mobile: Viene visualizzata una card alla volta, con la possibilità di navigare tra di esse utilizzando punti di navigazione.

Tablet: Vengono visualizzate due card alla volta, con la possibilità di navigare tra di esse utilizzando punti di navigazione.

Desktop: Vengono visualizzate tre card alla volta, con un numero appropriato di punti di navigazione che corrispondono ai gruppi di card visualizzati.

**SECTION 4**
La quarta sezione è divisa in 3 colonne.
Tutte e tre le colonne hanno al loro interno una card composta da:
- Immagine
- Valutazione
- Nome Prodotto
- Prezzo

**SECTION 5**
La quinta sezione è divisa in 2 colonne.
- colonna 1 -> immagine.
- colonna 2 -> FAQs con Domande e Risposte: Ogni domanda è seguita da una risposta che può essere visualizzata o nascosta tramite un'interazione con un pulsante. Questo formato rende la sezione interattiva e facile da navigare.

Di seguito una sezione un'ulteriore sezione suddivisa in 3 colonne che fungono da promozione visiva delle qualità e dei servizi associati ai prodotti offerti.


**SECTION 6**
 La sesta sezione è realizzata con:
 - titlo sezione
 - campo per inserimento email per ricevere le newsletter (non funzionante)
 - icone per visitare i social (non funzionante)

**FOOTER**
composto da un testo per il copywright






