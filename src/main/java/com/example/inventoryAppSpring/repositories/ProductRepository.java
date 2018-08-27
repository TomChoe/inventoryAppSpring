package com.example.inventoryAppSpring.repositories;

import com.example.inventoryAppSpring.models.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {

}