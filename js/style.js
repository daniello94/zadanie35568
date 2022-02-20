console.log("Zadanie 35568");

const submit = (event) => {
    event.preventDefault();
    let fName = document.querySelector('[name=fname]')
    let lName = document.querySelector('[name=lname]')
    console.log(`Imie :${fName.value} Nazwisko:${lName.value}`);

}
let form = document.getElementById('form');
form.addEventListener('submit', submit)