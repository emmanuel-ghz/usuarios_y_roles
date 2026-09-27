# Backlog de Casos de Estudio: Java Layered Architecture (CRUD Básico - Listado e Inserción)



---

## Índice del Backlog
1. [CS-008: Gestión de Usuarios y Roles](#cs-008-gestion-de-usuarios-y-roles)

---

### CS-008: Gestión de Usuarios y Roles
* **Tipo de Issue:** User Story
* **Prioridad:** Alta
* **Estimación:** 3 Story Points

#### Descripción
Como estudiante de programación, quiero implementar un registro de usuarios del sistema para almacenar credenciales básicas y listar los perfiles existentes mediante arquitectura en capas.

#### Criterios de Aceptación
1. **Capa de Persistencia:**
   * Entidad `UserAccount` (`id`, `username`, `password`, `role`).
   * Repositorio de base de datos para insertar y listar las cuentas de usuario.
2. **Capa de Negocio:**
   * `UserService` que procese las solicitudes de registro y recuperación de listas de usuarios.
3. **Capa de Presentación:**
   * Controlador o menú que interactúe con el usuario para capturar su nombre de usuario, contraseña, rol y listar los usuarios registrados.

---