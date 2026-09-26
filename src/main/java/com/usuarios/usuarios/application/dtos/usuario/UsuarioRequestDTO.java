package com.usuarios.usuarios.application.dtos.usuario;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data 
@AllArgsConstructor 
@NoArgsConstructor
public class UsuarioRequestDTO {
    @NonNull 
    private Integer id;
    private String username;
    private String password;
    private String role;
}