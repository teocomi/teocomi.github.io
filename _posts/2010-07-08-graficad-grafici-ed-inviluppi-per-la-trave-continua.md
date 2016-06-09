---
layout: post
title: "grafiCAD, diagrammi ed inviluppi per la trave continua"
date: 2010-07-08 15:57
categories: [tools]
tags: [graficad, grafico, inviluppo, trave]
---
[![graficad](/assets/grafiCAD.png)](/assets/grafiCAD.png)
[![graficad](/assets/grafiCAD.jpg)](/assets/grafiCAD.jpg)


Di recente per il corso di Tecnica delle Costruzioni mi è toccato rappresentare più volte i grafici (più correttamente detti diagrammi) di Momento Flettente e teglio per la trave continua; farne più combinazioni di carico ed infine l'inviluppo...
Fortunatamente esiste il software [MomCad](http://www.dica.unict.it/users/aghersi/Software/MomCad.htm) che permette di creare il grafico in automatico dati i carichi e le luci. Sfortunatamente questo programma risale a molti anni fa (è scritto in Basic, il linguaggio per DOS) e quindi sia l'interfaccia che il funzionamento generale lasciano un po' a deisderare...

E' stato proprio quando dovevo fare gli inviluppi di una trave a 5 campate con 4 condizioni di carico che ho deciso di scrivere io stesso il nuovo MomCad! Ecco quindi che nasce grafiCAD, scritto in Actioscript 3 e MXML da Adobe Flash Builder 4. Per utilizzarlo è quindi necessario avere installata la piattaforma [Adobe Air](http://get.adobe.com/it/air/) che si scarica gratuitamente.

Principali caratteristiche del software:


*   rendere l'interfaccia più funzionale possibile (niente più PagSu e PagGiù)
*   creare più comodamente le combinazioni di carico (in pratica infinite)
*   fare in automatico l'inviluppo dei grafici
*   esportare grafici in formato DXF (apribile con autoCAD)
*   salvare i file di configurazione (sollecitazioni ecc..)
*   cross platform, funziona su Windows, Mac e Linux (grazie ad Adobe Air)

**Download: [grafiCAD.air](/assets/grafiCAD.air)**

Il progetto non e' piu' mantenuto.
