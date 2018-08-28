package com.example.inventoryAppSpring.controllers;

import com.example.inventoryAppSpring.models.Product;
import com.example.inventoryAppSpring.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ProductsController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public Iterable<Product> findallProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/products/{productId}")
    public Optional<Product> findByProductById(@PathVariable long productId) {
        return productRepository.findById(productId);
    }

    @DeleteMapping("/products/{productId}")
    public HttpStatus deleteProductById(@PathVariable long productId) {
        productRepository.deleteById(productId);
        return HttpStatus.OK;
    }

    @PostMapping("/products")
    public Product createNewProduct(@RequestBody Product newProduct) {
        return productRepository.save(newProduct);
    }

    @PatchMapping("/products/{productId}")
    public Product updateProductById(@PathVariable Long productId, @RequestBody Product productRequest) {

        Product productFromDb = productRepository.findById(productId).get();

        productFromDb.setProductName(productRequest.getProductName());
        productFromDb.setProductQuantity(productRequest.getProductQuantity());

        return productRepository.save(productFromDb);
    }
}