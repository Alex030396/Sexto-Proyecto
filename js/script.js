//querySelector
const heading = document.querySelector('.header__texto h2'); //Retorna 0 o 1 elemento //con . traes class //con # traes id
heading.textContent = 'Nuevo heading';  //Con esto puede sustituir el titulo del HTML si ingresar en el HTML
heading.classList.add('nueva_clase'); //Con esto púedes agregar una clase 
console.log(heading);

//querySelectorall
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = ('Nuevo enlace'); //Para cambiar el titulo del enlace.
enlaces[0].href = ('https://tetris.com/play-tetris'); //Para sustituir la direccion del enlace.
enlaces[0].classList.add('Nueva'); //Para añadir una clase.
enlaces[0].classList.remove('navegacion__enlace');  //Para eliminar una clase existente
console.log(enlaces[0]); //Para traerme solo el primer enlace que comienza en 0
console.log(enlaces); //Para trerme todos los enlace.

//getElementByid
const heading2 = document.getElementById('heading');
console.log(heading2);

//Generar un nuevo enlace.
const nuevoEnlace = document.createElement('A');
nuevoEnlace.href = 'https://tetris.com/play-tetris'; //Para agregar el link del enlace.
nuevoEnlace.textContent = 'Nuevo enlace de Alex';  //Para agregar el nombre del enlace.
nuevoEnlace.classList.add('navegacion__enlace'); //Para agregar la clase del enlace.
const navegacion = document.querySelector('.navegacion'); //Para decirle donde se va a agregar el enlace.
navegacion.appendChild(nuevoEnlace);    //Para que forme parte del enlace como un hijo osea de ultimo.  
console.log(nuevoEnlace);

//Eventos
console.log(1);
window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependen del HTML esten listo
    console.log(2) 
});
window.onload = function(){
    console.log(3);
};
document.addEventListener('DOMContentLoaded', function() { //Solo espera a que se descargue el HTML, perro no espera CSS o imagenes
    console.log(4);
})
console.log(5);
window.onscroll = function(){
    console.log('scrolling...');
}

//Seleccionar elementos y asociarles un evento.
// const btnEnviar = document.querySelector('.boton--primario'); //Realiza la carga del formulario pero evita que se actualice la pagina de regreso.
// btnEnviar.addEventListener('click', function(evento) { //Se usa para imagens y para videos no para formularios.
//     console.log(evento);    
//     evento.preventDefault();
//     //Validar un formulario.
//     console.log('Enviar formulacio');
// });
//Eventos de los imputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

// nombreInput.addEventListener('input', function(e) {
    //     console.log(e.target.value);  
// });

// emailInput.addEventListener('input', function(e) {
//     console.log(e.target.value);
// });
// mensajeInput.addEventListener('input', function(e) {
    //     console.log(e.target.value)
    // });

//El evento del submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //Validar este formulario
    const {nombre, email, mensaje} = datos;
    // console.log(nombre); //Hace que muestre en la consola toda la informacion escrita y tambien te dice si esta vacia.
    // console.log(email);
    // console.log(mensaje);
    if (nombre === '' || email === '' || mensaje === '') {  // los || se usa para decir si este o este funcionan no muestra el mensaje.
        mostrarAlerta('Todos los campos son obligatorios.', true); //El True es para la funcion del if else funcione.
        // console.log('el nombre y el email estan vacio');  //Para que te envie un mensaje cuando este vacia el nombre.
        return;  //Corta la ejecucion del codigo.
    }

    mostrarAlerta('Mensaje enviado correctamente')
});

    nombreInput.addEventListener('input', escribir);  //Mas resumido que lo de arriba
    emailInput.addEventListener('input', escribir);
    mensajeInput.addEventListener('input',escribir);

    function escribir(e){
    datos[e.target.id] = e.target.value;
    console.log(datos);
    //console.log(e.target.value);  //Se pone estos eventos para que se pueda ver que se esta escribiendo en tiempo real.
}

// function mostrarExito(exito) {   //Se usa para enviar el mensaje de correcto
//     const mExtio = document.createElement('P')
//     mExtio.textContent = exito;
//     mExtio.classList.add('correcto');

//     formulario.appendChild(mExtio);
//     setTimeout(() => {
//         mExtio.remove();
//     }, 2000);
// }
// function mostrarError(error) {   //se usa para enviar el mensaje de error
//     const merror = document.createElement('P')
//     merror.textContent = error;
//     merror.classList.add('error');

//     formulario.appendChild(merror);
//     setTimeout(() => {
//         merror.remove();
//     }, 2000);
// }

//Este codigo es para resumir todo lo de arrive en una funcion mas compacta.
function mostrarAlerta(mensaje, error = null) { //el error null es para que el if pueda saber si es verdade o falso. y si es nulo se puede aplicar el else.
    const alerta = document.createElement('P')
    alerta.textContent = mensaje;
    if(error) {
        alerta.classList.add('error');
    } 
    else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 2000);
}