// El documento HTML se carga completamente
document.addEventListener("DOMContentLoaded", function() {
  const formularioLogin = document.getElementById("formulario-login");   // ID del formulario de login
  const correo = document.getElementById("correo"); // ID del correo del login
  const password = document.getElementById("contrasena"); // ID de la contraseñamdel login
  const alertaLogin = document.getElementById("alerta-login"); // ID de los mensajes del login

  const enlaceRegistro = document.getElementById("enlace-registro"); // ID del enlca del registro del login
  const enlaceLogin = document.getElementById("enlace-login"); // ID del enlace del login
  const contenedorLogin = document.getElementById("contenedor-login"); // ID del contenedor del login
  const contenedorRegistro = document.getElementById("contenedor-registro"); // ID del contenedor del registro

  const formularioRegistro = document.getElementById("formulario-registro"); // ID del formulario del registro
  const alertaRegistro = document.getElementById("alerta-registro"); // ID de la alerta del registro

  // Cuando se hace clic en "Regístrate aquí"
  enlaceRegistro.addEventListener("click", function(e) {
    e.preventDefault(); // Previene que el enlace recargue la página
    contenedorLogin.style.display = "none"; // Se oculta el formulario de login
    contenedorRegistro.style.display = "block"; //Se muestra el formulario de registro
  });

  // Volver al login al hacer clic en "Inicia sesión"
  enlaceLogin.addEventListener("click", function(e) {
    e.preventDefault(); // Previene recarga de la página
    contenedorRegistro.style.display = "none"; //Se oculta el formulario de registro
    contenedorLogin.style.display = "block"; // Se muestra el formulario de login
  });

  // Validar el correo y contraseña ingresado por el usuario
  formularioLogin.addEventListener("submit", function(e) {
    e.preventDefault(); // Previene que se recargue la página al enviar el formulario
    const usuario = correo.value.trim(); //Se otiene el valor del correo, eliminando espacios
    const contrasena = password.value.trim(); //Se otiene el valor de la contraseña, eliminando espacios

    //Se valida si el correo o contraseña tiene datos vacios
    if (usuario === "" || contrasena === "") {
      mostrarAlerta(alertaLogin, "Todos los campos son obligatorios", "error"); // Se muestra el mensaje de alerta al usuario
      return;
    }

     // Se valida por medio de una expresión regular para verificar si el correo es válido
    const esEmailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario); //expresion regular
    if (!esEmailValido) {
      mostrarAlerta(alertaLogin, "Debe ingresar un correo válido", "advertencia"); // Se muestra el mensaje de alerta al usuario
      return;
    }

    //se valida que el correo y contraseña sean iguales
    if (usuario === "biani@gmail.com" && contrasena === "020624") {
      mostrarAlerta(alertaLogin, "¡Inicio de sesión exitoso!", "exito"); // Se muestra el mensaje de alerta al usuario
      setTimeout(() => {
        window.location.href = "pag-bootstrap.html";
      }, 1500); // Se redirecciona a la página web después de 1.5 segundos
    } 
    // Si el usuario o contraseña están mal
    else {
      mostrarAlerta(alertaLogin, "Usuario o contraseña incorrecta", "error"); // Se muestra el mensaje de alerta al usuario
    }
  });

  // Validar registro
  formularioRegistro.addEventListener("submit", function(e) {
    e.preventDefault();

    const nuevoUsuario = document.getElementById("input-nuevo-usuario").value.trim(); // ID del nuevo correo, eliminando espacios
    const nuevaContrasena = document.getElementById("input-nueva-contrasena").value.trim(); // ID de la nueva contraseña, eliminando espacios
    const confirmarContrasena = document.getElementById("input-confirmar-contrasena").value.trim(); // ID de confirmacion de contraseña, eliminando espacios

    //se valida de que ningun campo este vacio
    if (nuevoUsuario === "" || nuevaContrasena === "" || confirmarContrasena === "") {
      mostrarAlerta(alertaRegistro, "Todos los campos son obligatorios", "error"); // Se muestra el mensaje de alerta al usuario
      return;
    }

    // Se verifica que el correo electrónico ingresado sea válido
    const esEmailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nuevoUsuario); //Expresion regular
    if (!esEmailValido) {
      mostrarAlerta(alertaRegistro, "Ingrese un correo válido", "advertencia"); // Se muestra el mensaje de alerta al usuario
      return;
    }

    // Se verifica que las contraseñas coincidan
    if (nuevaContrasena !== confirmarContrasena) {
      mostrarAlerta(alertaRegistro, "Las contraseñas no coinciden", "advertencia"); // Se muestra el mensaje de alerta al usuario
      return;
    }

    // Si todo los datos son correctos
    mostrarAlerta(alertaRegistro, "¡Registro exitoso!", "exito"); // Se muestra el mensaje de alerta al usuari
    setTimeout(() => {
      window.location.href = "login2.html";
    }, 1500); // Se vuelve al formulario de login despues de 1.5 segundos
  });

  // Función para mostrar alertas
  function mostrarAlerta(elemento, mensaje, tipo) {
    elemento.className = "alerta"; // Se impiam las clases anteriores y pone la clase base
    
     // Se cambia de estilo según el tipo de mensaje
    if (tipo === "exito") {
      elemento.style.backgroundColor = "#d4edda"; // Verde claro
      elemento.style.color = "#155724"; // Verde oscuro
      elemento.style.borderColor = "#c3e6cb"; // Borde verde
    } 

    else if (tipo === "error") {
      elemento.style.backgroundColor = "#f8d7da"; // Rojo claro
      elemento.style.color = "#721c24"; // Rojo oscuro
      elemento.style.borderColor = "#f5c6cb"; // Borde rojo
    } 

    else if (tipo === "advertencia") {
      elemento.style.backgroundColor = "#fff3cd"; // Amarillo claro
      elemento.style.color = "#856404"; // Amarillo oscuro
      elemento.style.borderColor = "#ffeeba"; // Borde amarillo
    }

    elemento.textContent = mensaje; // Se muestra el mensaje en texto
    elemento.style.display = "block"; // Se hace visible el contenedor

    // Se oculta la alerta después de 3.5 segundos
    setTimeout(() => {
      elemento.style.display = "none";
    }, 3500);
  }
});