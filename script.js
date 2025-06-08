

function changeColor(){

  let red = Math.round((Math.random() * 255));
  let green = Math.round((Math.random() * 255));
  let blue = Math.round((Math.random() * 255));
  let rgbColor = `rgb(${red},${green},${blue})`;

  let area = document.querySelector('body');
  area.style.backgroundColor = rgbColor;
  
}
