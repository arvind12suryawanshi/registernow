const text = "REGISTER NOW";
const heading = document.getElementById("register-heading1");

let charIndex = 0;

function animateText() {
  heading.textContent = text.substring(0, charIndex);
  charIndex = (charIndex + 1) % (text.length + 1);
  setTimeout(animateText, charIndex === 0 ? 2000 : 150);
}

animateText();





