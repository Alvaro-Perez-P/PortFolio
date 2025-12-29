window.onload = function () {
  let modoNoche = document.getElementById("modoNoche");
  let luna = document.getElementById("icono");
  let modoTexto = document.getElementById("modoTexto");

  modoNoche.onclick = function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      modoTexto.textContent = " Modo dia";
      luna.classList.replace("fa-moon", "fa-sun");
    } else {
      modoTexto.textContent = " Modo noche";
      luna.classList.replace("fa-sun", "fa-moon");
    }
  };
  (function () {
    emailjs.init("pWqztziDEP28QOd-s");
  })();

  const form = document.getElementById("contact-form");
  const msg = document.getElementById("msg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    

    emailjs.sendForm("service_g5wfqdk", "template_9mpfidc", this).then(
      function () {
        msg.className = "alert alert-success";
        msg.textContent = "Mensaje enviado correctamente";
        msg.classList.remove("d-none");
        form.reset();
      },
      function (error) {
        msg.className = "alert alert-danger";
        msg.textContent = "Error al enviar el mensaje";
        msg.classList.remove("d-none");
      }
    );
  });
};
