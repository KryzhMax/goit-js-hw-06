// Refs
const formRef = document.querySelector(".login-form");

// Functions
const handleSub = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Fill out all form");
  }
  console.log(`email: ${email.value}, password: ${password.value}`);
  event.currentTarget.reset();
};

// Listeners
formRef.addEventListener("submit", handleSub);
