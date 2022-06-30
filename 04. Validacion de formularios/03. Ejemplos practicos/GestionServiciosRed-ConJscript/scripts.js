console.log("desde el js")

$d = document;
$form = $d.getElementById("form");
$inputs = $d.querySelectorAll(".input_item input")

//console.log($form);
 
const campos = {
  "apellido" : false,
  "nombres" : false,
  "numero_documento" : false,
  "domicilio": false,
  "piso" : false,
  "telefono" : false
}

const validaciones = {
  "apellido" : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  "nombres" : false,
  "numero_documento" : false,
  "domicilio": false,
  "piso" : false,
  "telefono" : false  
}

const validarCampo = (e) => {  
    //console.log(`Valido el input : ${e.target.name}`);  
    switch (e.target.name){
      case "apellido":
        let valor = e.target.value;
        let expReg = validaciones[e.target.name];
        let alertaAlUsuario = e.target.title;
        let resultadoValidacion = false;
        resultadoValidacion = expReg.test(valor)

        console.clear();

        if (resultadoValidacion) {
          console.log("validado!");
        } else {
          console.log("NO validado");
        }
        
        console.log("Validando el apellido con ", expReg);   
        console.log("Mensaje al usuario: ", alertaAlUsuario);   
        console.log("valor: ", valor);
        console.log(expReg);
        console.log("resultado validacion: ", resultadoValidacion);
        
      break;  
      case "nombres":
        console.log("Validando los nombres con ", e.target.pattern);
        console.log("Mensaje al usuario: ", e.target.title);        
      break; 
      case "numero_documento":
        console.log("Validando el N° de documento con ", e.target.pattern);
        console.log("Mensaje al usuario: ", e.target.title);        
      break; 
      case "domicilio":
        console.log("Validando el domicilio con ", e.target.pattern);
        console.log("Mensaje al usuario: ", e.target.title);        
      break; 
      case "piso":
        console.log("Validando el piso con ", e.target.pattern);     
        console.log("Mensaje al usuario: ", e.target.title);   
      break; 
      case "telefono":
        console.log("Validando el telefono con ", e.target.pattern);        
        console.log("Mensaje al usuario: ", e.target.title);
      break;
    }    
}

$inputs.forEach(element => {
  //console.log(element.id)    
  element.addEventListener('keyup', (e) => validarCampo(e));
  //element.addEventListener('blur', (e) => validarCampo(e));
});

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(`Si estan todos los campos correctos, envio formulario id = ${e.target.id}`);
}); 