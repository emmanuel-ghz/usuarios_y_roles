package com.usuarios.usuarios.application.services;

import com.usuarios.usuarios.core.repository.UsuarioRepository;

public class UsuarioService {
    
    UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    
}
