
let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    if (hrs == 0) 
      hrs = 24;
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
  
    let time = `${hrs}:${mins}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
  };
  
  clock();

  const startOff = document.querySelector('#start-on-js')
  const btnStart = document.querySelector('#btn-start-js')

  

  btnStart.addEventListener('click', function(){

    startOff.classList.toggle('start-off')
    
  });

  // Изменение темы
  const BtnNight = document.querySelector('#btn-night-js')
  const circle = document.querySelector('#circle-js')
  const background = document.querySelector('#background-js')
  const FrameTextInvert = document.querySelector('.frame-text-eazy')
  const FrameTextInvert2 = document.querySelector('.frame-text-eazy2')
  const FrameTextInvert3 = document.querySelector('.frame-text-eazy3')
  const FrameTextInvert4 = document.querySelector('.frame-text-eazy4')

  const NavBtnInvert1 = document.querySelector('.nav-btn-invert')
  const NavBtnInvert2 = document.querySelector('.nav-btn-invert2')
  const NavBtnInvert3 = document.querySelector('.nav-btn-invert3')
  const NavBtnInvert4 = document.querySelector('.nav-btn-invert4')
  const NavBtnInvert5 = document.querySelector('.nav-btn-invert5')

  NavBtnInvert1.classList.remove('nav-btn-invert')
  NavBtnInvert2.classList.remove('nav-btn-invert2')
  NavBtnInvert3.classList.remove('nav-btn-invert3')
  NavBtnInvert4.classList.remove('nav-btn-invert4')
  NavBtnInvert5.classList.remove('nav-btn-invert5')

  FrameTextInvert.classList.remove('frame-text-eazy')
  FrameTextInvert2.classList.remove('frame-text-eazy2')
  FrameTextInvert3.classList.remove('frame-text-eazy3')
  FrameTextInvert4.classList.remove('frame-text-eazy4')

  circle.classList.remove('circle-nights')
  background.classList.remove('background-night')

  BtnNight.addEventListener('click', function(){

    circle.classList.toggle('circle-nights')
    circle.classList.toggle('circle-day')
    background.classList.toggle('background-night')
    background.classList.toggle('background-day')
    

  });

  function night() {} window.onload = function() { night(); }
  
  setTimeout(function() {

    night()

  }, 150); 

  
  function night() {
    let fpkblack = document.querySelectorAll('.FPK');
    let answerInput = document.querySelectorAll('#answerInput');

    FrameTextInvert.classList.toggle('frame-text-eazy')
    FrameTextInvert2.classList.toggle('frame-text-eazy2')
    FrameTextInvert3.classList.toggle('frame-text-eazy3')
    FrameTextInvert4.classList.toggle('frame-text-eazy4')

    NavBtnInvert1.classList.toggle('nav-btn-invert')
    NavBtnInvert2.classList.toggle('nav-btn-invert2')
    NavBtnInvert3.classList.toggle('nav-btn-invert3')
    NavBtnInvert4.classList.toggle('nav-btn-invert4')
    NavBtnInvert5.classList.toggle('nav-btn-invert5')


    // Получаем все элементы с классом 'oge'
    let elements = document.querySelectorAll('.text-img4-oge');

    // Проходим по каждому элементу и меняем его стиль
    elements.forEach(function(element) {
        if (element.style.color === 'black' || element.style.color === 'white') {
            element.style.color = 'black'; // Меняем текст на белый
        } else {
            element.style.color = 'white'; // Меняем текст на черный
        }
    });
    // Проходим по каждому элементу и меняем его стиль
    fpkblack.forEach((element) => {
        if (
            element.style.backgroundColor === "" ||
            element.style.backgroundColor === "white"
        ) {
            element.style.backgroundColor = "rgb(24, 22, 22)"; // Меняем фон на черный
            element.style.color = "white"; // Меняем текст на белый
        } else {
            element.style.backgroundColor = "white"; // Меняем фон на белый
            element.style.color = "rgb(24, 22, 22)"; // Меняем текст на черный
        }
    });

    answerInput.forEach((element) => {
        if (
            element.style.backgroundColor === "" ||
            element.style.backgroundColor === "white"
        ) {
            element.style.backgroundColor = "rgb(24, 22, 22)"; // Меняем фон на черный
            element.style.color = "white"; // Меняем текст на белый
        } else {
            element.style.backgroundColor = "white"; // Меняем фон на белый
            element.style.color = "rgb(24, 22, 22)"; // Меняем текст на черный
        }
    });

// Находим все элементы с классом ".task-img"
const images = document.querySelectorAll('.task-img');

images.forEach(image => {
    // Проверяем наличие фильтра invert
    if (image.style.filter.includes('invert')) {
        image.style.filter = 'blur(4px)'; // Оставляем только размытие
    } else {
        image.style.filter = 'invert(91.5%) blur(4px)'; // Добавляем инверсию и сохраняем размытие
    }
});



    const startBtn = document.querySelector(".start-button");

    if (startBtn.style.filter === "invert(100%)") {
        startBtn.style.filter = "invert(0)"; // Отключаем инверсию
    } else {
        startBtn.style.filter = "invert(100%)"; // Включаем инверсию
    }

    const fadingShadow = document.querySelector(".fading-shadow");

    if (fadingShadow.style.filter === "invert(100%)") {
        fadingShadow.style.filter = "invert(0)"; // Отключаем инверсию
    } else {
        fadingShadow.style.filter = "invert(100%)"; // Включаем инверсию
    }

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        const currentColor = button.style.color || "black";
        const newColor = currentColor === "black" ? "white" : "black";

        button.style.color = newColor;
    });
}

  

  // Открытие фпк
  const fpk = document.querySelector('#FPK-JS')
  const logo = document.querySelector('#logo-js')

  logo.addEventListener('click', function(){

    fpk.classList.toggle('FPK-OFF')

  });

  const choice1 = document.querySelector('#choice1-js')
  const btn1Choice1 = document.querySelector('#btn1-choice1-js')
  const btn2Choice1 = document.querySelector('#btn2-choice1-js')

  const choiceOge = document.querySelector('#choice-oge-js')
  const btn1ChoiceOge = document.querySelector('#btn1-choice-oge-js')
  const btn2ChoiceOge = document.querySelector('#btn2-choice-oge-js')
  const btn3ChoiceOge = document.querySelector('#btn3-choice-oge-js')

  const choiceEge = document.querySelector('#choice-ege-js')
  const btn1ChoiceEge = document.querySelector('#btn1-choice-ege-js')
  const btn2ChoiceEge = document.querySelector('#btn2-choice-ege-js')
  const btn3ChoiceEge = document.querySelector('#btn3-choice-ege-js')

  choice1.classList.remove('choice1-off')
  choice1.classList.remove('choice1-none')


  btn1Choice1.addEventListener('click', function(){

    choice1.classList.add('choice1-off')

    setTimeout(function() {
  
      choice1.classList.add('choice1-none')
      choiceOge.classList.remove('choice-oge-off')
      

  
    }, 550);

  })

  btn2Choice1.addEventListener('click', function(){

    choice1.classList.add('choice1-off')

    setTimeout(function() {
  
      choice1.classList.add('choice1-none')
      choiceEge.classList.remove('choice-ege-off')
  
    }, 550);

  })

  const oge = document.querySelector('#oge-js')

  oge.classList.remove('oge-off')
