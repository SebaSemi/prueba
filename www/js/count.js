

var eleCountdown = document.getElementById("countdown");
var eleDuration = document.getElementById("duration");
var eleStatus = document.getElementById("status");
var timerDuration;
var running = false;
var secondsRemaining;
var timerId;

function secondsToTime(seconds) {
  var t = new Date(seconds*1000);
  return t.toISOString().substr(11, 8);
}

function updateSeconds() {
  secondsRemaining--;
  countdown.textContent = secondsToTime(secondsRemaining);
  if (secondsRemaining) {
    timerId = setTimeout(updateSeconds, 1000); //in milliseconds unit
  } else {
    eleStatus.textContent = "(stopped)";
  }
}

function setTimer(seconds) {
  //can only set timer duration if timer is not running
  if (!running) {
    timerDuration = seconds;
    secondsRemaining = timerDuration;
    if (timerDuration >= 60*60) {
      if (timerDuration == 60*60) {
        duration.textContent = "1 Hour";
      } else {
        duration.textContent = (timerDuration/(60*60))+" Hours";
      }
    } else {
      if (timerDuration == 60) {
        duration.textContent = "1 Minute";
      } else {
        duration.textContent = (timerDuration/60)+" Minutes";
      }
    }
    resetClock();
  }
}

function resetClock() {
  pauseClock();
  countdown.textContent = secondsToTime(timerDuration);
  eleStatus.textContent = "(stopped)";
}

function pauseClock() {
  //can only pause if timer is running
  if (running) {
    running = false;
    clearTimeout(timerId);
    eleStatus.textContent = "(paused)";
  }
}

function startClock() {
  //can only start/resume if timer is not running
  if (!running) {
    running = true;
    timerId = setTimeout(updateSeconds, 1000); //in milliseconds unit
    eleStatus.textContent = "(running)";
  }
}

setTimer(60*60);
