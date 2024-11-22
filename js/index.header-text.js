const h1 = document.querySelector('.header__title');
// const titles = document.querySelectorAll('???');

const greetings = [
    'ПРИВІТ!',
    'ВІТАЮ!',
    'HELLO',
    'GREETINGS'
];

const getRandomEl = arr => arr[Math.floor(Math.random() * arr.length)];

h1.innerText = getRandomEl(greetings);

