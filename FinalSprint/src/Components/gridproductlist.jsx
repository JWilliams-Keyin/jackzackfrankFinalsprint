import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { products_url } from "../constants/helpers";
import { GridProductListProps } from "./index";
// props

function GridProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchProducts() {
    axios
      .get(products_url)
      .then((response) => {
        setProducts(response['data']);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if(loading) {
    return (
        <h1> Loading ....</h1>
    )
  }

  return (
    <>
      {products.map((single_product) => {
        const { id , itemName , price , image } = single_product;
        return (
          <GridProductListProps
            key={id}
            id={id}
            image={image}
            price={price}
            name={itemName}
          />
        );
      })}

      {/* <h1> Hello </h1> */}
    </>
  );
}

export default GridProductList;
