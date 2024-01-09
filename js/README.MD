# TRACCIA

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


# SVOLGIMENTO

- chiedo all'utente il numero di chilometri
    - creo un prompt per far inserire il numero di chilometri
    - trasformo il dato in un numero con un parseInt
    - creo una variabile col numero di chilometri

- chiedo l'età all'utente
    - creo un prompt per far inserire l'età 
    - trasformo il dato in un numero con un parseInt
    - creo una variabile col numero dell'età 

- calcolo il prezzo intero
    - moltiplico i chilometri per 0.21 €

- calcolo il prezzo finale
    - SE l'età è compresa tra 18 e 65 
        - dichiaro che il prezzo finale è uguale al prezzo intero
    - ALTRIMENTI applico uno sconto
        - SE l'età è minore di 18 
            - applico uno sconto del 20% sul prezzo intero
        - SE  l'età è maggiore di 65
            - applico uno sconto del 40% sul prezzo intero

