const addTask = () => {
  const input = document.getElementById('taskInput');
  console.log(input.value);

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.textContent = input.value;

  const tarea = {
    id: Date.now(),
    title: input.value
  }

  let tareas = [];

  if (sessionStorage.getItem('tareas')) {
    // tareas = JSON.parse(localStorage.getItem('tareas'));
    tareas = JSON.parse(sessionStorage.getItem('tareas'));
  }

  tareas.push(tarea);
  // localStorage.setItem('tareas', JSON.stringify(tareas));
  sessionStorage.setItem('tareas', JSON.stringify(tareas));

  taskList.appendChild(li);
  input.value = '';
}

deleteTask = (id) => {
  const taskList = document.getElementById('taskList');
  // const tareas = JSON.parse(localStorage.getItem('tareas'));
  const tareas = JSON.parse(sessionStorage.getItem('tareas'));
  const tareasFiltradas = tareas.filter(tarea => tarea.id !== id);
  // localStorage.setItem('tareas', JSON.stringify(tareasFiltradas));
  sessionStorage.setItem('tareas', JSON.stringify(tareasFiltradas));
  taskList.innerHTML = '';
  gettasks();
}


gettasks = () => {
  const taskList = document.getElementById('taskList');
  // const tareas = JSON.parse(localStorage.getItem('tareas'));
  const tareas = JSON.parse(sessionStorage.getItem('tareas'));
  if(!tareas) return;
  tareas.forEach(tarea => {
    const li = document.createElement('li');
    li.innerHTML = 
    `
      <span>${tarea.title}</span>
      <button class="eliminar" onclick="deleteTask(${tarea.id})">X</button>
    `;
    taskList.appendChild(li);
  });
  //Ejemplo de una cookie que se elimina en 1 día
  let fechaActual = new Date();
  let fechaExpiracion = new Date(fechaActual.getTime() + 1 * 24 * 60 * 60 * 1000);
  const datos = {
    name: "Hola",
    numero: 1,
    total: 10
  }
  document.cookie = `name=${JSON.stringify(datos)}; expires=${fechaExpiracion.toUTCString()}; path=/`;

  console.log(document.cookie);
}

gettasks();