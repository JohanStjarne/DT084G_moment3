"use strict";

const date = new Date(); // skapar ett datumobjekt med aktuell tid
const year = date.getFullYear(); // hämtar årtalet från datumobjektet

// Funktion för att formatera timmar och minuter i HH:MM (med nolla vid timmar < 10)
function formatTimeWithZero(hours, minutes) {
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    return `${hours}:${minutes}`;
}

// Funktion för att formatera timmar och minuter i HH.MM (ingen nolla vid timmar < 10)
function formatTimeNoZero(hours, minutes) {
    if (minutes < 10) minutes = "0" + minutes;
    return `${hours}.${minutes}`;
}

// Funktion för att hämta månadsnamn
function getMonthName(month) {
    const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", 
                    "Juli", "Augusti", "September", "Oktober", "November", "December"];
    return months[month] || "Månad ej tillgänglig";
}

// Funktion för att hämta veckodagsnamn
function getWeekdayName(weekday) {
    const weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    return weekdays[weekday] || "Veckodag ej tillgänglig";
}

// Funktion för att hantera nollifyllda datum
function formatDate(day, month) {
    if (day < 10) day = "0" + day;
    // Månad ska vara 1-baserad men utan nollifyllning här (1-12 istället för 0-11)
    return { day, month: month + 1 };
}

function printDateAndTime(option) {
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if (option === 1) {
        const { day: formattedDay, month: formattedMonth } = formatDate(day, month);
        const formattedTime = formatTimeWithZero(hours, minutes);
        console.log(`${formattedTime}, ${year}-${formattedMonth}-${formattedDay}`);
    } else if (option === 2) {
        const formattedTime = formatTimeWithZero(hours, minutes);
        console.log(`${getMonthName(month)} ${day}, ${year} - ${formattedTime}`);
    } else if (option === 3) {
        const formattedTime = formatTimeNoZero(hours, minutes);
        console.log(`${getWeekdayName(date.getDay())} ${day}/${month + 1}, kl. ${formattedTime}`);
    }
}

printDateAndTime(1);
printDateAndTime(2);
printDateAndTime(3); // anropar funktionen med de olika alternativen