package com.unab.tienda.IService;

import java.util.List;
import java.util.Optional;

import com.unab.tienda.Collection.Inventarios;

public interface IInventariosService {
    public List<Inventarios> all();

    public Optional<Inventarios> findById(String id);

    public Inventarios save(Inventarios inventarios);

    public void delete(String id);
}
