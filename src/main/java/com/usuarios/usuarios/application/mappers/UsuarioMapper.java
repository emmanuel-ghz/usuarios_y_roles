package com.usuarios.usuarios.application.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import com.usuarios.usuarios.application.dtos.usuario.UsuarioRequestDTO;
import com.usuarios.usuarios.application.dtos.usuario.UsuarioResponseDTO;
import com.usuarios.usuarios.core.models.UsuarioModel;

@Mapper(componentModel="spring")
public interface UsuarioMapper {
    
    public UsuarioResponseDTO toResponse(UsuarioModel model);

    @Mapping(target = "id", ignore = true)
    public UsuarioModel toModel(UsuarioRequestDTO dto);

    @Mapping(target = "id", ignore = true)
    public void updateModel(@MappingTarget UsuarioModel model, UsuarioRequestDTO dto);
    
}
