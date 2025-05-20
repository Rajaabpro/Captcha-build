let captchaCode = '';

function generateCaptcha() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  captchaCode = '';
  for (let i = 0; i < 6; i++) {
    captchaCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('captcha').textContent = captchaCode;
}
function validateCaptcha() {
    const userInput = document.getElementById('userInput').value;
    const result = document.getElementById('result');
  
    if (userInput === captchaCode) {
      result.style.color = 'green';
      result.textContent = 'CAPTCHA verified!';
    } else {
      result.style.color = 'red';
      result.textContent = 'Incorrect CAPTCHA. Try again.';
      generateCaptcha(); // refresh captcha on failure
    }
  }
  
  window.onload = generateCaptcha;
