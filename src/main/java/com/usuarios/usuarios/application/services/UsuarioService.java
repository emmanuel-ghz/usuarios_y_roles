package com.usuarios.usuarios.application.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.usuarios.usuarios.application.dtos.usuario.UsuarioRequestDTO;
import com.usuarios.usuarios.application.dtos.usuario.UsuarioResponseDTO;
import com.usuarios.usuarios.application.mappers.UsuarioMapper;
import com.usuarios.usuarios.core.repository.UsuarioRepository;

@Service
public class UsuarioService {
    
    UsuarioRepository usuarioRepository;
    UsuarioMapper usuarioMapper;
    
    public UsuarioService(UsuarioRepository usuarioRepository, UsuarioMapper usuarioMapper) {
        this.usuarioRepository = usuarioRepository;
        this.usuarioMapper = usuarioMapper;
    }

    public List<UsuarioResponseDTO>listarUsuarios(){
        return usuarioRepository.findAll().stream().map(usuarioMapper::toResponse).toList();
    }

    public UsuarioResponseDTO obtenerPorId(int id){
        return usuarioMapper.toResponse(usuarioRepository.findById(id).orElseThrow());
    }

    public UsuarioResponseDTO crearUsuario(UsuarioRequestDTO dto){
        return usuarioMapper.toResponse(usuarioRepository.save(usuarioMapper.toModel(dto)));

    }


    
}
