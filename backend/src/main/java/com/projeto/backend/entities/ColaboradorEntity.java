package com.projeto.backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_colaborador")
public class ColaboradorEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(unique = true)
	private String nome;
	
	private String departamento;
	private String cargo;
	private Double salario;
	
	@Column(columnDefinition = "TEXT")
	private String descricaocargo;
	
	public ColaboradorEntity() {
		
	}
	
	public ColaboradorEntity(Long id, String nome, String departamento, String cargo, Double salario,
			String descricaocargo) {
		super();
		this.id = id;
		this.nome = nome;
		this.departamento = departamento;
		this.cargo = cargo;
		this.salario = salario;
		this.descricaocargo = descricaocargo;
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
