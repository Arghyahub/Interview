const input = document.querySelector("input");
const defaultTxt = document.getElementById("default");
const debounceTxt = document.getElementById("debounce");
const throttleTxt = document.getElementById("throttle");

const updateDebouncedTxt = debounce((text) => {
  debounceTxt.innerHTML = text;
});
const updateThrottleTxt = throttle((text) => {
  throttleTxt.innerHTML = text;
});

input.addEventListener("input", (e) => {
  defaultTxt.innerHTML = e.target.value;
  updateDebouncedTxt(e.target.value);
  updateThrottleTxt(e.target.value);
});

function debounce(cb, interval = 1000) {
  let intervalIdx;
  return (...args) => {
    clearTimeout(intervalIdx);

    intervalIdx = setTimeout(() => {
      cb(...args);
    }, interval);
  };
}

function throttle(cb, interval = 1000) {
  let shouldWait = false;
  let waitingArgs = null;
  const timeoutFunc = setTimeout(() => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, interval);
    }
  }, interval);

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, interval);
  };
}
