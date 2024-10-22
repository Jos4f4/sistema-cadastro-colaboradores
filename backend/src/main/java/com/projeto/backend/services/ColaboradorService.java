package com.projeto.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.projeto.backend.dto.ColaboradorDTO;
import com.projeto.backend.entities.ColaboradorEntity;
import com.projeto.backend.repository.ColaboradorRepository;

@Service
public class ColaboradorService {
	
	@Autowired
	ColaboradorRepository colaboradorRepository;

	
	@Transactional(readOnly = true)
	public ColaboradorDTO findById(Long id) {
		ColaboradorEntity colaboradorEntity = colaboradorRepository.findById(id).get();
		return new ColaboradorDTO(colaboradorEntity);
	}
	
	@Transactional(readOnly = true)
	public Page<ColaboradorDTO> findAll(Pageable pageable) {
		Page<ColaboradorEntity> colaboradorEntity = colaboradorRepository.findAll(pageable);
		return colaboradorEntity.map(x -> new ColaboradorDTO(x));
	}
	
	@Transactional
	public ColaboradorDTO insert(ColaboradorDTO dto) {
		ColaboradorEntity entity = new ColaboradorEntity();
		copyDtoToEntity(dto, entity);
		entity = colaboradorRepository.save(entity);
		return new ColaboradorDTO(entity);
	}
	
	@Transactional
	public ColaboradorDTO update(Long id, ColaboradorDTO dto) {
		ColaboradorEntity entity = colaboradorRepository.getReferenceById(id);		
			copyDtoToEntity(dto, entity);
			entity = colaboradorRepository.save(entity);
			return new ColaboradorDTO(entity);

	}
	
	@Transactional(propagation = Propagation.SUPPORTS)
	public void delete(Long id) {
		colaboradorRepository.deleteById(id);    		
	}
	
	private void copyDtoToEntity(ColaboradorDTO dto,ColaboradorEntity entity) {
		entity.setNome(dto.getNome());
		entity.setDepartamento(dto.getDepartamento());
		entity.setCargo(dto.getCargo());	
		entity.setSalario(dto.getSalario());
		entity.setDescricaocargo(dto.getDescricaocargo());
	}
}
