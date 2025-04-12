const items = document.querySelectorAll('.countdown-item > h4');
const countDownEl = document.querySelector('.countdown');

// ! дата отсчета
let countdownDate = new Date(2027, 7, 8, 12, 0, 0).getTime();

function countTime() {
    // ! текущее время
    const now = new Date().getTime();

    // ! разница времени
    const distance = countdownDate - now;

    // ! переменные в миллисекундах
    const day = 24 * 60 * 60 * 1000;
    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;

    // ! подсчет времени
    let days = Math.floor(distance / day)
    let hours = Math.floor((distance % day) / hour)
    let minutes = Math.floor((distance % hour) / minute)
    let seconds = Math.floor((distance % minute) / 1000)

    const values = [days, hours, minutes, seconds];
    
    // ! добавление значений
    items.forEach(function (item, index) {
        item.textContent = (values[index])
    });

    if ( distance < 0) {
        clearInterval();
        countDownEl.innerHTML = "<h4 class='expired'>Время вышло</h4>"
    }
}

// ! обновление счетчика
let countdown = setInterval(countTime, 1000);

// ! инициализация текущего времени
countTime();