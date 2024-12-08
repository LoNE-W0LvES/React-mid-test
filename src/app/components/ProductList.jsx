"use client";
import React from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

export default function ProductList() {
    const products = [
        { title: "Laptop", price: 999, description: "A high-performance laptop for all your computing needs." },
        { title: "Smartphone", price: 499, description: "Stay connected with the latest technology in your hand." },
        { title: "Headphones", price: 199, description: "Experience high-quality sound with noise cancellation." },
        { title: "Smartwatch", price: 249, description: "Track your health and notifications on the go." },
    ];

    return (
        <div>
            <h1 className={styles.topTitle}>Product List</h1>
            <div className={styles.productListContainer}>
                <div className={styles.productList}>
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
