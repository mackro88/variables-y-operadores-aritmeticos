// Punto 2
// Realizar operaciones con dos números.
// Pedir al usuario que ingrese dos números diferentes y mayores a cero.
alert("Operaciones con 2 números"); 
let num1 = prompt("Ingresa un número entero: "); // El usuario ingresa el primer número (num1)
num1 = parseInt(num1); // Se convierte num1 de string a int 
let num2 = prompt("Ingresa otro número entero, pero distinto al anterior: ");  // El usuario ingresa el segundo número (num2)
num2 = parseInt(num2); // Se convierte num2 de string a int

// Para ambos números, calcular lo siguiente:
// Suma
sum = num1 + num2;

// Resta
rest = num1 - num2;

// División
div = num1 / num2;

// Multiplicación
mult = num1 * num2;

// Módulo
mod = num1 % num2;

// Mostramos los resultados al usuario
document.write("<< Operaciones con 2 números >>" +
               "<br>" +
               "<br>Entre los números " +num1+ " y " +num2+ ":"+
               "<br>su suma es " +sum+
               "<br>su resta es " +rest+
               "<br>su división es " +div+
               "<br>su multiplicación es " +mult+
               "<br>y su módulo es " +mod+
               "<br>______________________________________________");

////////////////////////////////////////////////////////////////

// Punto 3
// Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit.
// Se debe considerar la siguiente información respecto a la equivalencia de las escalas de temperatura:
// 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos es 0​°C + ​273.15​ = ​273.15​ K
// 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos es (0°C × 9/5)+32 = 32°F

alert("Convertir de Celsius a Kelvin y Farenheit"); 
// Pedir al usuario ingresar la temperatura en grados Celsius
let celsius = prompt("Ingresa los grados Celsius a convertir"); // El usuario ingresa el valor a convertir.
celsius = parseFloat(celsius); // Se convierte celsius de string a float 

// Conversión a Kelvin
kelvin = celsius + 273

// Conversión a Fahrenheit
farenheit = (celsius * (9/5)) + 32

// Mostramos los resultados al usuario
document.write( "<br>"+
                "<< Convertir de Celsius a Kelvin y Farenheit >>" +
                "<br>" +
                "<br>Para " +celsius+ "º Celsius: " +
                "<br>su equivalente en Kelvin es: " +kelvin+
                "<br>y su equivalente en Farenheit es: " +farenheit+
                "<br>______________________________________________");

////////////////////////////////////////////////////////////////

// Punto 4
// Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el resultado debe ser 1 año, 1 semana y 1 día.
// Se debe considerar lo siguiente:
// 1 año tiene 365 días
// 1 semana tiene 7 días
// Se recomienda usar la función Math.floor para obtener la parte entera de un número decimal.

alert("Convertir días a Años, Semanas y Días"); 
// Pedir al usuario ingresar los días a convertir
let nDias = prompt("Ingresa los días a convertir"); // El usuario ingresa el valor a convertir.
nDias = parseInt(nDias); // Se convierte de string a int

years = parseInt(nDias / 365); // Se convierten los días en años
restoYears = nDias % 365; // Guardo los días que sobran
weeks = parseInt(restoYears / 7); // Se convierten los días que sobran en semanas
days = restoYears % 7; // Se guardan los días que sobran en días

// Mostramos los resultados al usuario
document.write( "<br>"+
                "<< Convertir días a Años, Semanas y Días >>" +
                "<br>" +
                "<br>" +nDias+ " días se pueden dividir en: " +
                "<br>" +years+ " años, " +
                weeks+ " semanas y " +
                days+ " días. " +
                "<br>______________________________________________");

////////////////////////////////////////////////////////////////
