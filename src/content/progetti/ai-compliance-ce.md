---
titolo: AI per la compliance CE dei costruttori di macchine
descrizione: Un assistente che confronta il fascicolo tecnico di un costruttore di macchine con il nuovo Regolamento macchine e prepara bozze che un professionista può validare. Prima capire se serve davvero, poi costruirlo.
stato: in corso
tecnologie: [Product discovery, Interviste, Prototipo con Claude, Unit economics]
ordine: 2
---
Voglio capire se un assistente basato su AI può aiutare gli studi tecnici ad affrontare il passaggio al nuovo Regolamento macchine, e a quali condizioni avrebbe senso farne un servizio. È un progetto personale in cui applico il metodo della product discovery a un problema che conosco da vicino.

## Il problema

Il Regolamento macchine (UE) 2023/1230 si applica dal **20 gennaio 2027** e sostituisce la direttiva 2006/42/CE. Per chi produce macchine significa rivedere i fascicoli tecnici entro una scadenza vicina. Ho lavorato per anni sulla documentazione tecnica per la marcatura CE di macchinari, quindi so quanto lavoro richiede.

## Cosa voglio costruire

Un assistente che legge il fascicolo tecnico esistente di un piccolo costruttore, segnala cosa manca rispetto al nuovo regolamento e prepara le bozze delle parti da aggiornare. A offrire il servizio sarebbero gli **studi tecnici**: lo strumento li aiuta a seguire più fascicoli nello stesso tempo, mentre la bozza resta validata e firmata da un professionista, come oggi.

## Cosa voglio verificare

Prima di costruire qualcosa voglio sapere se il problema è reale e se la soluzione regge. Parto da quattro domande:

- La scadenza porterà più richieste di quante gli studi riescano a gestire?
- Quanta parte del lavoro è ripetitiva (confronto tra direttiva e regolamento, riscrittura di sezioni) e quanta richiede davvero giudizio tecnico?
- Un tecnico si fida di una bozza generata dall'AI? Credo di sì solo se ogni voce rimanda al requisito da cui nasce.
- I costruttori pagherebbero lo stesso prezzo per un servizio più rapido, o chiederebbero uno sconto?

Se le risposte non confermano quello che mi aspetto, cambio il prototipo oppure mi fermo.

## Come procedo

Comincio parlando con studi tecnici e costruttori. Poi preparo un prototipo con Claude su un fascicolo di esempio e lo faccio provare a due o tre professionisti. Misuro il tempo necessario per fascicolo, la percentuale di voci che il tecnico corregge e il costo stimato per fascicolo. Alla fine scrivo un breve case study con la decisione: andare avanti o fermarmi.

## Cosa mi interessa capire

- Quanto errore si può accettare quando un errore ha un costo?
- In quali casi l'AI non deve rispondere?
- Chi paga questo servizio, e quanto?

## Riservatezza

È un progetto personale: lavora solo su un fascicolo di esempio anonimo, senza usare documenti di clienti.
