package com.usuarios.usuarios.web.controllers;

import com.usuarios.usuarios.application.services.UsuarioService;

public class UsuarioController {
    UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    
}
