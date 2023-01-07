'use strict';
//1.pedir un nombre y saludarlo.
const $form1 = document.getElementById('form1');
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

$form1.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Hola, ${$form1.name.value}!`, 'success')
});

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

//2. Pedir edad al usuario y responder si es o no es mayor de edad.
const $mayorDeEdad = document.getElementById('form2');
const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2')

$mayorDeEdad.addEventListener('submit', (e) => {
  e.preventDefault();
  mayordeedad();
});


function mayordeedad() {
  const $edad = document.getElementById('edad').value;
  if ($edad >= 18) {
    alert2('Eres mayor de edad',  'success');
} else {
    alert2('Upss NO eres mayor de edad',  'success');
  
}
}
const alert2 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder2.append(wrapper)
}


 //3.PEDIR NOMBRE Y EDAD AL USUARIO. SI SE LLAMA PEPITA 
//Y ES MAYOR DE EDAD PERMITIR INGRESO A LA SALA DE ESPERA #1.
//SI SE LLAMA PEPITA Y ES MENOR DE EDAD PERMITIR INGRESO A LA SALA #2
//SI NO ES PEPITA PERO ES MAYOR DE EDADA INGRESO A LA SALA #3
//SI NO SE LLAMA PEPITA Y NO ES MAYOR DE EDAD DIRIGIR A LA SALA #4
    
const $nombreEdad = document.getElementById('form3');
const alertPlaceholder3 = document.getElementById('liveAlertPlaceholder3');

$nombreEdad.addEventListener('submit', (e) => {
  e.preventDefault();
  verificarDatos();
});

function verificarDatos() {
  const Nombre = document.getElementById('username3').value;
  const Edad = document.getElementById('edad3').value;
  if (Nombre === 'pepita' && Edad >= 18) {
    alert3('Por favor ingresa a la sala #1');
  } else if (Nombre === 'pepita' && Edad <= 18) {
    alert3('Puedes Ingresara a la sala #2');
  }else if (Nombre != 'pepita' && Edad >= 18) {
    alert3('Puedes Ingresar a la sala #3')
  }else{
    alert3('Ingresa a la sala #4');
  }
}
const alert3 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder3.append(wrapper)
}


//4. Pedir un número y mostrar los números pares desde 1 hasta n.


const $form4 = document.getElementById('form4');
const alertPlaceholder4 = document.getElementById('liveAlertPlaceholder4');


$form4.addEventListener('submit', (e) => {
    e.preventDefault();
    multiplosDeDos();
});
    
    function multiplosDeDos() {
        const nmr4 = parseInt($form4.numeropar.value);
        let pares = '';
        for (let i = 1; i <= nmr4; i++) {
          if (i % 2 === 0) {
            pares += i + ', ';
        }
      }
      alert4(`los numeros pares desde 1 hasta ${nmr4} Son ( ${pares} )`);
    }
    const alert4 = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')
      
        alertPlaceholder4.append(wrapper)
   
};

    



//5-Pedir un número, mostrar el doble de n.

const $form5 = document.getElementById('form5');
const alertPlaceholder5 = document.getElementById('liveAlertPlaceholder5');

  
$form5.addEventListener('submit', (e) => {
    e.preventDefault();
    doble();
});
    function doble() {
        const nmr5 = parseInt($form5.nmrdoble.value);
        const r5 = nmr5 * 2;
     
        alert5(`El doble de  ${nmr5}  Es  (${r5})`,'primary');
};
    
    const alert5 = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')
      
        alertPlaceholder5.append(wrapper)
   
};


 //6. Pedir un número, mostrar el triple n.
 
 const $form6 = document.getElementById('form6');
 const alertPlaceholder6 = document.getElementById('liveAlertPlaceholder6')
 
 $form6.addEventListener('submit', (e) => {
    e.preventDefault();
    triple();
 });

 function triple() {
    const nmr6 =parseInt($form6.nmrtriple.value); 
    const r6 =  nmr6 * 3;
    alert6(`El triple de ${nmr6} Es ${r6}`, 'info');
 }
 const alert6 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder6.append(wrapper)

};
 

 //7. Pedir un número, mostrar la mitad de n.

 const $form7 = document.getElementById('form7');
 const alertPlaceholder7 = document.getElementById('liveAlertPlaceholder7')

 $form7.addEventListener('submit', (e) => {
    e.preventDefault();
    Mitad();

 });


 function Mitad() {
    const nmr7 = parseInt($form7.mitadnmr.value);
    const r7 = nmr7 / 2;
    alert7(`la mitad de ${nmr7} es ${r7}`, 'warning');
 }
 const alert7 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder7.append(wrapper)

};
 
 //8. Pedir un número, mostrar la tercera parte de n.
 const $form8 = document.getElementById('form8');
 const alertPlaceholder8 = document.getElementById('liveAlertPlaceholder8')

$form8.addEventListener('submit', (e) => {
    e.preventDefault();
    terceraParte();

});

 function terceraParte() {
    const nmr8 = parseInt($form8.terceranmr.value);
    const r8 = nmr8 / 3;
    alert8(`la tercera parte de ${nmr8} es ${r8}`, 'dark');
 }

 const alert8 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder8.append(wrapper)

};


 // 9. Pedir un número, mostrar el cuadrado de n.
 /* function elcuadrado() {
    const numero = parseInt(prompt('Ingresa un numero'));
    alert(`el cuadrado de ${numero} es ${numero * numero}`)
  }
  elcuadrado();*/

//10. Pedir un número, mostrar n reducido en 5.

 /*function reducidoDeCinco() {
    let reducido = parseInt(prompt('Ingresa un numero'));
    alert(`el numero ${reducido} reducido en 5 es ${reducido - 5}`)
 }
  reducidoDeCinco();*/

//11.  Pedir un número, mostrar el doble de n más 4.

/*function dobleDeMasCuatro() {
    let numero = parseInt(prompt('Ingrese un numero'));
    let resultado = numero * 2 + 4;
    alert(`el doble de ${numero}, mas 4 es ${resultado}`);
    
}
 dobleDeMasCuatro();*/


// 12. Pedir un número, mostrar si es positivo, negativo o si es cero.

/*function positivoNegativoCero() {
    const numero = parseInt(prompt('Ingrese un numero'));
    if (numero === 0) {
        alert('Ingreso un cero');
    }else if (numero < 0){
        alert('Ingreso un numero negativo');
    }else {
        alert('Ingreso un numero positivo');
    }
}
positivoNegativoCero();*/

// 13 . Pedir un número, mostrar si es par, impar o si es cero.
 /* function ceroParImpar() {
    const numero = parseInt(prompt('Ingresa un numero'));
    if (numero === 0) {
        alert('numero' + numero + 'es cero')
    }else if (numero % 2 === 0) {
        alert('el numero' + numero + 'es un numero par');
    }else{
        alert('el numero ' + numero + 'es un numero impar');
    }
    
  }
  ceroParImpar();*/


//14.  Pedir un número, mostrar si es un número primo o no.
 /*function esPrimo() {
    const numero = parseInt(prompt('Ingresa un numero mayor que 1'));
    if (numero < 2) {
        alert('error, debes ingresar un numero mayor que 1')
        return
    }
    let contador = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contador++;
        }
    }
    if (contador === 2) {
        alert(`el numero ${numero} es primo`);
    }else{
        alert(`el numero ${numero}, no es primo`);
    }
 }
 esPrimo();*/
// 15. Pedir dos números, mostrar la suma.
/*const sumaDeDosNumeros = ()=> {
    const numero1 = parseInt(prompt('Ingresa el primer numero'));
    const numero2 = parseInt(prompt('Ingresa el segundo numero'));
    alert(` ${numero1} + ${numero2} = ${numero1 + numero2}`);
}
sumaDeDosNumeros();*/
// 16. Pedir dos números, mostrar la resta.

/*const restaDeDosNumeros = ()=> {
    const numero1 = parseInt(prompt('Ingresa el primer numero'));
    const numero2 = parseInt(prompt('Ingresa el segundo numero'));
    alert(` ${numero1} - ${numero2} = ${numero1 - numero2}`);
}
restaDeDosNumeros();*/

//17.  Pedir dos números, mostrar la multiplicación.

/*const multiplicacionDeDosNumeros = ()=> {
    const numero1 = parseInt(prompt('Ingresa el primer numero'));
    const numero2 = parseInt(prompt('Ingresa el segundo numero'));
    alert(`${numero1} * ${numero2} = ${numero1 * numero2}`)
}
multiplicacionDeDosNumeros();*/

// 18. Pedir dos números, mostrar la división.

/*const divicionDeDosNumeros = ()=> {
    const numero1 = parseInt(prompt('Ingresa el primer numero'));
    const numero2 = parseInt(prompt('Ingresa el segundo numero'));
    const resultado = numero1 / numero2
    alert(`${numero1} / ${numero2} = ${resultado}`)
}
divicionDeDosNumeros();*/

// 19. Pedir dos números, mostrar el resto de la división.

/*function elResto() {
    const numero1 = parseInt(prompt('Ingresa el primer numero'));
    const numero2 = parseInt(prompt('Ingresa el segundo numero'));
    const resultado = numero1 % numero2;
    alert(` El resto es ${resultado }`)
}
elResto();*/

// 20. Pedir dos números, mostrar si el primer número es divisible por el segundo.

/*const divisible = () => {
    const numero1 = parseInt(prompt('Ingresa el primer numero'));
    const numero2 = parseInt(prompt('Ingresa el segundo numero'));
    const resultado = numero1 % numero2;
    if (numero1 === numero2) {
        alert(`Si es divisible el Resultado es, ${numero1 / numero2}`);
    } else{
        alert('no se encontraron resultados.')
    }
}
divisible();*/

// 21. Pedir dos números y el nombre de una operación, mostrar el resultado.

/*const resultado = () => {
    const numero1 = parseInt(prompt('Ingresa el primer numero'));
    const numero2 = parseInt(prompt('Ingresa el segundo numero'));
    const nOperacion = prompt('Ingresa el nombre de una Operacion');
    switch (nOperacion) {
        case sumar:
            alert(`${numero1} + ${numero2} = ${numero1 + numero2}`);
            break;
    
        default:
            break;
    }
          
}
resultado();


// 22. Pedir un número, mostrar la suma total desde 1 hasta n.
  
/*function SumaUnoN() {
    let numero = parseInt(prompt('Ingresa un numero.'));
for (let  i= 1;  i <= numero ; i++) {
    if (i + numero) {
        console.log(i)
    }
}
}
SumaUnoN();

//23.  Pedir un número, mostrar la suma de los números pares desde 1 hasta n.
function sumaPares() {
    const numero = parseInt(prompt('Ingresa un numero.'));
    let resultado= 0;
    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            resultado = resultado + i;
        }

    }
    alert('la suma de los pares es' +  resultado);
}
 sumaPares();

//24.  Pedir un número, mostrar la suma de los números impares desde 1 hasta n.
/*function sumaImpares() {
    const numero = parseInt(prompt('Ingresa un numero.'));
    let resultado = 0;
    for (let i = 1; i <= numero; i++) {
      if (i % 2 ===/ 0) {
        resultado += i ;
      }
    }
    alert('la suma de los impares' + resultado);
}
 sumaImpares();

// 25. Pedir un número, mostrar multiplos de 3 desde 1 hasta n.
function multiplos() {
    const numero = parseInt(prompt('Ingresa un numero'));
    let i = 0;
    while (i =< numero) {
        if (i % 3 === 0) {
            
        }
        i++;
    }
}
 multiplos();

// 26. Pedir un número, mostrar los números desde n hasta 0.

function numeros() {
    const numero = parseInt(prompt('Ingresar un numero.'));
    for (let i = numero; i >= 0 ; i--) {
        console.log(i);
        
    }
}
numeros();*/


     






