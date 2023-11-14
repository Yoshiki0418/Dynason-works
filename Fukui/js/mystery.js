const range = document.getElementById('range');
noUiSlider.create(range, {

    range: {
        'min': 0,
        'max': 10000
    },
    step: 1000,
    start: [2, 4],
    connect: true,
    behaviour: 'tap-drag',
    pips: {
        mode: 'steps',
        stepped: true,
        density: 10
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const rangeItems = document.querySelectorAll('.range_slider');
    for(let i = 0; i < rangeItems.length; i++) {
        const rangeItem = rangeItems[i];
        const rangeItemInput = rangeItem.querySelector('input[type="range"]');
        const min = parseInt(rangeItemInput.getAttribute('min'));
        rangeItem.querySelector('.range_slider_min').innerText = min;
        const max = parseInt(rangeItemInput.getAttribute('max'));
        rangeItem.querySelector('.range_slider_max').innerText = max;
        const rangeItemCurrent = rangeItem.querySelector('.range_slider_input_current span');
        matchCurrent();

        rangeItemInput.addEventListener('input', function() {
            matchCurrent();
        }, false);

        function matchCurrent() {
            const current = parseInt(rangeItemInput.value);
            const ratio = ((current - min) / (max - min)) * 100;
            rangeItemCurrent.innerText = current;
            rangeItemCurrent.style.left = ratio + '%';
        }
    }
}, false);

