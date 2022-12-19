package com.unab.tienda.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unab.tienda.Collection.Inventarios;
import com.unab.tienda.IRepository.IInventariosRepository;
import com.unab.tienda.IService.IInventariosService;

@Service
public class InventariosService implements IInventariosService {
    @Autowired
    private IInventariosRepository repository;

    @Override
    public List<Inventarios> all() {

        return repository.findAll();
    }

    @Override
    public Optional<Inventarios> findById(String id) {

        return repository.findById(id);
    }

    @Override
    public Inventarios save(Inventarios inventarios) {

        return repository.save(inventarios);
    }

    @Override
    public void delete(String id) {

        repository.deleteById(id);
    }
}
