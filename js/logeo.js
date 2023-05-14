const nombre = document.getElementById('account');
const pass = document.getElementById('password');
const form = document.getElementById('form_logeo');
const error = document.getElementById('alerta');
var mensaje = '';
var entrar = true;

var validarNombre = function(e){
    if(nombre.value == 0){
        mensaje += 'ingrese nombre válido <br>';
        entrar =false;
        e.preventDefault();
    }
    console.log('formulario');
}

var validarPass = function(e){
    if(pass.value.length <1 || pass.value.length >10){
        mensaje += 'ingrese contraseña válida <br>';
        entrar = false;
        e.preventDefault();
    }
}

var validarTodo = function(e){
    validarNombre(e);
    validarPass(e);
    if(!entrar){
        error.innerHTML = mensaje;
        alert("Datos incorrectos");
    };
}

form.addEventListener("submit", validarTodo);