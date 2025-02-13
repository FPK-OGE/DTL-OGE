
const startBtn1 = document.querySelector(".start-button");
const resultContainerDIV = document.querySelector('#resultContainer-div')
const imgsOge1 = document.querySelector('.imgs-oge1')
const imgsOge2 = document.querySelector('.imgs-oge2')
const imgsOge3 = document.querySelector('.imgs-oge3')

const imgsEge1 = document.querySelector('.imgs-ege1')
const imgsEge2 = document.querySelector('.imgs-ege2')
const imgsEge3 = document.querySelector('.imgs-ege3')





    




const resultsCorrectAnswer1 = document.querySelector('.results-correct-answer1')
const resultsCorrectAnswer2 = document.querySelector('.results-correct-answer2')
const resultsCorrectAnswer3 = document.querySelector('.results-correct-answer3')
const resultsCorrectAnswer4 = document.querySelector('.results-correct-answer4')
const resultsCorrectAnswer5 = document.querySelector('.results-correct-answer5')








resultContainerDIV.classList.remove('results-on')
  
function startTest() {

    startBtn1.style.opacity = '0.6'; // Устанавливаем непрозрачность
    startBtn1.style.pointerEvents = 'none'; // Отключаем взаимодействие


}

class Timer {
    constructor(button, timerText, onComplete) {
        this.button = button;
        this.timerText = timerText;
        this.duration = parseInt(button.dataset.duration) || 60000; // Берем значение из data-duration
        this.isRunning = false;
        this.testCompleted = false;
        this.interval = null;
        this.onComplete = onComplete;

        this.updateTimerDisplay(); // Обновляем отображение времени при создании
        this.button.addEventListener('click', () => this.toggle());
    }

    toggle() {
        if (!this.isRunning && !this.testCompleted) {
            this.duration = parseInt(this.button.dataset.duration) || 60000; // Обновляем перед запуском
            this.start();
            this.button.textContent = 'Завершить тест';

            let taskImgs = document.querySelectorAll('.task-img');
            if (taskImgs.length > 0) {
                taskImgs.forEach(img => {
                    let currentFilter = img.style.filter;
                    img.style.filter = currentFilter.replace('blur(4px)', 'blur(0)');
                });
            }

            let tasksOff = document.querySelector('.tasks-off');
            if (tasksOff) {
                tasksOff.style.opacity = '1';
            }

            let answerForm = document.getElementById('answerForm');
            if (answerForm) {
                answerForm.style.pointerEvents = 'auto';
            }
        } else if (this.isRunning) {
            this.stop();
            this.button.textContent = 'Начать тест';
            this.button.style.opacity = '0.6';
        }
    }

    start() {
        const startTime = Date.now() + this.duration;

        const updateTimer = () => {
            const currentTime = Date.now();
            const timeLeft = startTime - currentTime;

            if (timeLeft <= 0) {
                clearInterval(this.interval);
                this.timerText.textContent = "00:00:000";
                this.isRunning = false;
                this.testCompleted = true;
                this.button.disabled = true;
                this.button.style.opacity = '0.6';
                this.button.style.pointerEvents = 'none';

                this.enableBtnNight();

                if (typeof this.onComplete === 'function') {
                    this.onComplete();
                }
            } else {
                this.displayTime(timeLeft);
            }
        };

        this.disableBtnNight();
        this.interval = setInterval(updateTimer, 10);
        this.isRunning = true;
    }

    stop() {
        clearInterval(this.interval);
        this.isRunning = false;
        this.testCompleted = true;
        this.button.disabled = true;
        this.button.style.opacity = '0.6';
        oge.classList.add('oge-off');

        setTimeout(() => {
            resultContainerDIV.classList.add('results-on');
            resultContainerDIV.classList.remove('results-off');
        }, 1200);

        this.enableBtnNight();
    }

    displayTime(time) {
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        const milliseconds = Math.floor(time % 1000);
    
        this.timerText.textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
    }
    

    // Обновляем текст таймера при изменении `data-duration`
    updateTimerDisplay() {
        const newDuration = parseInt(this.button.dataset.duration) || 60000;
        this.displayTime(newDuration);
    }

    disableBtnNight() {
        let buttons = document.querySelectorAll('.btn-night');
        buttons.forEach(btn => {
            btn.disabled = true;
        });
    }

    enableBtnNight() {
        let buttons = document.querySelectorAll('.btn-night');
        buttons.forEach(btn => {
            btn.disabled = false;
        });
    }
}

// Создаём таймеры
document.querySelectorAll('.start-button').forEach((button, index) => {
    let timerText = button.nextElementSibling;

    let onComplete = () => {
        if (index === 0) {
            const answer = document.getElementById('answerInput');
            if (answer) {
                answer.classList.add('disabled');
            }
        }
    };

    let timer = new Timer(button, timerText, onComplete);

    // Следим за изменением data-duration и обновляем таймер
    const observer = new MutationObserver(() => timer.updateTimerDisplay());
    observer.observe(button, { attributes: true, attributeFilter: ['data-duration'] });
});



  // const choice1 = document.querySelector('#choice1-js')
  // const btn1Choice1 = document.querySelector('#btn1-choice1-js')
  // const btn2Choice1 = document.querySelector('#btn2-choice1-js')

  // const choiceOge = document.querySelector('#choice-oge-js')
  // const btn1ChoiceOge = document.querySelector('#btn1-choice-oge-js')
  // const btn2ChoiceOge = document.querySelector('#btn2-choice-oge-js')
  // const btn3ChoiceOge = document.querySelector('#btn3-choice-oge-js')

  // const choiceEge = document.querySelector('#choice-ege-js')
  // const btn1ChoiceEge = document.querySelector('#btn1-choice-ege-js')
  // const btn2ChoiceEge = document.querySelector('#btn2-choice-ege-js')
  // const btn3ChoiceEge = document.querySelector('#btn3-choice-ege-js')

  const btn1ogeEazy = document.querySelector('#btn1-choice-oge-eazy-js')
  const eazyAnimationOge = document.querySelector('.eazyAnimationOge-off')
  const greenFrame = document.querySelector('.green-frame-off')
  const AnimationEazy = document.querySelector('.animation-eazy')
  const buttoneazyoge = document.querySelector('.button-eazy-oge')
  const backgroundframe = document.querySelector('.background-frame')
  const horns = document.querySelector('.horns-active')
  const tail = document.querySelector('.tail-active')

  const navHref1 = document.querySelector('#nav-href1-js')
  const navHref2 = document.querySelector('#nav-href2-js')
  const navHref3 = document.querySelector('#nav-href3-js')
  const navHref4 = document.querySelector('#nav-href4-js')
  const navHref5 = document.querySelector('#nav-href5-js')



  horns.classList.remove('horns-active')

btn1ChoiceOge.addEventListener("mouseenter", function(){
eazyAnimationOge.classList.remove('eazyAnimationOge-off')


buttoneazyoge.style.transition = "0.4s";
buttoneazyoge.style.transform = "scale(2)";
buttoneazyoge.style.zIndex = "4";

AnimationEazy.style.transition = "0.4s";
AnimationEazy.style.opacity = '1';

backgroundframe.style.opacity = '1';

});

btn1ChoiceOge.addEventListener("mouseleave", function(){
  eazyAnimationOge.classList.add('eazyAnimationOge-off')


  buttoneazyoge.style.transition = "0.4s";
  buttoneazyoge.style.transform = "scale(1)";
  buttoneazyoge.style.zIndex = "3";

  AnimationEazy.style.transition = "0.4s";
  AnimationEazy.style.opacity = '0';

  backgroundframe.style.opacity = '0';
  });

  const halo = document.querySelector('.halo')
  const YellowFrame = document.querySelector('.yellow-frame')
  const backgroundframe2 = document.querySelector('.background-frame2')
  const animationSred = document.querySelector('.animationSred')
  const animationsredCloud = document.querySelector('.animationsredCloud')



  btn2ChoiceOge.addEventListener("mouseenter", function(){
    halo.classList.remove('halo-off')
    YellowFrame.classList.remove('yellow-frame-off')
    animationsredCloud.classList.remove('animationsredCloud')
    animationsredCloud.style.transition = '.4s'

    animationSred.style.transition = "0.4s";
    animationSred.style.transform = "scale(2)";
    animationSred.style.zIndex = "4";

    backgroundframe2.style.opacity = '1';

    
    
    });
    
    btn2ChoiceOge.addEventListener("mouseleave", function(){
        halo.classList.add('halo-off')
        YellowFrame.classList.add('yellow-frame-off')
        animationsredCloud.classList.add('animationsredCloud')

        animationSred.style.transition = "0.4s";
        animationSred.style.transform = "scale(1)";
        animationSred.style.zIndex = "3";

        backgroundframe2.style.opacity = '0';
      });



  btn1ChoiceOge.addEventListener('click', function(){

    const width = window.innerWidth; // Получаем ширину окна браузера

    if (width <= 480) { // Если ширина экрана меньше или равна 480 пикселей
        setTimeout(() => { // Задерживаем выполнение функции на 2 секунды
            choiceOge.classList.add('choice-oge-off');
        }, 1200); // Задержка в миллисекундах (2000 мс = 2 секунды)
    } else {
        choiceOge.classList.add('choice-oge-off'); // Выполняем действие немедленно
    }

    

    setTimeout(function() {

      if (width <= 480) { // Если ширина экрана меньше или равна 480 пикселей
        setTimeout(() => { // Задерживаем выполнение функции на 2 секунды
            btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')
      imgsOge1.classList.remove('imgs-oge1')
        }, 1200); // Задержка в миллисекундах (2000 мс = 2 секунды)
    } else {
        btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')
      imgsOge1.classList.remove('imgs-oge1') // Выполняем действие немедленно
    }


      resultsCorrectAnswer1.textContent = '1,5'
      resultsCorrectAnswer2.textContent = '1'
      resultsCorrectAnswer3.textContent = '-60'
      resultsCorrectAnswer4.textContent = '40'
      resultsCorrectAnswer5.textContent = '-1,3'

    navHref1.href = "https://www.youtube.com/watch?v=XPXUGXTEDow";
    navHref2.href = "https://vkvideo.ru/video-185411986_456239811?ref_domain=yastatic.net";
    navHref3.href = "https://www.youtube.com/watch?v=rZCfaPRCbLA";
    navHref4.href = "https://youtu.be/asmALUOREz8?si=KyLmhtdW5bhjzKAH";
    navHref5.href = "https://rutube.ru/video/2eebaccca45fde794f3827bb121b5287/?&utm_source=embed&utm_medium=referral&utm_campaign=logo&utm_content=2eebaccca45fde794f3827bb121b5287&utm_term=yastatic.net%2F&referrer=appmetrica_tracking_id%3D1037600761300671389%26ym_tracking_id%3D11333591641848709155";

      

      document.getElementById('timer-time').dataset.duration = "480000";
    }, 550);
      
  })

  btn1ChoiceOge.addEventListener("mouseenter", function(){
    greenFrame.classList.remove('green-frame-off')
    });
    
    btn1ChoiceOge.addEventListener("mouseleave", function(){
      greenFrame.classList.add('green-frame-off')
      });

      const Btn2ChoiceOgeAverage = document.querySelector('#btn2-choice-oge-average-js')

      

// Массив правильных ответов
const correctAnswersSet1 = ['1,5', '1', '-60', '40', '-1,3'];
const correctAnswersSet2 = ['11', '-16', '421', '4', '9'];
const correctAnswersSet3 = ['3', '-8', '6', '420', '36'];
const correctAnswersSet4 = ['12', '0,0625', '9', '2431', '4,2'];
const correctAnswersSet5 = ['860', '48', '7', '360', '1160'];
const correctAnswersSet6 = ['108', '-5', '2431', '11133', '15'];
let currentQuestion = 0;
let results = [];
let userAnswers = []; // Добавляем массив для хранения введенных пользователем ответов
let correctAnswers = correctAnswersSet1;


function checkAnswer() {
    const answer = document.getElementById('answerInput').value.trim(); // Убираем лишние пробелы
    
    // Сохраняем введенный пользователем ответ
    userAnswers.push(answer);

    if (answer === correctAnswers[currentQuestion]) {
        results.push(true);
    } else {
        results.push(false);
    }
    
    document.getElementById('answerInput').value = '';
    currentQuestion++;
    
    if (currentQuestion >= correctAnswers.length) {
        showFinalResults();
    }
}

function showFinalResults(options = {}) {
    // Параметры по умолчанию
    const defaultOptions = {
        containerId: 'resultContainer',
        resultClass: '',
        correctAnswerClass: 'correct',
        incorrectAnswerClass: 'incorrect'
    };

    // Объединяем переданные опции с параметрами по умолчанию
    options = { ...defaultOptions, ...options };

    let totalCorrect = results.filter(result => result).length;
    let totalQuestions = results.length;
    let percentage = Math.round(totalCorrect / totalQuestions * 100);

    let resultText = `<div class="final-result ${options.resultClass}"></div>`;

    for (let i = 0; i < results.length; i++) {
        // Если ответ пустой, пишем "Нет ответа"
        let displayedAnswer = userAnswers[i].trim() !== '' ? userAnswers[i] : 'Нет ответа';
        
        // Выводим введённый пользователем ответ
        resultText += `<span class="${results[i] ? options.correctAnswerClass : options.incorrectAnswerClass}">${displayedAnswer}</span><br>`;
    }

    document.getElementById(options.containerId).innerHTML = resultText;
}


const nextTask1 = document.querySelector('.task-img-off1')
const nextTask2 = document.querySelector('.task-img-off2')
const nextTask3 = document.querySelector('.task-img-off3')
const nextTask4 = document.querySelector('.task-img-off4')
const nextTask5 = document.querySelector('.task-img-off5')

const next2Task1 = document.querySelector('.task-img-off1-2')
const next2Task2 = document.querySelector('.task-img-off2-2')
const next2Task3 = document.querySelector('.task-img-off3-2')
const next2Task4 = document.querySelector('.task-img-off4-2')
const next2Task5 = document.querySelector('.task-img-off5-2')

const next3Task1 = document.querySelector('.task-img-off1-3')
const next3Task2 = document.querySelector('.task-img-off2-3')
const next3Task3 = document.querySelector('.task-img-off3-3')
const next3Task4 = document.querySelector('.task-img-off4-3')
const next3Task5 = document.querySelector('.task-img-off5-3')

const next4Task1 = document.querySelector('.task-img-off1-4')
const next4Task2 = document.querySelector('.task-img-off2-4')
const next4Task3 = document.querySelector('.task-img-off3-4')
const next4Task4 = document.querySelector('.task-img-off4-4')
const next4Task5 = document.querySelector('.task-img-off5-4')

const next5Task1 = document.querySelector('.task-img-off1-5')
const next5Task2 = document.querySelector('.task-img-off2-5')
const next5Task3 = document.querySelector('.task-img-off3-5')
const next5Task4 = document.querySelector('.task-img-off4-5')
const next5Task5 = document.querySelector('.task-img-off5-5')

const next6Task1 = document.querySelector('.task-img-off1-6')
const next6Task2 = document.querySelector('.task-img-off2-6')
const next6Task3 = document.querySelector('.task-img-off3-6')
const next6Task4 = document.querySelector('.task-img-off4-6')
const next6Task5 = document.querySelector('.task-img-off5-6')


let clickCount = 0;

nextTask1.classList.remove('task-img-off1')
next2Task1.classList.remove('task-img-off1-2')
next3Task1.classList.remove('task-img-off1-3')
next4Task1.classList.remove('task-img-off1-4')
next5Task1.classList.remove('task-img-off1-5')
next6Task1.classList.remove('task-img-off1-6')


function nexttask() {

    clickCount++;

    
    // Выполняем соответствующие действия в зависимости от количества кликов
    if (clickCount === 1) {
        actionOne();
    } else if (clickCount === 2) {
        actionTwo();
    } else if (clickCount === 3) {
        actionThree();
    } else if (clickCount === 4) {
        actionFour();
    } else if (clickCount === 5) {
        actionFive();
    } else {
        console.log("Счётчик больше 5");
    }
}

// Различные действия для каждого клика
function actionOne() {
    nextTask1.classList.add('task-img-off1')
    nextTask2.classList.remove('task-img-off2')

    next2Task1.classList.add('task-img-off1-2')
    next2Task2.classList.remove('task-img-off2-2')

    next3Task1.classList.add('task-img-off1-3')
    next3Task2.classList.remove('task-img-off2-3')

    next4Task1.classList.add('task-img-off1-4')
    next4Task2.classList.remove('task-img-off2-4')

    next5Task1.classList.add('task-img-off1-5')
    next5Task2.classList.remove('task-img-off2-5')

    next6Task1.classList.add('task-img-off1-6')
    next6Task2.classList.remove('task-img-off2-6')
}

function actionTwo() {
    nextTask2.classList.add('task-img-off2')
    nextTask3.classList.remove('task-img-off3')

    next2Task2.classList.add('task-img-off2-2')
    next2Task3.classList.remove('task-img-off3-2')

    next3Task2.classList.add('task-img-off2-3')
    next3Task3.classList.remove('task-img-off3-3')

    next4Task2.classList.add('task-img-off2-4')
    next4Task3.classList.remove('task-img-off3-4')

    next5Task2.classList.add('task-img-off2-5')
    next5Task3.classList.remove('task-img-off3-5')

    next6Task2.classList.add('task-img-off2-6')
    next6Task3.classList.remove('task-img-off3-6')
}

function actionThree() {
    nextTask3.classList.add('task-img-off3')
    nextTask4.classList.remove('task-img-off4')

    next2Task3.classList.add('task-img-off3-2')
    next2Task4.classList.remove('task-img-off4-2')

    next3Task3.classList.add('task-img-off3-3')
    next3Task4.classList.remove('task-img-off4-3')

    next4Task3.classList.add('task-img-off3-4')
    next4Task4.classList.remove('task-img-off4-4')

    next5Task3.classList.add('task-img-off3-5')
    next5Task4.classList.remove('task-img-off4-5')

    next6Task3.classList.add('task-img-off3-6')
    next6Task4.classList.remove('task-img-off4-6')
}

function actionFour() {
    nextTask4.classList.add('task-img-off4')
    nextTask5.classList.remove('task-img-off5')

    next2Task4.classList.add('task-img-off4-2')
    next2Task5.classList.remove('task-img-off5-2')

    next3Task4.classList.add('task-img-off4-3')
    next3Task5.classList.remove('task-img-off5-3')

    next4Task4.classList.add('task-img-off4-4')
    next4Task5.classList.remove('task-img-off5-4')

    next5Task4.classList.add('task-img-off4-5')
    next5Task5.classList.remove('task-img-off5-5')

    next6Task4.classList.add('task-img-off4-6')
    next6Task5.classList.remove('task-img-off5-6')
}

const answerForm = document.getElementById('answerForm');

function actionFive() {
    
    answerForm.style.pointerEvents = "none";
    document.getElementById("answerForm").style.opacity = "0.3";
    startBtn1.style.opacity = '1'; // Устанавливаем непрозрачность
    startBtn1.style.pointerEvents = 'auto'; // Отключаем взаимодействие

    oge.classList.add('oge-off')

        setTimeout(function() {
            resultContainerDIV.classList.add('results-on')
            resultContainerDIV.classList.remove('results-off')
          }, 1200);
    
    

}


btn2ChoiceOge.addEventListener('click', function(){

    
    imgsOge2.classList.remove('imgs-oge2')
    answerForm.style.top = "200px";
    correctAnswers = correctAnswersSet2;

    const width = window.innerWidth; // Получаем ширину окна браузера

    if (width <= 480) { // Если ширина экрана меньше или равна 480 пикселей
        setTimeout(() => { // Задерживаем выполнение функции на 2 секунды
            choiceOge.classList.add('choice-oge-off')
        }, 1200); // Задержка в миллисекундах (2000 мс = 2 секунды)
    } else {
        choiceOge.classList.add('choice-oge-off') // Выполняем действие немедленно
    }
    
    
    

    setTimeout(function() {
      
        
        

        if (width <= 480) { // Если ширина экрана меньше или равна 480 пикселей
            setTimeout(() => { // Задерживаем выполнение функции на 2 секунды
                btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')
            }, 1200); // Задержка в миллисекундах (2000 мс = 2 секунды)
        } else {
            btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off') // Выполняем действие немедленно
        }

      resultsCorrectAnswer1.textContent = '11'
      resultsCorrectAnswer2.textContent = '-16'
      resultsCorrectAnswer3.textContent = '421'
      resultsCorrectAnswer4.textContent = '4'
      resultsCorrectAnswer5.textContent = '9'

      navHref1.href = "https://youtube.com/shorts/945CwofcnkY?si=rjK5nba0r33pu0el"
      navHref2.href = "https://youtu.be/zpnoFuEwkrU?si=heTP0pBHTZK9IKhm"
      navHref3.href = "https://rutube.ru/video/0349e10da4025889144317a1a6730111/?&utm_source=embed&utm_medium=referral&utm_campaign=logo&utm_content=0349e10da4025889144317a1a6730111&utm_term=yastatic.net%2F&referrer=appmetrica_tracking_id%3D1037600761300671389%26ym_tracking_id%3D1603993878705176631"
      navHref4.href = "https://youtube.com/shorts/QJK5CfcBdDI?si=GVL0I_-pJuGDQ0NT"
      navHref5.href = "https://www.youtube.com/watch?v=72HiQIiq7gI"
        
        
      document.getElementById('timer-time').dataset.duration = "720000";
    }, 550);

});


btn3ChoiceOge.addEventListener('click', function(){

    
    imgsOge3.classList.remove('imgs-oge3')
    correctAnswers = correctAnswersSet3;


    const width = window.innerWidth; // Получаем ширину окна браузера

    if (width <= 480) { // Если ширина экрана меньше или равна 480 пикселей
        setTimeout(() => { // Задерживаем выполнение функции на 2 секунды
            choiceOge.classList.add('choice-oge-off')
        }, 1200); // Задержка в миллисекундах (2000 мс = 2 секунды)
    } else {
        choiceOge.classList.add('choice-oge-off') // Выполняем действие немедленно
    }

    setTimeout(function() {
      
        if (width <= 480) { // Если ширина экрана меньше или равна 480 пикселей
            setTimeout(() => { // Задерживаем выполнение функции на 2 секунды
                btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')
            }, 1200); // Задержка в миллисекундах (2000 мс = 2 секунды)
        } else {
            btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')
        }
        

      resultsCorrectAnswer1.textContent = '3'
      resultsCorrectAnswer2.textContent = '-8'
      resultsCorrectAnswer3.textContent = '6'
      resultsCorrectAnswer4.textContent = '420'
      resultsCorrectAnswer5.textContent = '36'


      navHref1.href = "https://yandex.ru/video/preview/6002665231406258384"
      navHref2.href = "https://youtu.be/n-_oooGuyB4?si=7L1T4GEA4Ue901Zu"
      navHref3.href = "https://youtu.be/XbJXciRaa-o?si=GKifvZxAhr5M6IzA"
      navHref4.href = "https://youtu.be/B4SOo1RzEO4?si=v1OQAZ0Dl2tN-4pQ"
      navHref5.href = "https://www.youtube.com/watch?v=86X9WcvhWNc"
        
        
      document.getElementById('timer-time').dataset.duration = "1200000";
    }, 550);


});

const animationHard = document.querySelector('.animationHard')
const redFrame = document.querySelector('.red-frame')
const textFrameRed = document.querySelector('.text-frame-red')
const fairs = document.querySelector('.fairs-active')



textFrameRed.classList.remove('text-frame-red-active')

tail.classList.remove('tail-active')

btn3ChoiceOge.addEventListener("mouseenter", function(){
    horns.classList.add('horns-active')
    tail.classList.add('tail-active')

    fairs.classList.remove('fairs-active')
    
    animationHard.style.opacity = '1';
    animationHard.style.transition = '.4s';
    btn1ChoiceOge.style.filter = 'blur(2px)';
    btn2ChoiceOge.style.filter = 'blur(2px)';
    btn3ChoiceOge.style.transform = 'scale(2)';
    btn3ChoiceOge.style.transition = '.4s';
    btn3ChoiceOge.style.zIndex = '5';

    redFrame.style.transform = 'scale(2)';
    redFrame.style.transition = '.4s';
    redFrame.style.top = '140px';
    redFrame.style.zIndex = '4'
    textFrameRed.style.zIndex = '4'
    redFrame.style.opacity = '1'
    textFrameRed.classList.add('text-frame-red-active')
    });
    
    btn3ChoiceOge.addEventListener("mouseleave", function(){
        horns.classList.remove('horns-active')
        tail.classList.remove('tail-active')

        fairs.classList.add('fairs-active')
        
        animationHard.style.opacity = '0';
        btn1ChoiceOge.style.filter = 'blur(0px)';
        btn2ChoiceOge.style.filter = 'blur(0px)';
        btn3ChoiceOge.style.transform = 'scale(1)';
        btn3ChoiceOge.style.zIndex = '3';
        
        redFrame.style.transform = 'scale(1)';
        textFrameRed.style.transform = 'scale(1)';

        redFrame.style.transform = '';
        redFrame.style.transition = '.4s';
        redFrame.style.top = '140px';
        textFrameRed.style.fontSize = ''

        redFrame.style.opacity = '0'
        textFrameRed.classList.remove('text-frame-red-active')

      });




btn1ChoiceEge.addEventListener('click', function(){

    
    imgsEge1.classList.remove('imgs-ege1')
    correctAnswers = correctAnswersSet4;

    const width = window.innerWidth; // Получаем ширину окна браузера

    if (width <= 480) { // Если ширина экрана меньше или равна 480 пикселей
        setTimeout(() => { // Задерживаем выполнение функции на 2 секунды
            choiceEge.classList.add('choice-ege-off')
        }, 1200); // Задержка в миллисекундах (2000 мс = 2 секунды)
    } else {
        choiceEge.classList.add('choice-ege-off')
    }

    setTimeout(function() {
      
        
        

        if (width <= 480) { // Если ширина экрана меньше или равна 480 пикселей
            setTimeout(() => { // Задерживаем выполнение функции на 2 секунды
                btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')
            }, 1200); // Задержка в миллисекундах (2000 мс = 2 секунды)
        } else {
            btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')
        }

      resultsCorrectAnswer1.textContent = '12'
      resultsCorrectAnswer2.textContent = '0,0625'
      resultsCorrectAnswer3.textContent = '9'
      resultsCorrectAnswer4.textContent = '2431'
      resultsCorrectAnswer5.textContent = '4,2'
        
      navHref1.href = "https://youtu.be/0MOp6RvGCEI?si=uDyDcDVvTT88P7bz"
      navHref2.href = "https://www.youtube.com/watch?v=k9l8qUdv1dw"
      navHref3.href = "https://rutube.ru/video/1a4fe088fa451a21fbf79d1564519aa3/?&utm_source=embed&utm_medium=referral&utm_campaign=logo&utm_content=1a4fe088fa451a21fbf79d1564519aa3&utm_term=yastatic.net%2F&referrer=appmetrica_tracking_id%3D1037600761300671389%26ym_tracking_id%3D13965555771871778993"
      navHref4.href = "https://youtu.be/uis-XMr2Byo?si=lqADmrcK_4IwNu3_"
      navHref5.href = "https://youtube.com/shorts/h5FrqwOOVhU?si=Ua97SdVCz0C0ZdWY"


      document.getElementById('timer-time').dataset.duration = "480000";
    }, 550);

});


btn2ChoiceEge.addEventListener('click', function(){

    const width = window.innerWidth; // Получаем ширину окна браузера

    if (width <= 480) { // Если ширина экрана меньше или равна 480 пикселей
        setTimeout(() => { // Задерживаем выполнение функции на 2 секунды
            choiceEge.classList.add('choice-ege-off')
        }, 1200); // Задержка в миллисекундах (2000 мс = 2 секунды)
    } else {
        choiceEge.classList.add('choice-ege-off')
    }

    imgsEge2.classList.remove('imgs-ege2')
    correctAnswers = correctAnswersSet5;

    setTimeout(function() {
      
        
        if (width <= 480) { // Если ширина экрана меньше или равна 480 пикселей
            setTimeout(() => { // Задерживаем выполнение функции на 2 секунды
                btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')
            }, 1200); // Задержка в миллисекундах (2000 мс = 2 секунды)
        } else {
            btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')
        }

      resultsCorrectAnswer1.textContent = '860'
      resultsCorrectAnswer2.textContent = '48'
      resultsCorrectAnswer3.textContent = '7'
      resultsCorrectAnswer4.textContent = '360'
      resultsCorrectAnswer5.textContent = '1160'

      navHref1.href = "https://youtube.com/shorts/2myMO3EBc2I?si=CQGqk0HGrlHuESan"
      navHref2.href = "https://dzen.ru/shorts/66e43ee2f99213031febc690"
      navHref3.href = "https://youtu.be/V4TRx1D25F4?si=J8X3USOMKlw5SlsV"
      navHref4.href = "https://rutube.ru/video/213f9ef45e3f9b40e3e654d8868abb2c/?&utm_source=embed&utm_medium=referral&utm_campaign=logo&utm_content=213f9ef45e3f9b40e3e654d8868abb2c&utm_term=yastatic.net%2F&referrer=appmetrica_tracking_id%3D1037600761300671389%26ym_tracking_id%3D11753028199347047930"
      navHref5.href = "https://youtu.be/WlTRAP6pR5o?si=Z3LgEhvoMUJ0b9Xq"
        
      document.getElementById('timer-time').dataset.duration = "720000";
    }, 550);

});


btn3ChoiceEge.addEventListener('click', function(){

    const width = window.innerWidth; // Получаем ширину окна браузера

    if (width <= 480) { // Если ширина экрана меньше или равна 480 пикселей
        setTimeout(() => { // Задерживаем выполнение функции на 2 секунды
            choiceEge.classList.add('choice-ege-off')
        }, 1200); // Задержка в миллисекундах (2000 мс = 2 секунды)
    } else {
        choiceEge.classList.add('choice-ege-off')
    }

    imgsEge3.classList.remove('imgs-ege3')
    correctAnswers = correctAnswersSet6;

    setTimeout(function() {
      
        
        if (width <= 480) { // Если ширина экрана меньше или равна 480 пикселей
            setTimeout(() => { // Задерживаем выполнение функции на 2 секунды
                btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')
            }, 1200); // Задержка в миллисекундах (2000 мс = 2 секунды)
        } else {
            btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')
        }

      resultsCorrectAnswer1.textContent = '108'
      resultsCorrectAnswer2.textContent = '-5'
      resultsCorrectAnswer3.textContent = '2431'
      resultsCorrectAnswer4.textContent = '11133'
      resultsCorrectAnswer5.textContent = '15'


      navHref1.href = "https://www.youtube.com/watch?v=tyb2iHc04ZE"
      navHref2.href = "https://youtu.be/RmPGa51MSao?si=XI0MeV2-WrYI3bOX"
      navHref3.href = "https://youtu.be/4QYLEkszFyE?si=RYfyVMVjosYgK9gv"
      navHref4.href = "https://www.youtube.com/watch?v=RwdECW1ksGw"
      navHref5.href = "https://www.youtube.com/watch?v=Ppvx1EBVm48"
        
        
      document.getElementById('timer-time').dataset.duration = "1200000";
    }, 550);

});


const eazyAnimationOge2 = document.querySelector('.eazyAnimationOge-off-2')
const buttoneazyoge2 = document.querySelector('.button-eazy-oge-2')
const AnimationEazy2 = document.querySelector('.animation-eazy-2')
const backgroundframe22 = document.querySelector('.background-frame-2')
const greenFrame2 = document.querySelector('.green-frame-off-2')


btn1ChoiceEge.addEventListener("mouseenter", function(){
    eazyAnimationOge2.classList.remove('eazyAnimationOge-off-2')
    
    buttoneazyoge2.style.transition = "0.4s";
    buttoneazyoge2.style.transform = "scale(2)";
    buttoneazyoge2.style.zIndex = "4";
    
    AnimationEazy2.style.transition = "0.4s";
    AnimationEazy2.style.opacity = '1';
    
    backgroundframe22.style.opacity = '1';

    greenFrame2.classList.remove('green-frame-off-2')
    
    });
    
    btn1ChoiceEge.addEventListener("mouseleave", function(){
      eazyAnimationOge2.classList.add('eazyAnimationOge-off-2')
    
      buttoneazyoge2.style.transition = "0.4s";
      buttoneazyoge2.style.transform = "scale(1)";
      buttoneazyoge2.style.zIndex = "3";
    
      AnimationEazy2.style.transition = "0.4s";
      AnimationEazy2.style.opacity = '0';

      backgroundframe22.style.opacity = '0';

      greenFrame2.classList.add('green-frame-off-2')
      });


      const halo2 = document.querySelector('.halo-2')
      const YellowFrame2 = document.querySelector('.yellow-frame-2')
      const backgroundframe222 = document.querySelector('.background-frame2-2')
      const animationSred2 = document.querySelector('.animationSred-2')
      const animationsredCloud2 = document.querySelector('.animationsredCloud-2')


      btn2ChoiceEge.addEventListener("mouseenter", function(){
        halo2.classList.remove('halo-off-2')
        YellowFrame2.classList.remove('yellow-frame-off-2')
        animationsredCloud2.classList.remove('animationsredCloud-2')
        animationsredCloud2.style.transition = '.4s'
    
        animationSred2.style.transition = "0.4s";
        animationSred2.style.transform = "scale(2)";
        animationSred2.style.zIndex = "4";
    
        backgroundframe222.style.opacity = '1';
        
        });


        
        btn2ChoiceEge.addEventListener("mouseleave", function(){
            halo2.classList.add('halo-off-2')
            YellowFrame2.classList.add('yellow-frame-off-2')
            animationsredCloud2.classList.add('animationsredCloud-2')
    
            animationSred2.style.transition = "0.4s";
            animationSred2.style.transform = "scale(1)";
            animationSred2.style.zIndex = "3";
    
            backgroundframe222.style.opacity = '0';
          });


          const animationHard2 = document.querySelector('.animationHard-2')
          const redFrame2 = document.querySelector('.red-frame-2')
          const textFrameRed2 = document.querySelector('.text-frame-red-2')

          textFrameRed2.classList.remove('text-frame-red-active-2')

          const horns2 = document.querySelector('.horns-active')
          const tail2 = document.querySelector('.tail-active')

        horns2.classList.remove('horns-active')
        tail2.classList.remove('tail-active')

        const fairs2 = document.querySelector('.fairs-active2')

        

btn3ChoiceEge.addEventListener("mouseenter", function(){
    animationHard2.style.opacity = '1';
    animationHard2.style.transition = '.4s';
    btn1ChoiceEge.style.filter = 'blur(2px)';
    btn2ChoiceEge.style.filter = 'blur(2px)';
    btn3ChoiceEge.style.transform = 'scale(2)';
    btn3ChoiceEge.style.transition = '.4s';
    btn3ChoiceEge.style.zIndex = '5';

    redFrame2.style.transform = 'scale(2)';
    redFrame2.style.transition = '.4s';
    redFrame2.style.top = '140px';
    redFrame2.style.zIndex = '4'
    textFrameRed2.style.zIndex = '4'
    redFrame2.style.opacity = '1'
    textFrameRed2.classList.add('text-frame-red-active-2')

    horns2.classList.add('horns-active')
    tail2.classList.add('tail-active')

    fairs2.classList.remove('fairs-active2')
    });
    
    btn3ChoiceEge.addEventListener("mouseleave", function(){
        animationHard2.style.opacity = '0';
        btn1ChoiceEge.style.filter = 'blur(0px)';
        btn2ChoiceEge.style.filter = 'blur(0px)';
        btn3ChoiceEge.style.transform = 'scale(1)';
        btn3ChoiceEge.style.zIndex = '3';
        
        redFrame2.style.transform = 'scale(1)';
        textFrameRed2.style.transform = 'scale(1)';

        redFrame2.style.transform = '';
        redFrame2.style.transition = '.4s';
        redFrame2.style.top = '140px';
        textFrameRed2.style.fontSize = ''

        redFrame2.style.opacity = '0'
        textFrameRed2.classList.remove('text-frame-red-active-2')

        horns2.classList.remove('horns-active')
        tail2.classList.remove('tail-active')

        fairs2.classList.add('fairs-active2')
      });