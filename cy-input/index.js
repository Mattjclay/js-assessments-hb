const registerInformationContainer = document.querySelector(
  "#register-information-container"
);
const registerForm = document.querySelector("#register-form");

const baseURL = `http://localhost:4004/api/register`;

const postRegister = (body) =>
  axios
    .post(baseURL, body)
    .then((res) => {
      console.log(res.data);
      alert(res.data);
    })
    .catch((err) => {
      console.log(err);
      alert(err.response.data);
    });

function submitHandler(e) {
  e.preventDefault();

  let email = document.querySelector("#email-input");
  let username = document.querySelector("#username-input");
  let password = document.querySelector("#password-input");
  let passwordCheck = document.querySelector("#password-confirmation-input");

  if (!email.value) {
    alert("Please provide an email.");
    return;
  }
  if (!username.value) {
    alert("Please provide a username.");
    return;
  }
  if (!password.value) {
    alert("Please provide a password.");
    return;
  }
  if (password.value !== passwordCheck.value) {
    alert("Your passwords don't match.");
    return;
  }

  let bodyObj = {
    email: email.value,
    username: username.value,
    password: password.value,
    passwordCheck: passwordCheck.value,
  };

  postRegister(bodyObj);

  email.value = "";
  username.value = "";
  password.value = "";
  passwordCheck.value = "";
}

registerForm.addEventListener("submit", submitHandler);
