const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        clickable: true,
        renderCustom: function (swiper, current, total) {
            let customPagination = '';

            for (let i = 1; i <= total; i++) {
                let isActive = i === current ? 'active' : '';
                customPagination += '<span class="swiper-pagination-custom ' + isActive + '">' + i + '</span>';
            }

            return customPagination;
        },
    },
});

let paginationElements = document.querySelectorAll('span.swiper-pagination-custom');
paginationElements.forEach(function (element, index) {
    element.addEventListener('click', function () {
        swiper.slideTo(index); // Navigate to the corresponding slide
    });
});
console.log(paginationElements);


let newPagination = document.querySelector('.pagination');
console.log(newPagination);

let currentP = 1;
let customPagination = '';

for (let i = 1; i <= 4; i++) {
    let isActive = i === swiper.activeIndex + 1 ? 'active' : '';
    customPagination += '<span class="pagination-custom ' + isActive + '">' + i + '</span>';
}

let imgNames = {
    0 : 'Вид під кутом',
    1 : 'Вид з боку',
    2 : 'Готовий до завантаження',
    3 : 'З рібоном та етикеткою',
}

newPagination.innerHTML += customPagination;

let newPaginationElements = document.querySelectorAll('.pagination-custom');
console.log(newPaginationElements);

newPaginationElements.forEach(function (element, index) {

    element.dataset.name = imgNames[index];
    index === 0 ? element.className = 'pagination-custom active' : element.className = 'pagination-custom';

    element.addEventListener('click', function (e) {
        clearActive();
        element.className = 'pagination-custom active';
        swiper.slideTo(index); // Navigate to the corresponding slide
    
    });

});


swiper.on('slideChange', function() {
    clearActive();
    newPaginationElements[swiper.activeIndex].className = 'pagination-custom active';
    console.log(swiper.activeIndex);
})

function clearActive() {
    newPaginationElements.forEach(function (element, index) {
        element.className = 'pagination-custom';
    });
}