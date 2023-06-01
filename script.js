import { Column } from "./column.js";

const canvas = document.getElementById('canvas'); // get canvas
const context = canvas.getContext('2d'); // get context

const FONT_SIZE = 16; // font size
let columns = []; // columns array
let columnsCount = 0; // columns count

initCanvasSize(); // initialize canvas size
initColumns(); // initialize columns

animate(); // animate

function initCanvasSize() { // initialize canvas size
  canvas.width = document.documentElement.clientWidth; // set canvas width
  canvas.height = document.documentElement.clientHeight; // set canvas height
}

function initColumns() { // initialize columns
  columnsCount = canvas.width / FONT_SIZE; // set columns count
  columns = []; // reset columns array
  for (let i = 0; i < columnsCount; i++) { // loop through columns count
    columns.push(new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context)); // push new column to columns array
  }
}

function animate() {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)'; // set background color
  context.fillRect(0, 0, canvas.width, canvas.height); // fill rectangle

  // set symbols color
  context.fillStyle = 'green'; // set color
  context.font = `bold ${FONT_SIZE}px monospace`; // set font
  columns.forEach(column => column.drawSymbol()); // цикл через столбцы и рисовать символы

  setTimeout(() => requestAnimationFrame(animate), 50); // set timeout and request animation frame
}

window.addEventListener('resize', () => { // window resize event
  initCanvasSize(); // initialize canvas size
  initColumns(); // initialize columns
  context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
});

// audio

// Создаем элемент аудио
var audio = new Audio('./assets/audio/sound.mp3'); // Путь к звуку 'audio.mp3

// Устанавливаем атрибуты для аудио
audio.loop = true; // Устанавливаем зацикливание музыки
audio.volume = 0.5; // Устанавливаем громкость (от 0 до 1)

// Вставляем элемент аудио на страницу
document.body.appendChild(audio);

// Создаем кнопку для управления музыкой
const audio_button = document.createElement('button'); // Создаем кнопку
audio_button.innerHTML = 'Play music'; // Устанавливаем название кнопки
audio_button.style.position = 'absolute'; // Устанавливаем абсолютное позиционирование
audio_button.style.top = '10px'; // Устанавливаем отступ сверху
audio_button.style.left = '10px'; // Устанавливаем отступ слева
audio_button.style.zIndex = '100'; // Устанавливаем z-index
audio_button.style.padding = '10px'; // Устанавливаем отступ внутри кнопки
audio_button.style.borderRadius = '5px'; // Устанавливаем радиус скругления уголков
audio_button.style.border = 'none'; // Устанавливаем границу
audio_button.style.outline = 'none'; // Убираем контур
audio_button.style.color = 'green'; // Устанавливаем цвет текста
audio_button.onclick = function() {
  if (audio.paused) { // Проверяем, если аудио на паузе
    audio.play(); // Запускаем
    audio_button.innerHTML = 'Pause music'; // Меняем название кнопки
  } else { // Иначе
    audio.pause(); // Ставим на паузу
    audio_button.innerHTML = 'Play music'; // Меняем название кнопки
  }
}
// Вставляем кнопку на страницу
document.body.appendChild(audio_button);

