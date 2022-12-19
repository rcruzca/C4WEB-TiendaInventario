package com.unab.tienda.IRepository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.unab.tienda.Collection.Inventarios;

public interface IInventariosRepository extends MongoRepository<Inventarios, String> {

}
