console.log("JavaScript");

function variable() {

    if (true) {

        variable = "Hola Mundo"
        
    }

    console.log(variable);
}

//Area del cuadrado
let lado;
lado = parseInt(prompt("Ingresa medida del lado del cuadrado"));

let area;
area = lado * lado;
document.write("El area del cuadrado es: " + area);  

// Numero Par
var numero = parseInt(prompt("numero", 0));

while (isNaN(numero)) {
     
    numero = perseInt(prompt("Digite un numero", 0));
    
}

if(numero %2 == 0){

    console.log("El numero es par");
}
