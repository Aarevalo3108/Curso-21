document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('formulario');

  const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/;
  const apellidoRegex = /^[a-zA-Z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telefonoRegex = /^\+\d{12}$/;
  const contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  form.addEventListener('input', function(event) {
      const target = event.target;
      let errorMessage = '';

      switch (target.id) {
          case 'nombre':
              if (!nombreRegex.test(target.value)) {
                  errorMessage = 'El nombre solo puede contener letras.';
              }
              break;
          case 'apellido':
              if (!apellidoRegex.test(target.value)) {
                  errorMessage = 'El apellido solo puede contener letras.';
              }
              break;
          case 'email':
              if (!emailRegex.test(target.value)) {
                  errorMessage = 'Por favor, introduce un email válido.';
              }
              break;
          case 'telefono':
              if (!telefonoRegex.test(target.value)) {
                  errorMessage = 'El teléfono debe tener 10 dígitos.';
              }
              break;
          case 'contraseña':
              if (!contraseñaRegex.test(target.value)) {
                  errorMessage = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.';
              }
              break;
          case 'confirmarContraseña':
              const contraseña = document.getElementById('contraseña').value;
              if (target.value !== contraseña) {
                  errorMessage = 'Las contraseñas no coinciden.';
              }
              break;
      }

      document.getElementById(`${target.id}Error`).innerText = errorMessage;
  });

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      let isValid = true;

      const inputs = form.querySelectorAll('input');
      inputs.forEach(input => {
          input.dispatchEvent(new Event('input'));
          if (document.getElementById(`${input.id}Error`).innerText) {
              isValid = false;
          }
      });

      if (isValid) {
          alert('Formulario enviado con éxito!');
          
      }
  });

  // >>>AQUI PARA OCULTAR Y MOSTRAR LA CONTRASEÑA<<<
  document.getElementById('Contraseña2').addEventListener('click', function() {
      const contraseñaInput = document.getElementById('contraseña');
      const type = contraseñaInput.getAttribute('type') === 'password' ? 'text' : 'password';
      contraseñaInput.setAttribute('type', type);
      this.textContent = type === 'password' ? '👁️' : '🙈';
  });

  document.getElementById('ConfirmarContraseña2').addEventListener('click', function() {
      const confirmarContraseñaInput = document.getElementById('confirmarContraseña');
      const type = confirmarContraseñaInput.getAttribute('type') === 'password' ? 'text' : 'password';
      confirmarContraseñaInput.setAttribute('type', type);
      this.textContent = type === 'password' ? '👁️' : '🙈';
  });
});