window.addEventListener("load", function () {

    let formulario = document.querySelector("form.forms");

    formulario.addEventListener("submit", function (e) {

        let password = document.getElementById("password");

        if (password.value == "") {
            e.preventDefault();
            swal('Validación', 'Falta ingresar password', 'warning')

        }

        let email = document.getElementById("email");

        if (email.value == "") {
            e.preventDefault();
            swal('Validación', 'Falta ingresar email', 'warning')

        }

    })

})