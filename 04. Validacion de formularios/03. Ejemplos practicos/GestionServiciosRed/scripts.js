const $red_color_slider = document.querySelector('#red_value');
const $output = document.querySelector('.red_value');

$output.textContent = $red_color_slider.value;

$red_color_slider.addEventListener('input', function() {
  $output.textContent = $red_color_slider.value;
});