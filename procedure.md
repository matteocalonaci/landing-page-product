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




