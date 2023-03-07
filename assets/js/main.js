
// Chiedi all'utente il suo nome
const userName = prompt("qual'è il tuo Nome?");
console.log(userName);

// poi chiedi il suo cognome
const userSurname = prompt("qual'è il tuo Cognome?");
console.log(userSurname);

// poi chiedi il suo colore preferito
const userFavColor = prompt("qual'è il tuo Colore preferito?");
console.log(userFavColor);

// Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23
const password = document.getElementById("yourpassword");

password.innerHTML = `${userName}${userSurname}${userFavColor}23`;