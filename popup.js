// Get buttons and modals
const signupBtn = document.querySelector(".najavi");
const loginBtn = document.querySelector(".login-btn");
const registerModal = document.getElementById("registerModal");
const loginModal = document.getElementById("loginModal");
const closeButtons = document.querySelectorAll(".close");

// Open Register modal
signupBtn.addEventListener("click", () => {
  registerModal.style.display = "flex";
});

// Open Login modal
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

// Close modals when clicking the close button
closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

// Close modal when clicking outside modal content
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
