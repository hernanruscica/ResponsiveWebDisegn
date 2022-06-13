const $d = document;
const $form = document.getElementById("register");
const $inputs = document.querySelectorAll("#register input");


console.log($form);

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const campos = {
    "user" : false,
    "name" : false,
    "password1": false,
    "password2": false,
    "email": false,
    "telephone": false
}

const validarFormulario = (e) => {
    
    switch (e.target.name){
        case "user" :
           validarCampo(expresiones["usuario"], e.target, e.target.name);
        break;
        case "name" :
            validarCampo(expresiones["nombre"], e.target, e.target.name);
        break;
        case "password1" :
            validarCampo(expresiones["password"], e.target, e.target.name);
            validarPassword2()
        break;
        case "password2" :
            validarPassword2()
        break;
        case "email" :
            validarCampo(expresiones["correo"], e.target, e.target.name);
        break;
        case "telephone" :
            validarCampo(expresiones["telefono"], e.target, e.target.name);
        break;      
    }
}

const validarCampo = (expresion, input, campo) => {    
    if(expresion.test(input.value)){
        $d.getElementById(`group-${campo}`).classList.remove("form-group-error");
        $d.getElementById(`group-${campo}`).classList.add("form-group-ok");
        $d.querySelector(`#group-${campo} i`).classList.remove("fa-times-circle");
        $d.querySelector(`#group-${campo} i`).classList.add("fa-check-circle");          
        $d.querySelector(`#group-${campo} .form-input-error`).classList.remove("form-input-error-active");
        campos[campo] = true;
    }
    else{
        $d.getElementById(`group-${campo}`).classList.add("form-group-error");
        $d.querySelector(`#group-${campo} i`).classList.add("fa-times-circle");
        $d.querySelector(`#group-${campo} .form-input-error`).classList.add("form-input-error-active");
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const $inputPassword01 = $d.getElementById("password1");
    const $inputPassword02 = $d.getElementById("password2");
    if ($inputPassword01.value === $inputPassword02.value){
        $d.getElementById("group-password2").classList.remove("form-group-error");
        $d.getElementById("group-password2").classList.add("form-group-ok");
        $d.querySelector("#group-password2 i").classList.remove("fa-times-circle");
        $d.querySelector("#group-password2 i").classList.add("fa-check-circle");          
        $d.querySelector("#group-password2 .form-input-error").classList.remove("form-input-error-active");
        campos['password2'] = true;
    }
    else{
        $d.getElementById("group-password2").classList.add("form-group-error");
        $d.querySelector("#group-password2 i").classList.add("fa-times-circle");
        $d.querySelector("#group-password2 .form-input-error").classList.add("form-input-error-active");
        campos['password2'] = false;
    }
}

$inputs.forEach((input) => {    
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

$form.addEventListener('submit', (e) => {
    e.preventDefault();

    const $terminos = $d.getElementById("terms");                
    if (campos.user && campos.name && 
        campos.password1 && campos.password2 && 
        campos.email && campos.telephone
        && $terminos.checked){
            $form.reset();            
            $d.getElementById("form-msg-ok").classList.add("form-msg-ok-active");            
            setTimeout(() => {
                $d.getElementById("form-msg-ok").classList.remove("form-msg-ok-active");     
            }, 5000);

        $d.querySelectorAll(".form-group-ok i").forEach((icon) => {
            icon.classList.remove("fa-check-circle");
        });
        $d.getElementById("form-msg").classList.remove("form-msg-active");
    }
    else
        $d.getElementById("form-msg").classList.add("form-msg-active")
        setTimeout(() => {
        $d.getElementById("form-msg").classList.remove("form-msg-active")
        }, 5000);
});

