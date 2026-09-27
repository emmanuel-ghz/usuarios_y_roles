const API_URL = "/usuarios";

// ================================
// ELEMENTOS DEL HTML
// ================================

const tablaUsuarios = document.getElementById("tablaUsuarios");

const formulario = document.getElementById("formUsuario");

const mensajeFormulario =
    document.getElementById("mensajeFormulario");

const btnActualizar =
    document.getElementById("btnRecargar");

const mensajeTabla =
    document.getElementById("mensajeTabla");


// Elementos para búsqueda

const formularioBusqueda =
    document.getElementById("formBuscarUsuario");

const buscarId =
    document.getElementById("buscarId");

const btnLimpiarBusqueda =
    document.getElementById("btnLimpiarBusqueda");

const mensajeBusqueda =
    document.getElementById("mensajeBusqueda");


// ======================================
// CARGAR USUARIOS
// ======================================

async function cargarUsuarios() {

    try {

        tablaUsuarios.innerHTML = `
            <tr>
                <td colspan="4">
                    Cargando usuarios...
                </td>
            </tr>
        `;

        mensajeTabla.textContent = "";

        const response = await fetch(
            `${API_URL}/listarUsuarios`
        );

        if (!response.ok) {
            throw new Error(
                "Error al obtener los usuarios"
            );
        }

        const usuarios = await response.json();

        mostrarUsuarios(usuarios);

        mensajeTabla.textContent =
            `${usuarios.length} usuario(s) encontrado(s).`;

    } catch (error) {

        console.error(error);

        tablaUsuarios.innerHTML = `
            <tr>
                <td colspan="4">
                    No se pudieron cargar los usuarios.
                </td>
            </tr>
        `;

        mensajeTabla.textContent =
            "Ocurrió un error al consultar la información.";
    }
}


// ======================================
// MOSTRAR USUARIOS
// ======================================

function mostrarUsuarios(usuarios) {

    tablaUsuarios.innerHTML = "";

    if (!usuarios || usuarios.length === 0) {

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


// ======================================
// MOSTRAR UN SOLO USUARIO
// ======================================

function mostrarUsuario(usuario) {

    tablaUsuarios.innerHTML = "";

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.username}</td>
        <td>********</td>
        <td>${usuario.role}</td>
    `;

    tablaUsuarios.appendChild(fila);

    mensajeTabla.textContent =
        "Resultado de la búsqueda.";
}


// ======================================
// BUSCAR USUARIO POR ID
// ======================================

formularioBusqueda.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();

        const id = buscarId.value.trim();

        if (!id || Number(id) <= 0) {

            mensajeBusqueda.textContent =
                "Ingrese un ID válido.";

            mensajeBusqueda.style.color = "#dc2626";

            return;
        }

        try {

            mensajeBusqueda.textContent =
                "Buscando usuario...";

            mensajeBusqueda.style.color = "#64748b";

            tablaUsuarios.innerHTML = `
                <tr>
                    <td colspan="4">
                        Buscando usuario con ID ${id}...
                    </td>
                </tr>
            `;

            /*
             * Endpoint esperado:
             * GET /usuarios/buscarUsuario?id=1
             */

            const response = await fetch(
                `${API_URL}/buscarUsuario?id=${encodeURIComponent(id)}`
            );

            if (!response.ok) {

                if (response.status === 404) {
                    throw new Error(
                        "No se encontró un usuario con ese ID."
                    );
                }

                throw new Error(
                    "Error al buscar el usuario."
                );
            }

            const usuario = await response.json();

            mostrarUsuario(usuario);

            mensajeBusqueda.textContent =
                `Usuario con ID ${id} encontrado correctamente.`;

            mensajeBusqueda.style.color = "#16a34a";

        } catch (error) {

            console.error(error);

            tablaUsuarios.innerHTML = `
                <tr>
                    <td colspan="4">
                        ${error.message}
                    </td>
                </tr>
            `;

            mensajeTabla.textContent = "";

            mensajeBusqueda.textContent =
                error.message;

            mensajeBusqueda.style.color = "#dc2626";
        }
    }
);


// ======================================
// LIMPIAR BÚSQUEDA
// ======================================

btnLimpiarBusqueda.addEventListener(
    "click",
    function () {

        buscarId.value = "";

        mensajeBusqueda.textContent = "";

        cargarUsuarios();
    }
);


// ======================================
// CREAR USUARIO
// ======================================

formulario.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value;

        const role =
            document.getElementById("role").value.trim();


        const nuevoUsuario = {
            username: username,
            password: password,
            role: role
        };


        try {

            mensajeFormulario.textContent =
                "Creando usuario...";

            mensajeFormulario.style.color =
                "#64748b";


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


            const usuarioCreado =
                await response.json();

            console.log(
                "Usuario creado:",
                usuarioCreado
            );


            mensajeFormulario.textContent =
                "Usuario creado correctamente.";

            mensajeFormulario.style.color =
                "#16a34a";


            formulario.reset();


            // Actualizar tabla

            cargarUsuarios();

        } catch (error) {

            console.error(error);

            mensajeFormulario.textContent =
                "Error al crear el usuario.";

            mensajeFormulario.style.color =
                "#dc2626";
        }
    }
);


// ======================================
// BOTÓN ACTUALIZAR
// ======================================

btnActualizar.addEventListener(
    "click",
    function () {

        mensajeBusqueda.textContent = "";

        buscarId.value = "";

        cargarUsuarios();
    }
);


// ======================================
// CARGAR USUARIOS AL INICIAR
// ======================================

cargarUsuarios();