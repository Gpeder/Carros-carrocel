let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let itens = container.querySelectorAll('.list .item');
let indicators = document.querySelector('.indicators');
let dots = indicators.querySelectorAll('ul li');

let active = 0;
let firstPosition = 0;
let lastPosition = itens.length - 1;

prevButton.addEventListener('click', () => {
    let itemOld = container.querySelector('.list .active');
    itemOld.classList.remove('active');

    active = active - 1 < firstPosition ? lastPosition : active - 1; 
    itens[active].classList.add('active');

    updateIndicators();
});

nextButton.addEventListener('click', () => {
    let itemOld = container.querySelector('.list .active');
    itemOld.classList.remove('active');

    active = active + 1 > lastPosition ? firstPosition : active + 1; 
    itens[active].classList.add('active');

    updateIndicators();
});

function updateIndicators() {
    // Atualizar botão ativo
    let dotsOld = indicators.querySelector('ul li.button-active');
    if (dotsOld) dotsOld.classList.remove('button-active');
    dots[active].classList.add('button-active');

    // Atualizar número
    const numberElement = indicators.querySelector('.number');
    if (numberElement) {
        numberElement.innerHTML = String(active + 1).padStart(2, '0');
    }
}
