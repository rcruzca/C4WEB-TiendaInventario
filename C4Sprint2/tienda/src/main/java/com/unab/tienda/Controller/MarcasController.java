package com.unab.tienda.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.unab.tienda.Collection.Marcas;
import com.unab.tienda.IService.IMarcasService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/marcas")
public class MarcasController {

    @Autowired
    private IMarcasService service;

    @GetMapping
    public List<Marcas> all() {
        return service.all();
    }

    @GetMapping("{id}")
    public Optional<Marcas> show(@PathVariable String id) {
        return service.findById(id);
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Marcas save(@RequestBody Marcas marcas) {
        return service.save(marcas);
    }

    @PutMapping("{id}")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Marcas update(@PathVariable String id, @RequestBody Marcas marcas) {
        Optional<Marcas> op = service.findById(id);
        if (!op.isEmpty()) {
            Marcas marcasUpdate = op.get();
            marcasUpdate.setNombre(marcas.getNombre());
            marcasUpdate.setEstado(marcas.getEstado());
            return service.save(marcasUpdate);
        }
        return marcas;
    }

    @DeleteMapping("{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String id) {
        service.delete(id);
    }

}
