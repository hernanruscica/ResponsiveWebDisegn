console.log("desde el js")

$d = document;
$form = $d.getElementById("form");

console.log($form);

$form.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(`click en ${e.target.id}`);
});