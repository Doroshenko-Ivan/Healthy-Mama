

// const answer = 'Вы приняты';
// const answer2 = 'Вы нам не подходите';

// const variety = {
//      age:'18',
//      sex: ['male', 'female'],
//      play: 'computer',
//      skills: 'frontend',
// }

// const about = {
//      me: {
//           name: 'Matthew',
//           age: '18',
//           sex: 'male',
//      },

//      hobbys: {
//           play: ['computer', 'footbal', 'chess', 'tennis'],
//      },

//      skills: ['frontend', 'backend'],
// }

// if (variety.age <= about.me.age
//      && variety.sex[0 && 1] == about.me.sex
//      && variety.play == about.hobbys.play[0 && 1 && 2 && 3]
//      && variety.skills == about.skills[0 && 1]
// ) {
//           console.log(answer);
// }
// else {
//      console.log(answer2);
     
// }

// const cart = [{
//      name: 'Арбуз',
//      price: 100,
//      count: 1,
//      },
//      {
//      name: 'Хлеб',
//      price: 20,
//      count: 2,
//      },
//      {
//      name: 'Молоко',
//      price: 50,
//      count: 1,
//      },
// ];

// let finalPrice = 0;

// let price = [];
// // let calcMoney = 11;
// // calc(cart);
// function calc(arr) {
//      // var calcMoney = 0;
//     for (let i = 0; i < arr.length; i++) {
//           console.log('good');
//           // calcMoney = arr[i].price * arr[i].count;
//           // price[i].push(calcMoney);
//           // return calcMoney;
//      }
    
//      // return calcMoney;
// }

 
// calc(cart);
// good3(cart);
// let good3 = function (arr) {
//      for (let i = 0; i < arr.length; i++) {
//           console.log('good');
          
//      }

// }

// let skdjbd = (a, b) => {
//      return a + b;
// };
// console.log(skdjbd(1, 2));

// let dfgg = условие ? "Верно" : "Ложь";

// if (условие) {

//      return "Верно";
// } else {
     
//      return "Ложь"
// }




// console.log(dfgg);


// good3(cart);
// function name(number1, number2, gfbdmgnb, dfghbfg) {
//      let calcNummber = number1 + number2 + gfbdmgnb + dfghbfg;
//      return calcNummber;
// }

// console.log(name(1,2, 2, 5));



const buttonPregnant = document.getElementById('pregnant-woman').onclick = function () {
     document.querySelector('#pregnant-woman').style.opacity = '1.0';
     document.querySelector('#breast-feeding').style.opacity = '0.5';
     document.querySelector('#safe-treats').style.opacity = '0.5';
     document.querySelector('.image').style.width = 'calc(var(--px-400 * 1.1875)';
     document.querySelector('.image').style.height = 'calc(var(--px-400-1920) * 1.605)';
     document.querySelector('.image').style.backgroundImage = 'url(/img/Pregnant1.png)';
     document.querySelector('.image').style.backgroundSize = 'calc(var(--px-400-1920) * 1.1875) calc(var(--px-400-1920) * 1.605)';

};
const buttonBreastFeeding = document.getElementById('breast-feeding').onclick = function () {
     document.querySelector('#breast-feeding').style.opacity = '1.0';
     document.querySelector('#safe-treats').style.opacity = '0.5';
     document.querySelector('#pregnant-woman').style.opacity = '0.5';
     document.querySelector('.image').style.width = '449px';
     document.querySelector('.image').style.height = '724px';
     document.querySelector('.image').style.backgroundImage = 'url(/img/BreastFeeding.png)';
     document.querySelector('.image').style.backgroundSize = '449px 724px';

};
const buttonSafeTreats = document.getElementById('safe-treats').onclick = function () {
     document.querySelector('#safe-treats').style.opacity = '1.0';
     document.querySelector('#pregnant-woman').style.opacity = '0.5';
     document.querySelector('#breast-feeding').style.opacity = '0.5';
     document.querySelector('.image').style.width = '470px';
     document.querySelector('.image').style.height = '729px';
     document.querySelector('.image').style.backgroundImage = 'url(/img/SafeTreats.png)';
     document.querySelector('.image').style.backgroundSize = '470px 729px';
     document.querySelector('.image').style.top = '470px';

};



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
          
          425: {
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

// new Swiper('.image-slider-first', {
// //  Навигация, стрелки
//      navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev'
//      },
// // Буллеты, текущая картинка, прогрессбар
//      pagination: {
//           // el: ".swiper-pagination",
//           // // Буллеты
//           // type: 'bullets',
//           // clickable: true,
//           // //Динамические буллеты
//           // dynamicBullets: true,
//           // // Кастомные буллеты  
//           // renderByllet: function (index, className) {
//           //      return '<span class="' + className + '">' + (index + 1) + '</span>';
//           // },
//           // // Фракция
//           // type: 'fraction',

//           // // Прогрессбар
//           // typr:'progressbar',

//      },
     
//      // scrollbar: {
//      //      el: '.swiper-scrollbar',
//      //      // Возможность перетаскивать скролл
//      //      draggable: true,


//      // },

//      // Включение\отключение
//      // перетаскивания на ПК
//      simulateTouch: true,
//      //  Чувствиьелбность свайпа
//      touchRatio: 1,
//      // Угол срабатывания свайпа
//      touchAngle: 45,
//      // // Курсор перетаскивания
//      // grabCursor: true,

//      // Переключение при клике на слайд
//      slideToClickedSlide: true,

//      // Навигация по хешу
//      hasNavigation: {
//           // Отслеживать состояние
//           watchState: true,
//      },
          

     
//      // Управление клавиатурой
//      keyboard: {
//           // Включить\выключить
//           enabled: true,
//           // Включить\выключить
//           // только когда слайдер
//           //в пределах вбюпорта 
//           onlyInViewport: true,
//           // Включить\выключить
//           // управление клавишами
//           // pageUp, pageDown
//           pageUpDown: true,
//      },

//      // Управление колесом мыши
//      mousewheel: {
//           // Чувствительность колеса мыши
//           sensitivity: 1,
//           // Класс на котором будет
//           // срабатывать прокрутка мышью
//           eventsTarget: '.image-slider',
          
//      },

//      // // Автовысота
//      // avtoHeight: 'auto',

//      // Кол-во слайдов показа
//      slidesPerView: 3,

//      // Отключение функционала
//      // если слайдов меньше чем нужно
//      watchOverflow: true,

//      // // Отступ медну слайдами
//      // spaceBetween: 0,

//      // Кол-во пролистываемых слайдов
//      slidesPerGroup: 1,

//      // Активный слайд по центру
//      centeredSlides: true,

//      // Стартовый слайд
//      initialSlide: 1,

//      // // Мультирядность
//      // slidesPerColumn: 1,

//      // Бесконечный слайдер
//      loop: true,
     
//      // Кол-во дублируемых слайдов
//      loopedSlides: 2,
     
//      // //Свободный режим
//      // freeMode: true,

//      // Автопрокрутка 
//      // autoplay: {
//      //      // Пауза между прокруткой
//      //      delay: 1000,    
//      //      // Закончить на последнем слайде
//      //      stopOnLastSlide: false,
//      //      // Отключить после ручного переключения
//      //      disableOnInteraction: true,
//      // },

//      // Скорость 
//      speed: 800,

//      // // Вертикальный слайдер
//      // direction: 'vertical',

//      // // Эфеты переключения слайдов 
//      // // Листание
//      // effect: 'slide',
     
//      // // Эфеты переключения слайдов 
//      // // Смена прозрачности
//      // effect: 'fade', 

//      // // Дополнение к fade 
//      // fadeEffect: {
//      //      // Паралельная
//      //      // смена прозрачности
//      //      crossFade: true,
//      // }
     
//      // // Эфеты переключения слайдов 
//      // // Переворот
//      // effect: 'flip',
     
//      // // Дополнение к flip 
//      // FlipEffect: {
//      //      //Тень
//      //      slideShadow: true,    
//      //      // Показ только активного слайда
//      //      limitRotation: true,
//      // },

//      // // Эфеты переключения слайдов
//      // // Куб
//      // effect: 'cube',

//      // // Дополнение к cube
//      // cubeEffect: {
//      //      // Натсройки тени
//      //      slideShadow: true,
//      //      shadow: true,
//      //      shadowOffset: 20,
//      //      shadowScale: 0.94,
//      // },

//      // // Эфеты переключения слайдов
//      // // Эфект потока
//      // effect: 'coverflow',

//      // // Дополнение к coverflow
//      // coverflowEffect: {
//      //      // Угол
//      //      rotate: 20,
//      //      // Наложение
//      //      stretch: 50,
//      //      // Тень
//      //      slideShadow: true,
//      // },

//      // Брейк поинты (адаптив)
//      // Ширина экрана
//      breakpoints: {
//           320: {
//                slidesPerView: 1,
//           },
          
//           425: {
//                slidesPerView: 1.5,
//           },
          
//           992: {
//                slidesPerView: 2.5,
//           },

//           1440: {
//                slidesPerView: 2.5,
//           }
          
//      },

// });

