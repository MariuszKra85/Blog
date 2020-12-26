import Image from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const ImageContent = styled.div`
position: relative;


h3{
position: absolute;
bottom: 30px;
left: 0;
padding: 10px;
background-color: rgba(${({theme})=> theme.colors.imageTextBg});
color: rgba(${({theme})=>theme.colors.imageTextColor})
}



`
const Img = styled(Image)`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    `


const ArticleWrapper = styled.div`
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: flex-end;
border: 1px solid black;
border-radius: 5px;
min-height: 150px;
min-width: 250px;
max-width: 350px;
margin: 20px;

p{
    margin-left: 10px;
}
`

const articleLayout = ({data, clickFunc}) => {
    return (
        <ArticleWrapper>
            <ImageContent>
                    {data.frontmatter.featuredImage !== null ?  <Img fluid = {data.frontmatter.featuredImage.childImageSharp.fluid}/> : null }
                <h3>{data.frontmatter.title}</h3>
            </ImageContent>
            <p>{data.excerpt}</p>
            <button onClick={clickFunc}> click</button>            
        </ArticleWrapper>
    );
}

export default articleLayout;