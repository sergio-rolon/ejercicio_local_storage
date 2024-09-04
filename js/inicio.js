const btnGuardar = document.getElementById("btnGuardar");
const txtNombre = document.getElementById("Name");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById(
  "alertValidacionesTexto"
);
// bandera, al ser true se acciona método para guardar el nombre en el localStorage
let isValid = true;

btnGuardar.addEventListener("click", function (event) {
  event.preventDefault();
  txtNombre.style.border = "";
  alertValidacionesTexto.innerHTML = "";
  alertValidaciones.style.display = "none";
  isValid = true;

  if (txtNombre.value.length < 3 || !isNaN(txtNombre.value)) {
    txtNombre.style.border = "solid red medium";
    alertValidacionesTexto.innerHTML =
      "El <strong> Nombre </strong> no es correcto. <br/>";
    alertValidaciones.style.display = "block";
    isValid = false;
  }
  if (isValid) {
    let namePrueba = txtNombre.value;
    localStorage.setItem("nombre", namePrueba);
    // Limpiamos cuadros
    txtNombre.value = "";
    txtNombre.focus();
  }
});
