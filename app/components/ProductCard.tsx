import React from "react";
import { AddToCart } from "./AddToCart";
import styles from "./ProductCard.module.css";

export const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div>
        <AddToCart></AddToCart>
      </div>
    </div>
  );
};
