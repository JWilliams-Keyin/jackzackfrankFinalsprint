import React from "react";
import { useEffect, useState, useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  Header,
  Footer,
  Banner,
  SingleProductBlock,
} from "../Components/index";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  function getSingleItem() {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
        console.log(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getSingleItem();
  }, []);

  if (loading) {
    return <h1> Loading </h1>;
  }

  return (
    <Wrapper>
      <Header />
      <Banner textHolder="Shop" />
      <section className="shop-section">
        <div className="products container">
          <SingleProductBlock
            key={product["id"]}
            id={product["id"]}
            image={product["image"]}
            price={product["price"]}
            name={product["itemName"]}
            description={product["description"]}
            stock={product["quantityInStock"]}
          />
        </div>
      </section>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .products {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .shop-section {
    margin-bottom: 5rem;
  }
`;

export default SingleProduct;
