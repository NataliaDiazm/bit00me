const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}


// FUNCIONALIDAD FORMULARIO 

const modal = document.getElementById("modal");
const cerrarBtn = document.getElementsByClassName("closed")[0];

document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // Para obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  const datosModal = document.getElementById("datos-modal");
  datosModal.textContent = nombre;
  modal.style.display = "block";

  console.log("Nombre:", nombre);
  console.log(email);
  console.log(mensaje);
});

cerrarBtn.addEventListener("click", function () {
  modal.style.display = "none";
  location.reload();
  
});