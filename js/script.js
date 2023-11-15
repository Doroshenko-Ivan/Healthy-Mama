

const buttonPregnant = document.getElementById('pregnant-woman').onclick = function () {
     const image = document.querySelector('.image');
     document.querySelector('#pregnant-woman').style.opacity = '1.0';
     document.querySelector('#breast-feeding').style.opacity = '0.5';
     document.querySelector('#safe-treats').style.opacity = '0.5';
     image.style.width = 'calc(var(--index) * 15.8333);';
     image.style.height = 'calc(var(--index) * 21.4)';
     image.style.backgroundImage = 'url(/img/Pregnant1.png)';
     image.style.backgroundSize = 'calc(var(--index) * 15.8333) calc(var(--index) * 21.4)';
     // image.style.top = '100px'
     // image.style.right = '100px'


};


const buttonBreastFeeding = document.getElementById('breast-feeding').onclick = function () {
     document.querySelector('#breast-feeding').style.opacity = '1.0';
     document.querySelector('#safe-treats').style.opacity = '0.5';
     document.querySelector('#pregnant-woman').style.opacity = '0.5';
     document.querySelector('.image').style.width = 'calc(var(--index) * 15.8333)';
     document.querySelector('.image').style.height = 'calc(var(--index) * 23.9666)';
     document.querySelector('.image').style.backgroundImage = 'url(/img/BreastFeeding1.png)';
     document.querySelector('.image').style.backgroundSize = 'calc(var(--index) * 14.8333) calc(var(--index) * 23.9666)';

};
const buttonSafeTreats = document.getElementById('safe-treats').onclick = function () {
     document.querySelector('#safe-treats').style.opacity = '1.0';
     document.querySelector('#pregnant-woman').style.opacity = '0.5';
     document.querySelector('#breast-feeding').style.opacity = '0.5';
     document.querySelector('.image').style.width = 'calc(var(--index) * 15.6666)';
     document.querySelector('.image').style.height = 'calc(var(--index) * 24.3)';
     document.querySelector('.image').style.backgroundImage = 'url(/img/SafeTreats.png)';
     document.querySelector('.image').style.backgroundSize = 'calc(var(--index) * 15.6666) calc(var(--index) * 24.3)';

};




new Swiper('.image-slider__one', {
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
     },
     // Включение\отключение
     // перетаскивания на ПК
     simulateTouch: true,
     //  Чувствиьелбность свайпа
     touchRatio: 1,
     // Угол срабатывания свайпа
     touchAngle: 45,
     // // Курсор перетаскивания
     // grabCursor: true,

     // // Переключение при клике на слайд
     // slideToClickedSlide: true,

     // // Навигация по хешу
     // hasNavigation: {
     //      // Отслеживать состояние
     //      watchState: true,
     // },
          

     
     // Управление клавиатурой
     keyboard: {
          // Включить\выключить
          enabled: true,
          // Включить\выключить
          // только когда слайдер
          //в пределах вбюпорта 
          onlyInViewport: true,
          // Включить\выключить
          // управление клавишами
          // pageUp, pageDown
          pageUpDown: true,
     },

     // // Управление колесом мыши
     // mousewheel: {
     //      // Чувствительность колеса мыши
     //      sensitivity: 1,
     //      // Класс на котором будет
     //      // срабатывать прокрутка мышью
     //      eventsTarget: '.image-slider',
          
     // },

     // // Автовысота
     // avtoHeight: 'auto',

     // Кол-во слайдов показа
     slidesPerView: 1,

     // Отключение функционала
     // если слайдов меньше чем нужно
     watchOverflow: true,

     // // Отступ медну слайдами
     // spaceBetween: 0,

     // Кол-во пролистываемых слайдов
     slidesPerGroup: 1,

     // Активный слайд по центру
     centeredSlides: true,

     // Стартовый слайд
     initialSlide: 2,

     // // Мультирядность
     // slidesPerColumn: 1,

     // Бесконечный слайдер
     loop: true,
     
     // Кол-во дублируемых слайдов
     loopedSlides: 2,
     
     // //Свободный режим
     // freeMode: true,

     // // Автопрокрутка 
     // autoplay: {
     //      // Пауза между прокруткой
     //      delay: 1000,    
     //      // Закончить на последнем слайде
     //      stopOnLastSlide: false,
     //      // Отключить после ручного переключения
     //      disableOnInteraction: true,
     // },

     // Скорость 
     speed: 800,

     // // Вертикальный слайдер
     // direction: 'vertical',

     // // Эфеты переключения слайдов 
     // // Листание
     // effect: 'slide',
     
     // // Эфеты переключения слайдов 
     // // Смена прозрачности
     // effect: 'fade', 

     // // Дополнение к fade 
     // fadeEffect: {
     //      // Паралельная
     //      // смена прозрачности
     //      crossFade: true,
     // }
     
     // // Эфеты переключения слайдов 
     // // Переворот
     // effect: 'flip',
     
     // // Дополнение к flip 
     // FlipEffect: {
     //      //Тень
     //      slideShadow: true,    
     //      // Показ только активного слайда
     //      limitRotation: true,
     // },

     // // Эфеты переключения слайдов
     // // Куб
     // effect: 'cube',

     // // Дополнение к cube
     // cubeEffect: {
     //      // Натсройки тени
     //      slideShadow: true,
     //      shadow: true,
     //      shadowOffset: 20,
     //      shadowScale: 0.94,
     // },

     // // Эфеты переключения слайдов
     // // Эфект потока
     // effect: 'coverflow',

     // // Дополнение к coverflow
     // coverflowEffect: {
     //      // Угол
     //      rotate: 20,
     //      // Наложение
     //      stretch: 50,
     //      // Тень
     //      slideShadow: true,
     // },
});

// Инициализация свайпера
new Swiper('.image-slider', {
//  Навигация, стрелки
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
     },
// Буллеты, текущая картинка, прогрессбар
     pagination: {
          // el: ".swiper-pagination",
          // // Буллеты
          // type: 'bullets',
          // clickable: true,
          // //Динамические буллеты
          // dynamicBullets: true,
          // // Кастомные буллеты  
          // renderByllet: function (index, className) {
          //      return '<span class="' + className + '">' + (index + 1) + '</span>';
          // },
          // // Фракция
          // type: 'fraction',

          // // Прогрессбар
          // typr:'progressbar',

     },
     
     // scrollbar: {
     //      el: '.swiper-scrollbar',
     //      // Возможность перетаскивать скролл
     //      draggable: true,


     // },

     // Включение\отключение
     // перетаскивания на ПК
     simulateTouch: true,
     //  Чувствиьелбность свайпа
     touchRatio: 1,
     // Угол срабатывания свайпа
     touchAngle: 45,
     // // Курсор перетаскивания
     // grabCursor: true,

     // Переключение при клике на слайд
     slideToClickedSlide: true,

     // Навигация по хешу
     hasNavigation: {
          // Отслеживать состояние
          watchState: true,
     },
          

     
     // Управление клавиатурой
     keyboard: {
          // Включить\выключить
          enabled: true,
          // Включить\выключить
          // только когда слайдер
          //в пределах вбюпорта 
          onlyInViewport: true,
          // Включить\выключить
          // управление клавишами
          // pageUp, pageDown
          pageUpDown: true,
     },

     // Управление колесом мыши
     mousewheel: {
          // Чувствительность колеса мыши
          sensitivity: 1,
          // Класс на котором будет
          // срабатывать прокрутка мышью
          eventsTarget: '.image-slider',
          
     },

     // // Автовысота
     // avtoHeight: 'auto',

     // Кол-во слайдов показа
     slidesPerView: 3,

     // Отключение функционала
     // если слайдов меньше чем нужно
     watchOverflow: true,

     // // Отступ медну слайдами
     // spaceBetween: 0,

     // Кол-во пролистываемых слайдов
     slidesPerGroup: 1,

     // Активный слайд по центру
     centeredSlides: true,

     // Стартовый слайд
     initialSlide: 1,

     // // Мультирядность
     // slidesPerColumn: 1,

     // Бесконечный слайдер
     loop: true,
     
     // Кол-во дублируемых слайдов
     loopedSlides: 2,
     
     // //Свободный режим
     // freeMode: true,

     // Автопрокрутка 
     // autoplay: {
     //      // Пауза между прокруткой
     //      delay: 1000,    
     //      // Закончить на последнем слайде
     //      stopOnLastSlide: false,
     //      // Отключить после ручного переключения
     //      disableOnInteraction: true,
     // },

     // Скорость 
     speed: 800,

     // // Вертикальный слайдер
     // direction: 'vertical',

     // // Эфеты переключения слайдов 
     // // Листание
     // effect: 'slide',
     
     // // Эфеты переключения слайдов 
     // // Смена прозрачности
     // effect: 'fade', 

     // // Дополнение к fade 
     // fadeEffect: {
     //      // Паралельная
     //      // смена прозрачности
     //      crossFade: true,
     // }
     
     // // Эфеты переключения слайдов 
     // // Переворот
     // effect: 'flip',
     
     // // Дополнение к flip 
     // FlipEffect: {
     //      //Тень
     //      slideShadow: true,    
     //      // Показ только активного слайда
     //      limitRotation: true,
     // },

     // // Эфеты переключения слайдов
     // // Куб
     // effect: 'cube',

     // // Дополнение к cube
     // cubeEffect: {
     //      // Натсройки тени
     //      slideShadow: true,
     //      shadow: true,
     //      shadowOffset: 20,
     //      shadowScale: 0.94,
     // },

     // // Эфеты переключения слайдов
     // // Эфект потока
     // effect: 'coverflow',

     // // Дополнение к coverflow
     // coverflowEffect: {
     //      // Угол
     //      rotate: 20,
     //      // Наложение
     //      stretch: 50,
     //      // Тень
     //      slideShadow: true,
     // },

     // Брейк поинты (адаптив)
     // Ширина экрана
     breakpoints: {
          320: {
               slidesPerView: 1,
          },
          
          426: {
               slidesPerView: 1.5,
          },
          
          992: {
               slidesPerView: 2.5,
          },

          1440: {
               slidesPerView: 2.5,
          }
          
     },

});



