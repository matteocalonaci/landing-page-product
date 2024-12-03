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