/* Lösning till uppgift 8. Av Johan Stjärne, 2024 
funktionen skriver ut aktuellt tid och datum i tre olika format*/

"use strict";
const date = new Date (); // skapar ett datumobjekt med aktuell tid
const year = date.getFullYear(); // hämtar årtalet från datumobjektet ovan

function printDateAndTime(option){
    if (option === 1){
        let month = date.getMonth();
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes(); // hämtar aktuell datum och tid
        month = month + 1
        if (month < 10){month = "0" + month}
        if (day < 10){day = "0" + day}
        if (hours < 10){hours= "0" + hours}
        if (minutes < 10){minutes= "0" + minutes} // bearbetar den inhämtade datan till önskat format
        console.log(`${hours}:${minutes}, ${year}-${month}-${day}`) // skriver ut tid och datum  önskat format
    }
    if (option === 2){
        let month = date.getMonth();
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes(); // hämtar aktuell datum och tid
        if (hours < 10){hours= "0" + hours}
        if (minutes < 10){minutes= "0" + minutes}
        switch(month){
            case 0: month = "Januari"
            break;
            case 1: month = "Februari"
            break;
            case 2: month = "Mars"
            break;
            case 3: month = "April"
            break;
            case 4: month = "Maj"
            break;
            case 5: month = "Juni"
            break;
            case 6: month = "Juli"
            break;
            case 7: month = "Augusti"
            break;
            case 8: month = "September"
            break;
            case 9: month = "Oktober"
            break;
            case 10: month = "November"
            break;
            case 11: month = "December"
            break;
            default: month = "Månad ej tillgänglig"
            break;} // bearbetar den inhämtade datan till önskat format
        console.log(`${month} ${day}, ${year} - ${hours}:${minutes}`)  // skriver ut tid och datum  önskat format
    }
    if (option === 3){
        let month = date.getMonth();
        let day = date.getDate();
        let weekday = date.getDay();
        let hours = date.getHours();
        let minutes = date.getMinutes(); // hämtar aktuell datum och tid
        month = month + 1
        if (hours < 10){hours= "0" + hours}
        if (minutes < 10){minutes= "0" + minutes}
        switch(weekday){
            case 0: weekday = "Söndag"
            break;
            case 1: weekday = "Måndag"
            break;
            case 2: weekday = "Tisdag"
            break;
            case 3: weekday = "Onsdag"
            break;
            case 4: weekday = "Torsdag"
            break;
            case 5: weekday = "Fredag"
            break;
            case 6: weekday = "Lördag"
            break;
            default: weekday = "Veckodag ej tillgänglig"
            break;} // bearbetar den inhämtade datan till önskat format
        console.log(`${weekday} ${day}/${month}, kl. ${hours}.${minutes}`)  // skriver ut tid och datum  önskat format
    }
}

printDateAndTime(1)
printDateAndTime(2)
printDateAndTime(3) //anropar funktionen med de olika alternativen