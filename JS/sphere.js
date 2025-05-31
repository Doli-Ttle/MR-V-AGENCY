import * as dat from "https://cdn.skypack.dev/dat.gui@0.7.9";
const gui = new dat.GUI();

const settings = {
  size: 80,
  thickness: 0.3,
  lineColor: '#ffffff',
  shineColor: '#00ff00'
}
const ball = document.querySelector('.ball');

gui.add(settings, 'size', 1, 100).name('Size').onChange(value => ball.style.setProperty('--size', value + 'vmin'));
gui.add(settings, 'thickness', 0, 3, .1).name('Line Thickness').onChange(value => ball.style.setProperty('--thickness', value + 'vmin'));
gui.addColor(settings, 'lineColor').name('Line Color').onChange(value => ball.style.setProperty('--lineColor', value));
gui.addColor(settings, 'shineColor').name('Shine Color').onChange(value => ball.style.setProperty('--shineColor', value));