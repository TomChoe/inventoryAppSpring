package com.example.inventoryAppSpring.controllers;

import com.example.inventoryAppSpring.models.Product;
import com.example.inventoryAppSpring.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductsController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public Iterable<Product> findallProducts() {
        return productRepository.findAll();
    }
}