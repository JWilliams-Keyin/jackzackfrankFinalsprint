import React from "react"
import styled from "styled-components";

function SingleProductBlock( { description , price , image  , name , stock } ) {

  return (
    <Wrapper>
      <div className="ProductsList">
        <div className="singleProdWrap">
          <div className="leftDiv">
            <img
              src={image}
              alt=""
            />
          </div>
          <div className="rightDiv">
            <h2> {name} </h2>
            <p> $ {price}</p>
            <p className="amountLeft"> Stock Left : { stock}</p>
            <br />
            <p> {description} </p>
            <br />
            <button> Add to Cart </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SingleProductBlock;

const Wrapper = styled.div`
  .wrap {
    display: flex;
    background: brown;
    border-radius: 5px;

    h1 {
      color: #453227;
    }
  }

  .amountLeft {
    color: brown;
    font-size: 0.8rem;
  }

  button {
    background-color: #453227;
    color: white;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border: none;
  }
`;
