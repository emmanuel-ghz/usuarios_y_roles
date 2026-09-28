# usuarios_y_roles

Aplicación Spring Boot para gestionar usuarios y roles sobre PostgreSQL.

## Requisitos

- Java 21
- PostgreSQL en ejecución, con `psql` disponible en la terminal
- Maven no es necesario: el proyecto incluye el wrapper `./mvnw`

## Ejecución

### 1. Preparar la base de datos

Crea la base `usuarios_roles` con la tabla `user_account` y sus usuarios iniciales:

```bash
psql -U postgres -f src/main/resources/db/usuarios_roles.sql
```

> **Importante:** el script borra la base `usuarios_roles` si ya existe y la vuelve a crear.

Para instrucciones detalladas sobre la configuración de la base de datos (requisitos, verificación, usuarios creados y casos especiales), consulta [`src/main/resources/db/README.md`](src/main/resources/db/README.md).

### 2. Revisar la conexión

La conexión se define en `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/usuarios_roles
spring.datasource.username=postgres
spring.datasource.password=postgres
```

Ajusta el usuario y la contraseña a los de tu instalación de PostgreSQL.

### 3. Levantar la aplicación

```bash
./mvnw spring-boot:run
```

En Windows:

```bash
mvnw.cmd spring-boot:run
```

### 4. Abrir la interfaz

Abre [http://localhost:8080](http://localhost:8080) en el navegador.
