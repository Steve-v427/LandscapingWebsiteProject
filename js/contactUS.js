// Check if the Frist Name contains any numbers.
const fNameInput = document.getElementById("fName");

// Uses event listener to detect input
fNameInput.addEventListener("input", (event) => {
  const input = event.target.value;
  // Defines the allows characters
  const regex = /[^a-zA-Z\s]/g;
  // Detects if the input is allowed
  if (regex.test(input)) {
    event.target.setCustomValidity("Please enter only letters and spaces.");
  } else {
    event.target.setCustomValidity("");
  }
});

// Check if the Last Name contains any numbers.
const lNameInput = document.getElementById("lName");

// Uses event listener to detect input
lNameInput.addEventListener("input", (event) => {
  const input = event.target.value;
  // Defines the allows characters
  const regex = /[^a-zA-Z\s]/g;
  // Detects if the input is allowed
  if (regex.test(input)) {
    event.target.setCustomValidity("Please enter only letters and spaces.");
  } else {
    event.target.setCustomValidity("");
  }
});

// Check if the Last Name contains any numbers.
const phoneInput = document.getElementById("Phone");

// Uses event listener to detect input
phoneInput.addEventListener("input", (event) => {
  const input = event.target.value;
  // Defines the allows characters
  const regex = /[a-zA-Z]/g;
  // Detects if the input is allowed
  if (regex.test(input)) {
    event.target.setCustomValidity("Phone number should not contain letters.");
  } else {
    event.target.setCustomValidity("");
  }
});

// Gets element by id from form in past projects
const form = document.getElementById("contact-form");
// Uses event listener to detect submit event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Alerts the user their information was submitted
  alert("Thank you for your infromation. We will contact to you soon.");
  form.reset();
});
