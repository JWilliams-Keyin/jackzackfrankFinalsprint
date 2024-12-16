import React from "react"
import styled from "styled-components";
import { GridProductList } from "../Components/index";

function SingleProductList() {

  return (
    <Wrapper>
      <div className="SingleProductList">
        <section>
          <GridProductList />
        </section>
      </div>
    </Wrapper>
  );
}

export default SingleProductList;

const Wrapper = styled.div`
  flex: 9;

  .ProductsList {
    flex: 12;
  }

  section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 100%;
  }

  @media only screen and (max-width: 800px) {
    section {
      flex-wrap: wrap;
      max-width: 100%;
    }
  }
`;
