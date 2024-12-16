import React from "react"
import styled from 'styled-components'

import { Header , Banner , Footer , ProductsList } from '../components/index'

function Shop () {
    return (
        <Wrapper>
            <Header />
            <Banner textHolder="Shop"/>
            <section className="shop-section">
                <div className="products container">
                    <ProductsList />
                </div>
            </section>
            <Footer />
        </Wrapper>
    )
}


const Wrapper = styled.div`
    .products {
        padding-top: 2rem;
        display: flex;
        justify-content:center;
    }

    .shop-section {
        margin-bottom: 5rem;
    }


    
`
export default Shop