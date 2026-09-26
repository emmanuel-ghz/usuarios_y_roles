package com.usuarios.usuarios.application.dtos.usuario;

import jakarta.annotation.Nonnull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@NoArgsConstructor 
@AllArgsConstructor 
public class UsuarioResponseDTO {
    @Nonnull 
    private Integer id;
    private String username;
    private String password;
    private String role;
}
