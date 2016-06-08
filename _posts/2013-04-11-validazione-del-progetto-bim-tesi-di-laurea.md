---
layout: post
title: "Validazione del Progetto BIM - Tesi di Laurea"
date: 2013-04-11 17:55
categories: [BIM]
tags: [bcf, bim, IFC, interoperabilità, Revit, Solibri, validazione progetto]
---
![City-landscape-070](/assets/2013/04/City-landscape-070-470x264.jpg)
Il giorno 26 Marzo 2013 mi sono laureato in Ingegneria Edile/Architettura presso l'Università di Bologna. Titolo della tesi: *"Project Validation using BIM"*. Di seguito un estratto della stessa per presentarne i contenuti, da leggere seguendo le slide della [presentazione PDF allegata](#presentazione).

### Indice

1.  [Download della presentazione](#presentazione)
2.  [<span style="line-height: 13px;">SLIDE 3: Il BIM</span>](#bim)
3.  [SLIDE 4](#4)
4.  [SLIDE 5](#5)
5.  [SLIDE 6](#6)
6.  [SLIDE 7: Validazione del Progetto](#validazione)
7.  [SLIDE 8](#8)
8.  [SLIDE 9](#9)
9.  [SLIDE 10: Interoperabilità](#interoperabilita)
10.  [SLIDE 11](#11)
11.  [SLIDE 12: Revit BCF Plugin](#bcf)
12.  [SLIDE 13](#13)
13.  [Video del funzionamento base di Revit BCF Plugin](#video)
14.  [Maggiorni informazioni e download di Revit BCF Plugin](#bcfinfo)
15.  [Altro](#altro)

### Download della presentazione

[thesis_BIMvaliation_presentation.pdf](/assets/d/thesis_BIMvaliation_presentation.pdf) (PDF 3MB).

### == SLIDE 3: IL BIM ==

BIM è un acronimo per Building Information Modeling. Il BIM è un processo che riguarda lo sviluppo, l'analisi e la gestione di un modello digitale di un edificio. Spesso il termine BIM viene confuso e si tende ad associarlo a mere rappresentazioni tridimensionali di edifici. Ma non è il caso: un modello BIM è un *Modello Cognitivo*, di cui la geometria è soltanto una parte di un patrimonio di informazioni.
È possibile infatti asserire che la differenza tra il BIM e il disegno CAD è pari alla differenza che c'è tra il CAD e il disegno tradizionale.
In un modello BIM ogni elemento ha una propria “identità”: un muro non è semplicemente un insieme di linee, ma è un oggetto con associate numerose proprietà come materiali, tipologia costruttiva, dimensioni, relazioni e vincoli con altri elementi del modello stesso, costi, tempi di lavorazione ecc..
Queste e tante altre informazioni possono essere sfruttate, aggiornate e modificate dagli operatori coinvolti nel processo edilizio.

### == SLIDE 4 ==

Il BIM, non è semplicemente una innovazione tecnologica bensì una e vera e propria rivoluzione nello svolgere il processo edilizio, dalla fase di ideazione a quella di demolizione.
Un unico modello quindi, diventa una risorsa di informazioni condivise alla quale attingono tutte le parti interessate durante l'avanzamento del processo edilizio.
Come è chiaro il modello BIM è una efficiente fonte di interoperabilità per progettisti architettonici, strutturasti, impiantisti, analisti, imprese di costruzione, gestori e per i proprietari stessi.

### == SLIDE 5 ==

Il BIM è chiaramente un fenomeno emergente: da un sondaggio operato dalla McGraw-Hill Construction nel Nord America è emerso che dal 2007 al 2012 l'utilizzo del BIM, nel settore delle costruzioni, è passato da un 28% a un 71%.
I benefici dell'adozione BIM sono allo stesso tempo sorprendenti, il 69% degli utenti ha riportato che il BIM fosse uno strumento fondamentale per la fase di progettazione migliorando la comprensione collettiva degli intenti del progetto. Al 62% il miglioramento della qualità del progetto stesso, riduzione dei conflitti in fase di costruzione, costi e temi ecc...

### == SLIDE 6 ==

I benefici dell'adozione del BIM non sono stati notati solamente dall'industria delle costruzioni.
Data la versatilità e la molteplicità di applicazioni, pubbliche amministrazioni nei paesi più sviluppati hanno iniziato piani di adozione BIM.
Norvegia, Svezia, Finlandia, Danimarca, Paesi Bassi, Stati Uniti e Canada hanno rilasciato delle linee guida per facilitare ed incentivare l'adozione del BIM da parte di imprese e compagnie.
In Gran Bretagna dal 2011 è in atto un piano di adozione quadriennale, il quale punta l'implementazione del BIM per tutti i progetti governativi entro il 2016. Come obiettivi finali la modernizzazione del settore, riduzione della spesa pubblica e le emissioni di CO2 prodotte dal settore del 20%.
Singapore è lo stato attualmente più avanzato a riguardo, l'autorità in materia di costruzioni sta adoperando diversi incentivi affinché per il 2015 il BIM diventi, in pratica, uno standard.

### == SLIDE 7: Validazione del Progetto ==

E' stato stimato che il 40% dei difetti di un edificio sono dovuti ad errori od omissioni commessi durante le fasi progettuali.
I metodi tradizionali per il controllo della qualità e per la validazione di un progetto prevedono che ogni singola parte venga manualmente controllata per correttezza, integrità e rispetto delle normative.
Questo è un processo che richiede numerose risorse e tempo, ma come già accennato in precedenza, può essere automatizzato e svolto da software di alto livello.
Una volta prodotto un modello BIM consistente, ovvero con una adeguate struttura e classificazione degli elementi, esistono strumenti che permettono di effettuare diverse analisi.
Questi sono detti strumenti di Quality Assurance e Quality Control, che quindi permettono una validazione del progetto.

### == SLIDE 8 ==

Tra le principali analisi possibili si ha il "Clash Detection" cioè un controllo di interferenze a livello geometrico.
E' possibile controllare che gli elementi del sistema architettonico, strutturale e impiantistico non collidano tra di loro ed ottenere dettagliati report delle analisi.
Allo stesso modo possono è possibile effettuare analisi sulla base di regole definite dall'utente, questo metodo si chiama "Code Compliance".
Le regole possono riguardare a distanza di elementi, spazi d'uso, volumi, ecc. È quindi immediato verificare il rispetto di normative, dei requisiti per l'accessibilità, per la circolazione e sicurezza dell'edificio.

### == SLIDE 9 ==

Nel corso della tesi sono stati studiati diversi sitemi di Automated Rule Checking.
Per iniziare da CORENET, introdotto dal ministero dello sviluppo di Singapore il quale costituisce lo stato dell'arte in materia ed a cui si stanno ispirando anche i governi di Norvegia e Stati Uniti.
CORENET è un sistema integrato che permette ai professionisti, tramite una semplice interfaccia online, di caricare i propri progetti per essere validati automaticamente tramite il sistema CORENET e-plancheck.
Tra gli altri esempi di applicazioni c'è il progetto LADI portato avanti dalla regione Friuli Venezia Giulia in tema di accessibilità che, per effettuare analisi su determinati progetti, ha innanzitutto elaborato una vera e propria ontologia per l'accessibilità. Ovvero la definizione di una terminologia che indica entità fisiche nella realtà, che si organizzano logicamente secondo un sistema di relazioni in grado di rappresentare gli "oggetti" per valutare l'accessibilità in modo esaustivo e completo.
Il progetto SMARTcodes è invece una iniziativa statunitense che mira alla creazione automatica in formato elettronico e digitale di codici e normative da poter utilizzare per il controllo automatico degli edifici.

### == SLIDE 10: Interoperabilità ==

Tutte queste operazioni descritte e numerose altre effettuabili con il BIM, prescindono dal semplice fatto che tra una applicazione e l'altra vi sia un passaggio di informazioni. Questo non è normalmente permesso dato che ogni casa software utilizza propri formati nativi. Sarebbe come pensare di aprire un file CAD in Microsoft Word.
E' stato stimato che negli Stati Uniti ogni anno vengo sprecati più di 16 miliardi di dollari nell'industria delle costruzioni per colpa di una inadeguata interoperabilità.
[buildingSMART](http://www.buildingsmart-tech.org/) è una associazione pubblica nata nel 1995, inizialmente fondata dalle maggiori compagnie nel settore delle costruzioni. Avete come unico scopo quello di risolvere i problemi creati dall'interoperabilità e la creazione di un formato standard per il BIM.
L'IFC è il prodotto di questa collaborazione, si tratta di uno schema che definisce una consistente rappresentazione delle informazioni contenute in un Building Information Model. Il formato ha una struttura gerarchica, ed è in continua evoluzione.
Recentemente è stata rilasciata la versione IFC4. Al momento IFC è lo standard più solido e sicuro per la comunicazione tra software BIM ed è praticamente supportato da tutti i principali applicativi sia di disegno che di code checking.

### == SLIDE 11 ==

Oltre allo schema IFC, buildingSMART sviluppa altri standard volti a migliorare l'interoperabilità legati all'IFC. Tra questi gli Information Delivery Manual e le Model View Definitions.
La sempre crescente implementazione e il grande utilizzo delle IFC le ha rese estremamente vaste. Talvolta lo scambio di informazioni necessario è minore, come nel caso di specifiche analisi richieste su un modello.
I requisiti necessari a questo scambio diretto di dati sono definiti all'interno dell'Information Delivery Manual (IDM). La soluzione invece, che implementa questi requisiti tramite l'utilizzo di un software è chiamata Model View Definition (MVD). Le case produttrici di software possono implementare e sviluppare loro stessi una o più specifiche MVDs.
MVD soano necessarie nell'ambito dell'Automated Code Checking per permettere al software di controllare solo le parti interessate del modello, ma esistono analoghe MVD per analisi energetiche, stime dei costi, spatial planning e molti altri utilizzi del BIM.

### == SLIDE 12: BCF Revit Plugin ==

Ulteriore sforzo da parte di buildingSMART è lo standard [BIM Collaboration Format](http://www.buildingsmart-tech.org/specifications/bcf-releases/bcf-intro) (BCF).
La corporazione [Tekla](http://www.tekla.com/), casa dell'ononimo software di modellazione strutturale per l'acciaio e [Solibri](http://www.solibri.com/) hanno infatti incoraggiato buildingSMART a produrre un'altro open standard per permettere la comunicazione tra diversi applicativi BIM.
Il BIM Collaboration Format serve a codificare messaggi per informare un pacchetto software di determinate tematiche e/o problemi riscontrati in un modello BIM da parte di un'altra applicazione.
Durate le fasi di revisione di un progetto sorgono numerosi problemi che spetta risolvere a diversi componenti dello stesso team. Queste indicazioni più l'esatta posizione del modello 3D e altri dati necessari vengo trasmessi tramite il formato BCF.
Conseguenza è che solamente i problemi segnalati vengono trasmessi e non l'intero modello BIM, migliorando in modo molto semplice la comunicazione tra diversi professionisti e riducendo notevolmente il carico dovuto al trasferimento di interi file di un progetto.
Di particolare beneficio se utilizzato nell'ambito della validazione e controllo automatico di un progetto. Il risultato dell'analisi può essere infatti inviato direttamente all'applicazione che ha generato il modello per effettuare le modifiche necessarie.
Il BCF è già stato integrato in diverse suite software tra cui Tekla Structures, Solibri Model Checker e DDS Architecture.

### == SLIDE 13 ==

Il formato BCF però non è supportato da [Autodesk Revit](http://www.autodesk.com/products/autodesk-revit-family), attualmente la principale suite in quanto a creazione di modelli BIM a livello Architettonico, Strutturale ed Impiantistico.
Ho quindi sviluppato una applicazione che si integrasse dentro Revit, un cosiddetto Plugin, per implementare il supporto del BCF.
Nel seguente video un caso modello di funzionamento e lo scambio dati con Solibri Model Cheker. Attualmente il programma più utilizzato per analisi di Clash Detection e Code Compliance.

### Video del funzionamento base di Revit BCF Plugin

httpv://youtu.be/1fIob3IoA18

### Maggiorni informazioni e download di Revit BCF Plugin

[Revit BCF Plugin.](http://localhost/teocomi/code/bcf-revit-plugin/)

### Altro

Per maggiori informazioni e la versione integrale della tesi scrivere a [hello@teocomi.com](mailto:hello@teocomi.com).
Ringrazio il mio relatore Roberto Mingucci e i correlatori [Simone Garagnani](tcproject.net) e Andreas Pedersen.
