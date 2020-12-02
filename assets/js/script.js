const timer = {
  date: '',
  hours: 0,
  minutes: 0,
  seconds: 0,
  running: false
};

function startTimer(){
  if(timer.running){
    return;
  };

  timer.running = true;
  showTime();
  interval = setInterval(showTime, 1000);
};

function stopTimer(){
  clearInterval(interval);
  timer.running = false;
};

function resetTimer(){
  stopTimer();
  timer.hours = 0;
  timer.minutes = 0;
  timer.seconds = 0;
  let text = '00:00:00';
  writeTimer(text);
};

function showTime(){
  if(!timer.running){
    return;
  };

  if(timer.seconds === 60){
    timer.minutes++;
    timer.seconds = 0;
  };

  if(timer.minutes === 60){
    timer.hours++;
    timer.minutes = 0;
  };

  let hours = timer.hours;
  let minutes = timer.minutes;
  let seconds = timer.seconds;

  if(timer.hours < 10){
    hours = '0' + timer.hours;
  };
  if(timer.minutes < 10){
    minutes = '0' + timer.minutes;
  };
  if(timer.seconds < 10){
    seconds = '0' + timer.seconds;
  };
  
  let text = `${hours}:${minutes}:${seconds}`;
  
  writeTimer(text);
  
  timer.seconds++;
};

function writeTimer(text){
  document.querySelector('.timer').innerHTML = text;
};