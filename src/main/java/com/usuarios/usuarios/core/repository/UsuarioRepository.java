package com.usuarios.usuarios.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.usuarios.usuarios.core.models.UsuarioModel;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, Integer>{

}
