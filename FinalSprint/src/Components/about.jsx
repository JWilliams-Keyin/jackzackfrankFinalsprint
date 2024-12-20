import React from "react"
import styled from 'styled-components'
import { AboutBox } from '../Components/index'

function About () {
    return (
        <Wrapper>
            <div className="container text">
                <section>
                    <h1>Kitchenware <br/> Built Only For You</h1>
                </section>
                <section>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                </section>
            </div>
            <div className="container about">
                <AboutBox title = "Mission" text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur." />
                <AboutBox title = "Vision" text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur." />
                <AboutBox title = "About" text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur." />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 2rem;
    background-color: #EADED7;

    .container {
        display: flex;
    }

    .text {
        margin-top: 1rem;
    }

    section {
        flex: 1;
        border-radius: 5px;

        h2 {
            margin-bottom: 1rem;
            color: #564135;
            text-align: center;
        }

        h1 {
            color : #453227;
        }
    }

    section p {
        text-align: justify;
        color: #826554;
    }

    .about section {
        position: relative;
        top: 100px;
        margin: 0.5rem;
        padding: 2rem;
        background-color: #C5A491;
    }


        @media only screen and (max-width: 800px) {
            .container {
                flex-direction: column;
            }        
        }    
`

export default About 