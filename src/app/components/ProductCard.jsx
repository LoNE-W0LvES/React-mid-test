"use client";
import React from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ title, price, description }) {
    return (
        <div className={styles.productCard}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.price}>${price}</p>
            <p className={styles.description}>{description}</p>
        </div>
    );
}
