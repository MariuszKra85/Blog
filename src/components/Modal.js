import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
position: fixed;
top: ${({active})=> active ? '0' : '50vh'};
left: ${({active})=> active ? '0' : '50vw'};
margin: 0 auto;
background-color: rgba(255, 255, 255, 0.8);
transition: all 0.5s;
width: ${({active})=> active ? '90vw' : '0'};
height: ${({active})=> active ? '100vh' : '0'};
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 80%;

`

const Modal = ({active, data, closeFunc}) => {
    return (
        <ModalWrapper active={active}>
            <ContentWrapper>

            {data.frontmatter ? (
            <>
                <h2>{data.frontmatter.title}</h2>
                <MDXRenderer>{data.body}</MDXRenderer>
            </>) : null}
            

            <button onClick={closeFunc}>close</button>
            </ContentWrapper>

        </ModalWrapper>
    );
}

export default Modal;
