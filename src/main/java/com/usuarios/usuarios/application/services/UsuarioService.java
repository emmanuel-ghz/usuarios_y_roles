package com.usuarios.usuarios.application.services;

import com.usuarios.usuarios.application.mappers.UsuarioMapper;
import com.usuarios.usuarios.core.repository.UsuarioRepository;

public class UsuarioService {
    
    UsuarioRepository usuarioRepository;
    UsuarioMapper usuarioMapper;
    public UsuarioService(UsuarioRepository usuarioRepository, UsuarioMapper usuarioMapper) {
        this.usuarioRepository = usuarioRepository;
        this.usuarioMapper = usuarioMapper;
    }
    
}
