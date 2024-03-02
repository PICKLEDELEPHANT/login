const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Here you can add your logic for handling the login,
  // such as sending a request to your server with the email and password
  // and handling the response.

  console.log(`Email: ${email}, Password: ${password}`);
});