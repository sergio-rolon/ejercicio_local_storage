const btnEliminar = document.getElementById("btnEliminar");
const txtBienvenida = document.getElementById("txtBienvenida");

window.addEventListener("load", function () {
  if (this.localStorage.getItem("nombre") != null) {
    txtBienvenida.innerText = `Hola, ${this.localStorage.getItem(
      "nombre"
    )} bienvenido/a de nuevo`;
  }
});

btnEliminar.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.clear();
  txtBienvenida.innerText = "Por favor ve al index e ingresa tu nombre";
});
