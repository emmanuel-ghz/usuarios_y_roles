# Base de datos `usuarios_roles`

Script para crear en PostgreSQL la base de datos `roles_usuarios` con la tabla `user_account` y sus usuarios iniciales.

## Requisitos

- PostgreSQL instalado y en ejecución.
- `psql` disponible en la terminal.

## Ejecución

Desde la carpeta donde está el archivo `usuarios_roles.sql`:

```bash
psql -U postgres -f usuarios_roles.sql
```

Se pedirá la contraseña del usuario `postgres`. Al terminar, se mostrará el contenido de la tabla `user_account`.

> **Importante:** el script debe ejecutarse con `psql`, ya que usa el comando `\c` para conectarse a la nueva base.
> Además, borra la base `roles_usuarios` si ya existe y la vuelve a crear.

### Si el usuario `postgres` no existe (macOS con Homebrew o Postgres.app)

```bash
psql -d postgres -f usuarios_roles.sql
```

## Verificación

```bash
psql -U postgres -d usuarios_roles -c "select * from user_account;"
```

## Usuarios creados

Todos tienen la contraseña `password` (almacenada como hash BCrypt).

| username | role  |
|----------|-------|
| jesus    | USER  |
| emmanuel | USER  |
| angel    | USER  |
| luis     | USER  |
| andrik   | ADMIN |
| admin    | ADMIN |

## Conexión desde Spring Boot

En `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/roles_usuarios
spring.datasource.username=postgres
spring.datasource.password=tu_contraseña
```
