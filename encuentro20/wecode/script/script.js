//Se pide input al usuario
var numString1 = prompt("Ingrese un número");
var numString2 = prompt("Ingrese un segundo número");

//Se pasa el input de string a numero
var num1 = parseInt(numString1);
var num2 = parseInt(numString2);

/*Validación para cuando el input no es un número. 
Primeras dos condiciones verifican si se logró pasar a un número válido ambos inputs. 
Las últimas dos verifican que los inputs no sean strings compuesta por números seguidos de caracteres, por ejemplo, "345fkg" que sería pasado a "345" con parseInt. Por ende, estos tipos de string no se convertirían en NaN y pasarían las dos primeras condiciones sin dar el error*/
if (!isNaN(num1) && !isNaN(num2) && numString1.length === num1.toString().length && numString2.length === num2.toString().length) {
    //alerta resultado de la suma
    alert("La suma es: " + (num1 + num2));
} else {
    //alerta error
    alert("Al menos uno de los números ingresados no es válido");
}