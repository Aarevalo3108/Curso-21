const regex = {
  nombre: /^[a-zA-Z\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\+\d{12}$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
}

// export default regex