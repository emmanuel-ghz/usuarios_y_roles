package com.usuarios.usuarios.application.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import com.usuarios.usuarios.application.dtos.usuario.UsuarioRequestDTO;
import com.usuarios.usuarios.application.dtos.usuario.UsuarioResponseDTO;
import com.usuarios.usuarios.core.models.UsuarioModel;

@Mapper
public interface UsuarioMapper {
    
    public UsuarioResponseDTO toResponse(UsuarioModel model);

    public UsuarioModel toModel(UsuarioResponseDTO dto);

    public void updateModel(@MappingTarget UsuarioModel model, UsuarioRequestDTO dto);
    
}
