console.log("desde el js")

$d = document;
$form = $d.getElementById("form");
$inputs = $d.querySelectorAll(".input_item input")

//console.log($form);


const validarCampo = (e) => {  
    console.log(`Valido el input${e.target.id}`);  
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