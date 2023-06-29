const prompt = require('prompt-sync')();

let agenda = []
let menuChoice = 0;
do {
    console.log(`1 - Insert a new Person`)
    console.log(`2 - Show agenda`)
    console.log(`3 - Search `)
    console.log(`4 - Modify `)
    console.log(`Hit 'x' to exit`)
    menuChoice = prompt(``)

    switch (menuChoice) {
        case '1': insert();

            break;

        case '2': show();

            break;

        case '3': findContact();

            break;

        case '4': change();

            break;
        default:
            break;
    }
} while (menuChoice != 'x');


function show() {
    agenda.forEach(contact => {
        console.log("---");
        showElement(contact)
    });
}

function showElement(contact) {
    Object.keys(agenda).forEach(field => {
        console.log(contact[field])
    })
}

function insert() {
    let name = prompt("insert your name ");
    let surname = prompt("insert your surname ");
    let phoneNumber = prompt("insert your phone number ");

    let saveing = prompt("save or not?");
    if (saveing == 'save') {
        agenda.push(new person(name, surname, phoneNumber))
    } else { }
}

function person(name, surname, phoneNumber) {
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;

    this.greet = function () {
        console.log(`You have inserted ${name} ${surname} and your number is ${phoneNumber}`)
    }
}

function change() {
    let contactPosition = findContact();

    let key = modify();

    let newValue = prompt("Enter new value: ");
    changeContactField(agenda[contactPosition], key, newValue);
}

function findContact() {

    let searchkey = 0
    console.log(`1 - search by name`)
    console.log(`2 - search by surname`)
    console.log(`3 - search by phone number`)
    console.log(`Hit 'x' to exit`)
    searchkey = prompt(``)

    switch (searchkey) {

        case 1: let searchName = prompt(`insert name `)
            for (let i = 0; i >= agenda.length; i++) {

                if (searchName == agenda[i].name) {
                    showElement(agenda[i]);
                }
            }
            break;
        case 2: let searchSurname = prompt(`insert surname`)
            for (let i = 0; i >= agenda.length; i++) {

                if (searchName == agenda[i].surname) {
                    showElement(agenda[i]);
                }
            }
                break;
        case 3: let searchPhoneNumber = prompt(`insert phone number `)
        for (let i = 0; i >= agenda.length; i++){
            
            if (searchName == agenda[i].phoneNumber) {
                showElement(agenda[i]);
            }}
                break;
        default:
            break;
    }
}


function changeContactField(contact, field) {
    contact[field] = newValue
}

function modify() {
    let chooseKey = 0
    console.log(`1 - change name`)
    console.log(`2 - Change surname`)
    console.log(`3 - Change a phone number`)
    console.log(`Hit 'x' to exit`)
    chooseKey = prompt(``)

    switch (chooseKey) {

        case 1: changeContactField(contact, "name")
            break;
        case 2: changeContactField(contact, "surname")
            break;
        case 3: changeContactField(contact, "phoneNumber")
            break;
        default:
            break;
    }
}

