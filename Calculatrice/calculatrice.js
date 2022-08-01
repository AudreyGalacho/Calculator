//variables 
let entree = 0; //Nombre saisi via boutons
let number1 = null;
let number2 = null;
let operator = null;
let resultat = null;
let historic;

//let historic = number1 , "", number2

/****************************************************************************
 ***                            FONCTION DIS                               ***                   
 ***************************************************************************/
//traitment des boutons toucheEntree
function dis(x) {

    entree = document.getElementById('saisie');
    historic = document.getElementById('previusResult');

    // si x est un nombre
    if (typeof x === 'number') {
        

        if (entree.innerHTML.length > 20) {
            return;
        }
        entree.innerHTML += x;
        //entree.innerHTML = entree.innerHTML + x;
        //si operateur vide
        if (operator === null) {
            number1 = entree.innerHTML;
            //console.log("premier nombre",number1); 

        } else {
            //on affecte la série de chiffre au deuxieme nombre
            number2 = entree.innerHTML;
            historic.innerHTML = number1 + " " + operator + " " + number2;
        }


    } else {
        //console.log(x,number1,number2,operator);
        // si x est un oppérateur


        if (resultat !== null) {
            number1 = resultat;
            resultat = null;
        }

        if (number2 !== null) {
            solve(number1, operator, number2);
            console.log(number1, operator, number2);
            number1 = resultat;
        }

        if (number1 === null) {
            number1 = 0;
        }

        operator = x;
        entree.innerHTML = "";
        historic.innerHTML = number1 + " " + operator;
        resultat = null;
    }

}

/****************************************************************************
 ***                            FONCTION SOLVE                             ***                   
 ***************************************************************************/
//Fonction calcul 
function solve() {

    let x = parseInt(number1, 10);
    let y = parseInt(number2, 10);
    let op = operator;


    if (op === "*") {

        resultat = x * y;
    }

    if (op === "+") {
        resultat = x + y;
    }

    if (op === "-") {
        resultat = x - y;
    }

    if (op === "/") {
        resultat = x / y;
    }

    entree.innerHTML = "";
    historic.innerHTML = number1.toString() + " " + operator + " " + number2.toString() + " = " + resultat.toString();

    number1 = number2 = operator = null;

}

/****************************************************************************
 ***                            FONCTION CLEAR                             ***                   
 ***************************************************************************/

function reset() {
    document.getElementById("previusResult").innerHTML = "";
    number1 = number2 = operator = resultat = null;
    entree.innerHTML = "";
}

function clr() {
    if (number2 === entree.innerHTML) {
        number2 = entree.innerHTML = "";
        historic.innerHTML = number1 + " " + operator;
    }
    if (number1 === entree.innerHTML) {
        number1 = entree.innerHTML = "";
    }
}