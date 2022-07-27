// Refs
const wrapperRef = document.querySelector("#counter");
const counter = document.querySelector("#value");
const decButtonRef = document.querySelector('[data-action="decrement"]');
const incButtonRef = document.querySelector('[data-action="increment"]');
let counterValue = 0;

// Functions
const increase = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

const decrease = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

// Listeners
incButtonRef.addEventListener("click", increase);
decButtonRef.addEventListener("click", decrease);
