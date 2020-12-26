import { graphql } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import ArticleLayout from '../layouts/articleLayout';

const ArticlesWrapper = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
max-width: 1200px;
margin: 0 auto;
`



const handleClick = (active, setActive, dataModal) =>{
    setActive({
        active: !active.active,
        data: dataModal,
    });
}

const ArticlePage = ({data}) => {

    const [modal, setModal] =useState({
        active: false,
        data: {},
    });
   
  return (
        <div>
            <div>
                <h3>article</h3>
                <p>Lorem consequat labore eiusmod reprehenderit eu esse exercitation.</p>
            </div>
            <ArticlesWrapper>
            { data.allMdx.nodes.map((e)=><ArticleLayout data={e} key={e.frontmatter.id} clickFunc={()=>{
                handleClick(modal, setModal, e)
            }}/>)
            }
            </ArticlesWrapper>
            <Modal active={modal.active} data={modal.data} closeFunc={()=>handleClick(modal, setModal, modal.data)}/>
        </div>
    );
}

export default ArticlePage;

export const query = graphql`
{
allMdx(sort: {fields: frontmatter___id}) {
    nodes {
      frontmatter {
        id
        autor
        slug
        title
        featuredImage{
            childImageSharp {
                 fluid(maxWidth: 400, maxHeight: 400, quality: 90){
                    ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
        }
      }
      excerpt(pruneLength: 30)
      body
    }
  }
  allFile(filter: {relativePath: {regex: "/articles/"}, extension: {eq: "jpg"}}) {
    nodes {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400, quality: 90){
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
}
`
