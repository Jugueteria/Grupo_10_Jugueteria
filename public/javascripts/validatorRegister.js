window.addEventListener("load", function () {

    let formulario = document.querySelector("form.register");

    formulario.addEventListener("submit", function (e) {


        let password = document.getElementById("password");

        if (password.value == "") {
            e.preventDefault();
            swal('Validación', 'Falta ingresar Password', 'warning')
            
        }else if(password.value.length<8){
            e.preventDefault();
            swal('Validación', 'La contraseña debe tener mínimo 8 caracteres', 'warning')
        }

        let email = document.getElementById("email");

        if (email.value == "") {
            e.preventDefault();
            swal('Validación', 'Falta ingresar Email', 'warning')
        }else if(email.value.indexOf("@")== -1){
            swal('Validación', 'El correo debe ser valido', 'warning')
        }

        let last_name = document.getElementById("last_name");

        if (last_name.value == "") {
            e.preventDefault();
            swal('Validación', 'Falta ingresar Apellidos', 'warning')

        }else if(last_name.value.length<2){
            swal('Validación', 'Los apellidos deben tener mínimo 2 caracteres', 'warning')
        }

        let first_name = document.getElementById("first_name");

        if (first_name.value == "") {
            e.preventDefault();
            swal('Validación', 'Falta ingresar Nombres', 'warning')
        }else if(first_name.value.length<2){
            swal('Validación', 'Los nombres deben tener mínimo 2 caracteres', 'warning')
        }

    })

})