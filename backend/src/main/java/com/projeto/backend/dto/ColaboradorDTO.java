package com.projeto.backend.dto;

import com.projeto.backend.entities.ColaboradorEntity;

public class ColaboradorDTO {

	private Long id;
	private String nome;
	private String departamento;
	private String cargo;
	private Double salario;
	private String descricaocargo;
	
	
	public ColaboradorDTO(Long id, String nome, String departamento, String cargo, Double salario, String descricaocargo) {
		super();
		this.id = id;
		this.nome = nome;
		this.departamento = departamento;
		this.cargo = cargo;
		this.salario = salario;
		this.descricaocargo = descricaocargo;
	}

	public ColaboradorDTO(ColaboradorEntity entity) {
		super();
		this.id = entity.getId();
		this.nome = entity.getNome();
		this.departamento = entity.getDepartamento();
		this.cargo = entity.getCargo();
		this.salario = entity.getSalario();
		this.descricaocargo = entity.getDescricaocargo();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDepartamento() {
		return departamento;
	}

	public void setDepartamento(String departamento) {
		this.departamento = departamento;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public Double getSalario() {
		return salario;
	}

	public void setSalario(Double salario) {
		this.salario = salario;
	}

	public String getDescricaocargo() {
		return descricaocargo;
	}

	public void setDescricaocargo(String descricaocargo) {
		this.descricaocargo = descricaocargo;
	}
}
