

const API_URL = "/usuarios";



const tablaUsuarios = document.getElementById("usuariosTableBody");
const formulario = document.getElementById("usuarioForm");
const mensaje = document.getElementById("mensaje");
const btnActualizar = document.getElementById("btnActualizar");



async function cargarUsuarios() {

    try {

        tablaUsuarios.innerHTML = `
            <tr>
                <td colspan="4">Cargando usuarios...</td>
            </tr>
        `;

        const response = await fetch(`${API_URL}/listarUsuarios`);


        if (!response.ok) {
            throw new Error("Error al obtener los usuarios");
        }


        const usuarios = await response.json();

        mostrarUsuarios(usuarios);

    } catch (error) {

        console.error(error);

        tablaUsuarios.innerHTML = `
            <tr>
                <td colspan="4">
                    No se pudieron cargar los usuarios.
                </td>
            </tr>
        `;
    }
}



function mostrarUsuarios(usuarios) {

    tablaUsuarios.innerHTML = "";


    if (usuarios.length === 0) {

        tablaUsuarios.innerHTML = `
            <tr>
                <td colspan="4">
                    No hay usuarios registrados.
                </td>
            </tr>
        `;

        return;
    }


    usuarios.forEach(usuario => {

        const fila = document.createElement("tr");


        fila.innerHTML = `
            <td>${usuario.id}</td>

            <td>${usuario.username}</td>

            <td>********</td>

            <td>${usuario.role}</td>
        `;


        tablaUsuarios.appendChild(fila);
    });
}



formulario.addEventListener("submit", async function(event) {

    event.preventDefault();


    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;


    const nuevoUsuario = {

        username: username,
        password: password,
        role: role

    };


    try {

        mensaje.textContent = "Creando usuario...";


        const response = await fetch(
            `${API_URL}/crearUsuario`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(nuevoUsuario)
            }
        );


        if (!response.ok) {

            throw new Error(
                "No se pudo crear el usuario"
            );

        }


        const usuarioCreado = await response.json();


        console.log(
            "Usuario creado:",
            usuarioCreado
        );


        mensaje.textContent =
            "Usuario creado correctamente.";


        mensaje.style.color = "green";


        formulario.reset();


        // Volver a cargar la tabla
        cargarUsuarios();


    } catch (error) {

        console.error(error);


        mensaje.textContent =
            "Error al crear el usuario.";


        mensaje.style.color = "red";
    }

});




btnActualizar.addEventListener(
    "click",
    cargarUsuarios
);


cargarUsuarios();