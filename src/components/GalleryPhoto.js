import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const ImgWrapper = styled.div`
width: 350px;
margin: 20px;
object-fit: cover;
transition: all 0.3s;

&:hover{
    opacity: 0.8;
}
`

const Img = styled(Image)`
object-fit: cover;
height: 100%;
`

const GalleryPhoto = ({img}) => {
    return (
        <ImgWrapper>
            <Img fluid={img}/>
        </ImgWrapper>
    );
}

export default GalleryPhoto;
