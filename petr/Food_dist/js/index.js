import TimerApi from './timer-Api/timerApi.js';
import refs from './refs.js';
const { timerSeconds, timerMinutes, timerHours, timerDays } = refs;

const tabs = document.querySelectorAll('.tabheader__item'),
  tabsContent = document.querySelectorAll('.tabcontent'),
  tabsParent = document.querySelector('.tabheader__items');

function hideTabContent() {
  tabsContent.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
  });

  tabs.forEach(item => {
    item.classList.remove('tabheader__item_active');
  });
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
  tabs[i].classList.add('tabheader__item_active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', function (event) {
  const { target } = event;
  if (target && target.classList.contains('tabheader__item')) {
    tabs.forEach((item, i) => {
      if (target === item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

function updateClockFace({ days, hours, mins, secs }) {
  timerDays.textContent = days;
  timerHours.textContent = hours;
  timerMinutes.textContent = mins;
  timerSeconds.textContent = secs;
}

const timer = new TimerApi('2021-06-18');
timer.start(updateClockFace);
