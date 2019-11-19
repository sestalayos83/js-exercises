// **********
// EJEMPLO DE IF ELSE
// Toma de decisiones
/*
let nota = 4.9;
let notaLetra = '';

if (nota >= 9) {
  notaLetra = 'sobresaliente';
  console.log('Has sacado un ' + notaLetra);
} else if (nota >= 7) {
  notaLetra = 'notable';
  console.log('Has sacado un ' + notaLetra);
} else if (nota >= 6) {
  notaLetra = 'bien';
  console.log('Has sacado un ' + notaLetra);
} else if (nota >= 5) {
  notaLetra = 'suficiente';
  console.log('Has sacado un ' + notaLetra);
} else if (nota < 5) {
  notaLetra = 'suspenso';
  console.log('Has sacado un ' + notaLetra);
}
*/

// **********
// EJEMPLO DE SWITCH
/*
let día = 5;

switch (día) {
  case 0:
    console.log('Hoy es Domingo');
    break;

  case 1:
    console.log('Hoy es Lunes');
    break;

  case 2:
    console.log('Hoy es Martes');
    break;

  case 3:
    console.log('Hoy es Miércoles');
    break;

  case 4:
    console.log('Hoy es Jueves');
    break;

  case 5:
    console.log('Hoy es Viernes');
    break;

  case 6:
    console.log('Hoy es Sábado');
    break;

  default:
    console.log('No es ningún día de la semana');
}
*/

// **********
// EJEMPLO DE LOOP WHILE
// Cuando no sabemos cuántas veces se va a ejecutar un código
// El coche deja de andar cuando se queda sin gasolina
/*
let gasolina = 100;

while (gasolina > 1) {
  gasolina--;
  console.log('Gasolina restante: ' + gasolina);
}
console.log('Ya no tengo gasolina');
*/

// **********
// EJEMPLO DE LOOP FOR
// Cuando sabemos cuántas veces se va a ejecutar un código
// Calculadora
// Defino variable dentro del loop; le digo por cuántas veces se repite; indico como incrementa
/*
let valor;
let limite = 20;

for (let i = 1; i <= limite; i++) {
  valor = 3;
  let resultado = valor * i;
  console.log(valor + ' x ' + i + ' = ' + resultado);
}
*/

// Función sumar
/*
function sumar(a, b) {
  return a + b;
}
let total = sumar(10, 20);
console.log('Total: ' + total);
*/

//****//
// Función calculadora
/*
let valor;
let limite;

function calculadora(valor, limite) {
  for (let i = 1; i <= limite; i++) {
    let resultado = valor * i;
    console.log(valor + ' x ' + i + ' = ' + resultado);
  }
}
calculadora(5, 10);
*/

//****//
// Función calcularNota
/*
function calcularNota(nota) {
  let notaLetra = '';
  
  if (nota >= 9) {
    notaLetra = 'sobresaliente';
    console.log('Has sacado un ' + notaLetra);
  } else if (nota >= 7) {
    notaLetra = 'notable';
    console.log('Has sacado un ' + notaLetra);
  } else if (nota >= 6) {
    notaLetra = 'bien';
    console.log('Has sacado un ' + notaLetra);
  } else if (nota >= 5) {
    notaLetra = 'suficiente';
    console.log('Has sacado un ' + notaLetra);
  } else if (nota < 5) {
    notaLetra = 'suspenso';
    console.log('Has sacado un ' + notaLetra);
  }
}

calcularNota(9);
calcularNota(7);
calcularNota(0);
*/

// **********
// EJEMPLO DE ARRAY
// Los arrays se suelen recorrer con un bucle for
/*
let nombres = ['Rosa', 'Girasol', 'Orquídea'];
let edad = ['14', '20', '15'];
console.log(nombres[0]);

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i] + ' tiene ' + edad[i] + ' años');
}
*/

// **********
// EJEMPLO DE OBJETO
// Es una representación abstracta de algo que existe en la vida real
// Es una variable que dentro tiene propiedades que tienen relación entre sí
// Se accede a sus propiedades llamando al objeto seguido de punto y la propiedad (dotación de punto)
/*
let coche = {
  color: 'rojo',
  puertas: 3
};
console.log(coche.color);

function describirCoche(c) {
  console.log(`Mi coche es ${c.color} y tiene ${c.puertas} puertas`);
}
describirCoche(coche);
*/

// **********
// EJEMPLO ARRAY DE OBJETOS
/*
let persona1 = {
  nombre: 'Soraya',
  edad: 36
};

let persona2 = {
  nombre: 'Rubén',
  edad: 31
};

let persona3 = {
  nombre: 'Susana',
  edad: 33
};

let personas = [persona1, persona2, persona3];
console.log(personas);

for (let i = 0; i < personas.length; i++) {
  let persona = personas[i];

  console.log(`${persona.nombre} -- ${persona.edad}`);
}
*/

// **********
// EJEMPLO DE CLASE
// Son representaciones abstractas de otras cosas
// Se definen con la palabra class y van en mayúscula
// Todas las clases tienen dentro un constructor, que es una función que se ejecuta con cada nueva clase
// El constructor puede recibir argumentos
// Los métodos son funciones dentro de las clases
// Para crear instancias de una clase se una la palabra new
/*
class Galleta {
  constructor(botones, sabor) {
    this.botones = botones;
    this.sabor = sabor;
    this.fechaCreacion = 'Hoy';
  }
}

class Coche {
  constructor(marca, tipo, puertas) {
    this.marca = marca;
    this.tipo = tipo;
    this.puertas = puertas;
    this.encendido = false;
    this.gasolina = 100;
  }

  encenderCoche() {
    if (this.encendido) {
      console.error('El coche ya está arrancado');
    } else {
      this.encendido = true;
      console.log('Arrancó el coche');
      return this;
    }
  }

  realizarViaje(consumo) {
    if (!this.encendido) return console.warn('El coche está apagado');
    if (consumo > this.gasolina) return console.warn('No tienes gasolina!!');

    this.gasolina = this.gasolina - consumo;
    return 'Te queda ' + this.gasolina;
  }
}

let miCoche = new Coche('Ibiza', 'Sedan', 3);
console.log(miCoche);
*/

// **********
// EJERCICIO 1
// Convertir de libras a kilogramos
// Extra: dejar dos decimales
// Para calcular, dividir libras entre la constante 2.2046
// 1 libra = 0.453592 kilogramos
/*
let libras = 135;
let kg = libras / 2.2046;

kg *= 100;
kg = Math.round(kg);
kg /= 100;
console.log(kg);
*/

// **********
// EJERCICIO 2
// Convertir de kilometros a millas
// 1km son 0.62 millas
/*
let km = 20;
let millas = km * 0.62;

console.log(millas);
*/

// **********
// EJERCICIO 3
// Calcular área de un triángulo rectángulo
// Base 10 y altura 5
// Fórmula: base * altura / 2
/*
let base = 10;
let altura = 5;
let area = (base * altura) / 2;

console.log(area);
*/

// **********
// EJERCICIO 4
// Detectar el número mayor de un array [1, 6, 8, 4, 2, 7, 10, 3, 5]
/*
let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let mayor = -999;

for (let i = 0; i <= numeros.length; i++) {
  if (numeros[i] >= mayor) {
    mayor = numeros[i];
  }
}
console.log(`El número mayor es: ${mayor}`);
*/

// **********
// EJERCICIO 5
// Determinar números pares e impares
/*
let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];

for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];

  if (numero % 2 === 0) {
    console.log(numero + ' es par');
  } else {
    console.log(numero + ' es impar');
  }
}
*/

// **********
// EJERCICIO 6
// Programar tabla de multiplicar
/*
for (let i = 1; i <= 5; i++) {
  let constante = "";
  for (let x = 1; x <= 7; x++) {
    constante += `${i * x}  `;
  }
  console.log(constante);
}
*/

// **********
// EJERCICIO 7
// Función que reciba 3 argumentos numéricos y que devuelva el mayor de los 3
/*
function max(a, b, c) {
  let mayor = Math.max(a, b, c);
  return mayor;
}
let mayor = max(1, 4, 9);
console.log(mayor);
*/
/*
function max(a, b, c) {
  let mayor;
  if (a > b) {
    if (a > c) {
      mayor = a;
    } else {
      mayor = c;
    }
  } else if (a < b) {
    if (b > c) {
      mayor = b;
    } else {
      mayor = c;
    }
  }
  return mayor;
}
let mayor = max(3, 0, 1);
console.log(mayor);
*/

// **********
// EJERCICIO 8
// Función para determinar el nombre más largo de un array
// Recibe como parámetro el array y devuelve el nombre más largo
/*
function masLargo(arr) {
  let nombreLargo = "";

  for (let i = 0; i < arr.length; i++) {
    let nombre = arr[i];

    if (nombre.length > nombreLargo.length) {
      nombreLargo = nombre;
    }
  }
  return nombreLargo;
}

let nombres = ["Lucía", "Carolina", "Mar"];

let nombreLargo = masLargo(nombres);
console.log(nombreLargo);
*/

// **********
// EJERCICIO 9
// Función para filtrar nombres
// Creamos una función que recibe un array como argumento y devuelve un array con los nombres que empiezan por una determinada letra
/*
function filtrarPorLetra(arr, letra) {
  let nuevoArr = [];
  for (let i = 0; i < arr.length; i++) {
    nombre = arr[i];
    primeraLetra = nombre[0].toUpperCase();
    capitalizarLetra = letra.toUpperCase();

    if (primeraLetra === capitalizarLetra) {
      nuevoArr.push(nombre);
    }
  }
  if (nuevoArr.length <= 0) {
    return "No hay nombres que empiecen por " + capitalizarLetra;
  }
  return nuevoArr;
}

let nombres = ["Marian", "susana", "Sandra", "Ana", "Inma", "María"];
let nombresEmpiezanPor = filtrarPorLetra(nombres, "s");
console.log(nombresEmpiezanPor);
*/

// **********
// EJERCICIO RU
// Sumar todos los números de un array
/*
let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let resultado = 0;
for (let i = 0; i < numeros.length; i++) {
  resultado += numeros[i];
}
console.log(resultado);
*/

// Calculadora
// Crear una función que reciba 3 argumentos: 2 numeros y la operación que queremos realizar
// Si recibo una letra me da error
/*
function calculadora(a, b, cuenta) {
  if (cuenta != "+" && cuenta != "-" && cuenta != "*" && cuenta != "/") {
    console.log("Escribe +, -, * o /");
  } else {
    if (cuenta === "+") {
      let resultado = a + b;

      return resultado;
    } else if (cuenta === "-") {
      let resultado = a - b;

      return resultado;
    } else if (cuenta === "*") {
      let resultado = a * b;

      return resultado;
    } else if (cuenta === "/") {
      let resultado = a / b;

      return resultado;
    }
  }
}

let resultado = calculadora(2, 4, "/");
console.log(resultado);
*/
/*
function calculadora(a, b, cuenta) {
  switch (cuenta) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      "Escribe +, -, * o /";
  }
}

let resultado = calculadora(2, 4, "*");
console.log(resultado);
*/
let palabra = "Aguacate";
let palabraOculta = "";
for (let i = 0; i < palabra.length; i++) {
  let raya = "_ ";
  palabra[i] = raya;
  palabraOculta = palabraOculta + raya;
}
console.log(palabraOculta);

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let resultado = 0;
for (let i = 0; i < numeros.length; i++) {
  resultado += numeros[i];
}
console.log(resultado);
