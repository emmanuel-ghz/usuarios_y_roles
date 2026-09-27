

const API_URL = "/api/usuarios";



const tablaUsuarios = document.getElementById("tablaUsuarios");

const mensajeTabla = document.getElementById("mensajeTabla");

const formUsuario = document.getElementById("formUsuario");

const mensajeFormulario =
    document.getElementById("mensajeFormulario");

const btnRecargar =
    document.getElementById("btnRecargar");




async function obtenerUsuarios() {

    try {

        mensajeTabla.textContent =
            "Cargando usuarios...";

        const response = await fetch(API_URL);

        if (!response.ok) {

            throw new Error(
                "Error al obtener los usuarios"
            );

        }

        const usuarios = await response.json();

        mostrarUsuarios(usuarios);

    } catch (error) {

        console.error(error);

        mensajeTabla.textContent =
            "No se pudieron cargar los usuarios.";

    }

}



function mostrarUsuarios(usuarios) {

    tablaUsuarios.innerHTML = "";

    if (!usuarios || usuarios.length === 0) {

        mensajeTabla.textContent =
            "No existen usuarios registrados.";

        return;
    }

    mensajeTabla.textContent = "";

    usuarios.forEach(usuario => {

        const fila = document.createElement("tr");

        fila.innerHTML = `

            <td>${usuario.id ?? ""}</td>

            <td>${usuario.username ?? ""}</td>

            <td>${usuario.password ?? ""}</td>

            <td>${usuario.role ?? ""}</td>

        `;

        tablaUsuarios.appendChild(fila);

    });

}




async function insertarUsuario(usuario) {

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(usuario)

        });


        if (!response.ok) {

            throw new Error(
                "Error al insertar el usuario"
            );

        }


        const usuarioCreado =
            await response.json();


        console.log(
            "Usuario creado:",
            usuarioCreado
        );


        mensajeFormulario.textContent =
            "Usuario registrado correctamente.";


        formUsuario.reset();

        obtenerUsuarios();


    } catch (error) {

        console.error(error);

        mensajeFormulario.textContent =
            "No se pudo registrar el usuario.";

    }

}


formUsuario.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const username =
            document.getElementById("username").value;

        const password =
            document.getElementById("password").value;

        const role =
            document.getElementById("role").value;


        // Objeto que coincide con
        // UsuarioResponseDTO

        const usuario = {

            username: username,

            password: password,

            role: role

        };


        await insertarUsuario(usuario);

    }
);




btnRecargar.addEventListener(
    "click",
    obtenerUsuarios
);



document.addEventListener(
    "DOMContentLoaded",
    obtenerUsuarios
);