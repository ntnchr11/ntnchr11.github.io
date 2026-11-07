---
titolo: AI per la compliance CE dei costruttori di macchine
descrizione: Discovery e prototipo di un assistente che confronta il fascicolo tecnico con il nuovo Regolamento macchine e prepara bozze da validare. L'AI è lo strumento, non il protagonista.
stato: in corso
tecnologie: [Product discovery, Interviste, Prototipo con Claude, Unit economics]
ordine: 2
---
Un esperimento di prodotto, impostato come un percorso di discovery: prima le ipotesi, poi le interviste, poi un prototipo, infine una decisione esplicita di andare avanti o fermarsi.

## Il problema

Il Regolamento macchine (UE) 2023/1230 si applica dal **20 gennaio 2027** e sostituisce la direttiva 2006/42/CE. Per chi produce macchine significa rivedere i fascicoli tecnici entro una scadenza vicina. Ho lavorato per anni sulla documentazione tecnica per la marcatura CE di macchinari, quindi conosco il lavoro da vicino.

## L'idea di prodotto

Un assistente che legge il fascicolo tecnico esistente di un piccolo costruttore, segnala cosa manca rispetto al nuovo regolamento e prepara bozze da far validare a un professionista. Il servizio verrebbe erogato da **studi tecnici**: lo strumento aumenta la loro capacità, la bozza resta validata e firmata da una persona, come oggi.

## Le ipotesi (scritte prima di parlare con chiunque)

1. La scadenza crea un picco di richieste che gli studi non riescono a evadere con la capacità attuale.
2. Buona parte delle ore va in lavoro ripetitivo (confronto tra direttiva e regolamento, riscrittura di sezioni) e non in giudizio tecnico.
3. I tecnici si fidano di una bozza generata dall'AI solo se ogni voce rimanda al requisito da cui nasce.
4. I costruttori sono disposti a pagare lo stesso prezzo per un servizio più rapido, oppure chiedono uno sconto.

Sono formulate in modo che possano cadere: se la seconda non regge, il prototipo cambia del tutto.

## Come lo sto affrontando

- **Settimana 1:** interviste a studi tecnici e costruttori, con domande aperte che non guidano le risposte.
- **Settimana 2:** prototipo con Claude su un fascicolo di esempio.
- **Settimana 3:** test con 2-3 professionisti e case study breve.

Le metriche sono concrete: tempo per fascicolo, percentuale di voci che il tecnico corregge, costo stimato per fascicolo.

## Le domande di prodotto che mi interessano

- Quanto errore è tollerabile quando un errore costa?
- Quando l'AI non deve rispondere?
- Chi paga, e quanto?

## Riservatezza

È un progetto personale. Lavora solo su un fascicolo di esempio anonimo, senza usare documenti di clienti.
