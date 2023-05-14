const form = document.getElementById('formulario_creacion');
const nombre = document.getElementById('nombre');
const sexo = document.getElementsByName('sexo');
const fecha = document.getElementById('fecha');
const account = document.getElementById('account');
const pass = document.getElementById('password');
const terminos = document.getElementById('checkbox');
const mail = document.getElementById('mail');
const error = document.getElementById('mensajeError');
var alerta = ""
var entrar = true;

var validarNombre = function(e){
    if(nombre.value == 0){
        alerta += 'ingresá nombre válido <br>'
        entrar = false;
        
    }
};

var validarFecha = function(e){
   if(fecha.value == 0){
    alerta += 'ingresá fecha válida <br>';
   }
};

var validarAccount = function(e){
    if(account.value == 0){
        alerta += 'ingresá usuario válido <br>';
        entrar = false;
        
    }
};

var validarMail = function(e){
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!regexEmail.test(mail.value)){
        alerta += 'ingresá mail válido <br>';
        entrar = false;
        
    }
};

var validarPass = function(e){
    if(pass.value.length >10 || pass.value.length <1){
        entrar = false;
        alerta += 'contraseña no válida <br>';
    }
};


var validarTerminos = function(e){
    if(form.terminos.checked == false){
        alerta += 'debes aceptar términos y condiciones <br>';
        entrar = false;
    }
}

var validarFormulario = function(e){
    validarNombre(e);
    validarFecha(e);
    validarAccount(e);
    validarMail(e);
    validarPass(e);
    validarTerminos(e);
    e.preventDefault();
    if(!entrar){
        alert("Datos incorrectos");
        mensajeError.innerHTML = alerta;
    };
};

form.addEventListener('submit', validarFormulario);