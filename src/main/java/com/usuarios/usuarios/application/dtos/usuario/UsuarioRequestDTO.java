package com.usuarios.usuarios.application.dtos.usuario;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor 
@NoArgsConstructor
public class UsuarioRequestDTO {
    private String username;
    private String password;
    private String role;
}