


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
    
    constructor(button, timerText, duration, onComplete) {
        this.button = button;
        this.timerText = timerText;
        this.duration = duration || 60000; // По умолчанию 1 минута
        this.isRunning = false;
        this.testCompleted = false;
        this.interval = null;
        this.onComplete = onComplete; // Обработчик завершения таймера

        this.button.addEventListener('click', () => this.toggle());
    }

    toggle() {
        if (!this.isRunning && !this.testCompleted) {
            this.start();
            this.button.textContent = 'Завершить тест';

            let taskImgs = document.querySelectorAll('.task-img');

            if (taskImgs.length > 0) {
                taskImgs.forEach(img => {
                    // Получаем текущий фильтр
                    let currentFilter = img.style.filter;
                    
                    // Заменяем любое значение blur на blur(0)
                    img.style.filter = currentFilter.replace('blur(4px)', 'blur(0)');
                });
                
            }

            let tasksOff = document.querySelector('.tasks-off');
            if (tasksOff) {
                tasksOff.style.opacity = '1'; // Установка opacity
            }

            // Убираем pointer-events: none у элемента с ID answerForm
            let answerForm = document.getElementById('answerForm');
            if (answerForm) {
                answerForm.style.pointerEvents = 'auto';
            }
        } else if (this.isRunning) {
            this.stop();
            this.button.textContent = 'Начать тест';
            this.button.style.opacity = '0.6'; // Добавление стиля непрозрачности
        }

        


    }

    start() {
        const startTime = Date.now() + this.duration;

        
    
        const updateTimer = () => {
            const currentTime = Date.now();
            const timeLeft = startTime - currentTime;
    
            if (timeLeft <= 0) {
                clearInterval(this.interval);
                this.timerText.textContent = "";
                this.isRunning = false;
                this.testCompleted = true;
                this.button.disabled = true; // Блокируем кнопку
                this.button.style.opacity = '0.6'; // Устанавливаем непрозрачность
                this.button.style.pointerEvents = 'none'; // Отключаем взаимодействие
    
                // Включаем кнопки с классом btn-night
                this.enableBtnNight();
    
                // Вызываем функцию обратного вызова при завершении таймера
                if (typeof this.onComplete === 'function') {
                    this.onComplete(); // Выполняем действие при завершении таймера
                }

            } else {
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
                const milliseconds = Math.floor(timeLeft % 1000);

                const paddedMinutes = String(minutes).padStart(2, '0');
                const paddedSeconds = String(seconds).padStart(2, '0');
                const paddedMilliseconds = String(milliseconds).padStart(3, '0');

                this.timerText.textContent = `${paddedMinutes}:${paddedSeconds}:${paddedMilliseconds}`;
            }
        };

        // Отключаем кнопки с классом btn-night
        this.disableBtnNight();

        this.interval = setInterval(updateTimer, 10);
        this.isRunning = true;
    }

    stop() {
        clearInterval(this.interval);
        this.isRunning = false;
        this.testCompleted = true;
        this.button.disabled = true;
        this.button.style.opacity = '0.6'; // Добавляем стиль непрозрачности
        oge.classList.add('oge-off')

        setTimeout(function() {
            resultContainerDIV.classList.add('results-on')
            resultContainerDIV.classList.remove('results-off')
          }, 1200);

        // Включаем кнопки с классом btn-night
        this.enableBtnNight();
    }

    // Функция для отключения кнопок с классом btn-night
    disableBtnNight() {
        let buttons = document.querySelectorAll('.btn-night');
        buttons.forEach(btn => {
            btn.disabled = true;
        });
    }

    // Функция для включения кнопок с классом btn-night
    enableBtnNight() {
        let buttons = document.querySelectorAll('.btn-night');
        buttons.forEach(btn => {
            btn.disabled = false;
        });

        
    }
    
}
const answer = document.getElementById('answerInput')
document.querySelectorAll('.start-button').forEach((button, index) => {
    let timerText = button.nextElementSibling;
    let duration = parseInt(button.dataset.duration) || 60000; // Время из data-атрибута или по умолчанию 1 минута
    

    // Определяем разные действия для разных таймеров
    let onComplete = () => {
        switch(index) {
            case 0:
                
    if (answer) {
        answer.classList.add('disabled');
    }
                break;
            default:
                console.error("Неизвестный индекс таймера", index);
        }
    };

    new Timer(button, timerText, duration, onComplete);
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



  btn2ChoiceOge.addEventListener("mouseenter", function(){
    halo.classList.remove('halo-off')
    YellowFrame.classList.remove('yellow-frame-off')

    animationSred.style.transition = "0.4s";
    animationSred.style.transform = "scale(2)";
    animationSred.style.zIndex = "4";

    backgroundframe2.style.opacity = '1';
    
    });
    
    btn2ChoiceOge.addEventListener("mouseleave", function(){
        halo.classList.add('halo-off')
        YellowFrame.classList.add('yellow-frame-off')

        animationSred.style.transition = "0.4s";
        animationSred.style.transform = "scale(1)";
        animationSred.style.zIndex = "3";

        backgroundframe2.style.opacity = '0';
      });



  btn1ChoiceOge.addEventListener('click', function(){

    choiceOge.classList.add('choice-oge-off')

    

    setTimeout(function() {
      btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')
      imgsOge1.classList.remove('imgs-oge1')


      resultsCorrectAnswer1.textContent = '1,5'
      resultsCorrectAnswer2.textContent = '1'
      resultsCorrectAnswer3.textContent = '-60'
      resultsCorrectAnswer4.textContent = '40'
      resultsCorrectAnswer5.textContent = '-1,3'

      


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

    choiceOge.classList.add('choice-oge-off')
    imgsOge2.classList.remove('imgs-oge2')
    answerForm.style.top = "200px";
    correctAnswers = correctAnswersSet2;
    
    
    

    setTimeout(function() {
      
        
        btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')

      resultsCorrectAnswer1.textContent = '11'
      resultsCorrectAnswer2.textContent = '-16'
      resultsCorrectAnswer3.textContent = '421'
      resultsCorrectAnswer4.textContent = '4'
      resultsCorrectAnswer5.textContent = '9'
        
        

    }, 550);

});


btn3ChoiceOge.addEventListener('click', function(){

    choiceOge.classList.add('choice-oge-off')
    imgsOge3.classList.remove('imgs-oge3')
    correctAnswers = correctAnswersSet3;

    setTimeout(function() {
      
        
        btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')

      resultsCorrectAnswer1.textContent = '3'
      resultsCorrectAnswer2.textContent = '-8'
      resultsCorrectAnswer3.textContent = '6'
      resultsCorrectAnswer4.textContent = '420'
      resultsCorrectAnswer5.textContent = '36'
        
        

    }, 550);


});

btn1ChoiceEge.addEventListener('click', function(){

    choiceEge.classList.add('choice-ege-off')
    imgsEge1.classList.remove('imgs-ege1')
    correctAnswers = correctAnswersSet4;

    setTimeout(function() {
      
        
        btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')

      resultsCorrectAnswer1.textContent = '12'
      resultsCorrectAnswer2.textContent = '0,0625'
      resultsCorrectAnswer3.textContent = '9'
      resultsCorrectAnswer4.textContent = '2431'
      resultsCorrectAnswer5.textContent = '4,2'
        
        

    }, 550);

});


btn2ChoiceEge.addEventListener('click', function(){

    choiceEge.classList.add('choice-ege-off')
    imgsEge2.classList.remove('imgs-ege2')
    correctAnswers = correctAnswersSet5;

    setTimeout(function() {
      
        
        btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')

      resultsCorrectAnswer1.textContent = '860'
      resultsCorrectAnswer2.textContent = '48'
      resultsCorrectAnswer3.textContent = '7'
      resultsCorrectAnswer4.textContent = '360'
      resultsCorrectAnswer5.textContent = '1160'
        

    }, 550);

});


btn3ChoiceEge.addEventListener('click', function(){

    choiceEge.classList.add('choice-ege-off')
    imgsEge3.classList.remove('imgs-ege3')
    correctAnswers = correctAnswersSet6;

    setTimeout(function() {
      
        
        btn1ogeEazy.classList.remove('btn1-choice-oge-eazy-off')

      resultsCorrectAnswer1.textContent = '108'
      resultsCorrectAnswer2.textContent = '-5'
      resultsCorrectAnswer3.textContent = '2431'
      resultsCorrectAnswer4.textContent = '11133'
      resultsCorrectAnswer5.textContent = '15'
        

        

    }, 550);

});



