const form = document.querySelector("form.login-form");
const inputs = [...form.elements];
const user = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = inputs[0];
  const pwd = inputs[1];

  if (!email.value || !pwd.value) {
    alert("FILL ALL FIELDS");
  } else {
    user[email.getAttribute("type")] = email.value;
    user[pwd.getAttribute("type")] = pwd.value;
    console.log(`
        *********************
        USER: ${user.email}
        PWD: ${user.password}
        *********************
      `);
  }
  form.reset();
});
