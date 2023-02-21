const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.getElementsByClassName('parrafo');
const parrafoid = document.getElementById('idparrafo');
const formulario = document.querySelector('#formulario')
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const resultado = document.querySelector('#btn-resultado');

/**
  Forma uno de escuchar eventos y presentarlos 
**/

/*resultado.addEventListener('click',btnClick);
resultado.addEventListener('click', btnClick);

function btnClick () {
    const total = parseInt(num1.value) + parseInt(num2.value);

    parrafoid.innerText = 'Resultado: ' + total;
    //document.writeln(total);
}*/

/**
  Forma dos de escuchar eventos a traves de un formulario
**/
formulario.addEventListener('click', btnSubmit);

function btnSubmit (event) {
    //console.log({event});
    event.preventDefault();
    const total = parseInt(num1.value) + parseInt(num2.value);

    parrafoid.innerText = 'Resultado: ' + total;
}

/** 
    Una tercer forma para resolver el escuchar eventos y presentar
    el resultado es en ingresando de forma manual en el botón el
    tipo de botón(type = "button"), ya que en la etiqueta formulario
    por default se llama submit.
**/

/*const entrada = document.querySelector('input');*/

/*console.log({
    h1,
    p,
    parrafo,
    parrafoid,
    entrada
})

p.innerHTML = 'Este es Mi parrafo <br> desde JS';
p.innerText = 'Este es un <btr> parrafo en texto';

console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo');

h1.classList.add('amarillo');
h1.classList.remove('rojo');

entrada.value = '12345';

const img = document.createElement('img');
img.setAttribute('src', 'imgpractica.jpg');

parrafoid.innerHTML = '';
parrafoid.append(img);*/
