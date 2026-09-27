package com.usuarios.usuarios.web.controllers;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usuarios.usuarios.application.dtos.usuario.UsuarioRequestDTO;
import com.usuarios.usuarios.application.dtos.usuario.UsuarioResponseDTO;
import com.usuarios.usuarios.application.services.UsuarioService;

@RestController
public class UsuarioController {
    UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    
    @RequestMapping ("/crearUsuario")
    public UsuarioResponseDTO crearUsuario(@RequestBody UsuarioRequestDTO dto){
        return usuarioService.crearUsuario(dto);
    }

    
    
}
