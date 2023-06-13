const prompt = require('prompt-sync')();

let menuChoice = 0;
do {
    console.log (`1 - Insert a new Person`) 
    console.log (`2 - Show agenda`) 
    console.log (`Hit 'x' to exit`) 
    menuChoice = prompt(``)

    switch (menuChoice) {
        case '1': insert();
            
            break;
            
            case '2': show();
            
            break;
    
        default:
            break;
    }
} while (menuChoice != 'x');


function show(){
    console.log ('☺')
}

function insert (){
let name = prompt("insert your name ");
let surname = prompt("insert your surname ");
let phoneNumber = prompt("insert your phone number ");

let adry = new Person (name, surname, phoneNumber);

let saveing = prompt("save or not?");
if (saveing == 'save') {
    
} else {}

console.log(adry.greet());
}

function Person (name, surname, phoneNumber) {
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;

    this.greet = function (){
        console.log (`You have inserted ${name} ${surname} and your number is ${phoneNumber}`)
    }
}
