
const enviar = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = {
    id: Date.now(),
    name,
    email,
    password
  };

  let registros = [];

  if (localStorage.getItem("registros")) {
    registros = JSON.parse(localStorage.getItem("registros"));
  }
  // debugger;
  registros.push(data);

  localStorage.setItem("registros", JSON.stringify(registros));

  const cookie = `Sesion=${JSON.stringify(data)}; expires=${new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()}; path=/`;

  document.cookie = cookie;

}

