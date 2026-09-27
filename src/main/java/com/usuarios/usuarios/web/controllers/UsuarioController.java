package com.usuarios.usuarios.web.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usuarios.usuarios.application.dtos.usuario.UsuarioRequestDTO;
import com.usuarios.usuarios.application.dtos.usuario.UsuarioResponseDTO;
import com.usuarios.usuarios.application.services.UsuarioService;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping ("/listarUsuarios")
    public List<UsuarioResponseDTO> listarUsuarios(){
        return usuarioService.listarUsuarios();
    }

    @GetMapping ("/{id}")
        public UsuarioResponseDTO buscarUsuario(@PathVariable(name="id") int id){
            return usuarioService.obtenerPorId(id);
    }

    
    @PostMapping ("/crearUsuario")
    public UsuarioResponseDTO crearUsuario(@RequestBody UsuarioRequestDTO dto){
        return usuarioService.crearUsuario(dto);
    }

    
    
}
