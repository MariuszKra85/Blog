import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import GalleryPhoto from '../components/GalleryPhoto';

const PhotosWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`

const GalleryWrapper = styled.div`
margin-left: 20px;

`

const GalleryPage = ({data}) => {
    return (
        <GalleryWrapper>
            <p>gallery</p>
            <PhotosWrapper>
               {data.allFile.nodes.map((e)=>(
                   <GalleryPhoto img={e.childImageSharp.fluid} key={e.name}/>
    ))}
            </PhotosWrapper>
        </GalleryWrapper>
    );
}

export default GalleryPage;

export const query = graphql`

{
    allFile(filter: {relativePath: {regex: "/gallery/"}}, sort: {fields: name}) {
    nodes {
        name
      childImageSharp {
        fluid{
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
}

`

