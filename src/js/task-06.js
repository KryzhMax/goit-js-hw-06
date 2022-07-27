// Refs
const inputRef = document.querySelector("#validation-input");
// Func
const changeClass = (add, rem) => {
  inputRef.classList.add(add);
  inputRef.classList.remove(rem);
};
const onBlur = (event) => {
  console.dir(event);
  const { value } = event.target;
  if (value.length === Number(inputRef.getAttribute("data-length"))) {
    changeClass("valid", "invalid");
  } else {
    changeClass("invalid", "valid");
  }
};

// Listeners
inputRef.addEventListener("blur", onBlur);
