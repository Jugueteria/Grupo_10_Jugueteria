window.addEventListener("load", function () {

    let formulario = document.querySelector("form.Formulario");

    formulario.addEventListener("submit", function (e) {


        let descripcion= document.getElementById("descripcionCorta");

        if (descripcion.value == "") {
            e.preventDefault();
            swal('Validación', 'Falta ingresar descripcíon del articulo', 'warning')

        }else if(descripcion.value.length<20){
            e.preventDefault();
            swal('Validación', 'La descripción del articulo debe tener mínimo 20 caracteres', 'warning')
        }

        let precio = document.getElementById("precio");

        if (precio.value == "") {
            e.preventDefault();
            swal('Validación', 'Falta ingresar el precio del articulo', 'warning')
        }

        let titulo = document.getElementById("titulo");

        if (titulo.value == "") {
            e.preventDefault();
            swal('Validación', 'Falta ingresar Nombre del articulo', 'warning')
        }else if(titulo.value.length<5){
            swal('Validación', 'El nombre del articulo tener mínimo 5 caracteres', 'warning')
        }

    })

})