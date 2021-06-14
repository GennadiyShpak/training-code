class TimerApi {
  constructor(targetDate = '') {
    this.targetDate = new Date(targetDate);
  }
  start(foo) {
    this.timerId = setInterval(() => {
      const finalDate = this.targetDate.getTime();
      const dateNow = Date.now();
      const time = finalDate - dateNow;
      const timerTime = this.#getTimeComponents(time);
      foo(timerTime);
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }

  #pad(value) {
    return String(value).padStart(2, '0');
  }
  #getTimeComponents(time) {
    const days = this.#pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.#pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.#pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.#pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
}
export default TimerApi;
