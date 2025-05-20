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
  
}
  window.onload = generateCaptcha;
