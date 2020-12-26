import { graphql, Link } from 'gatsby';
import  Image  from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
margin-top: 20px;
position: relative;
`

const StyledImgWrapper = styled.div`
${({theme})=> theme.media.desktop.m}{

position: absolute;
top: 0;
right:0;

}

`


const StyledImg = styled(Image)`
width: 100%;
height: 90vh;

${({theme})=> theme.media.desktop.m}{
width: 50vw;
}

`

const TextWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80vw;
height: 120px;
position: absolute;
right:0;
top: 70vh;
background-color: rgba(${({theme})=>theme.colors.imageTextBg});
color: rgba(${({theme})=>theme.colors.imageTextColor});
font-size: 36px;
p{
  padding-left: 30px;
}
${({theme})=> theme.media.desktop.m}{
width: 45vw;
font-size: 30px;
top: 70vh;
p{
  padding-left: 20px;
}
}

`
const StyledContent = styled.div`

width:100%;
margin: 20px;

${({theme})=> theme.media.desktop.m}{

width: 45%;
height: 90vh;
display: flex;
justify-content: center;
align-items: flex-end;
flex-direction: column;
}

`

const IndexPage = ({data}) => {
  return (
    
    <StyledWrapper>
      <StyledImgWrapper>

      <StyledImg fluid={data.heroImg.childImageSharp.fluid}/>
      </StyledImgWrapper>
      <TextWrapper>
        <p> New Look For Design</p>
      </TextWrapper>
      <StyledContent>
        <h1> Your new Space</h1>
        <p>Sint et sit do Lorem eu commodo elit consectetur culpa dolore veniam ex.Magna commodo cillum laborum aliqua eu magna deserunt voluptate.</p>
        <Link to="/gallery">Check our design!</Link>
      </StyledContent>
    </StyledWrapper>
  );
}

export default IndexPage;

export const query = graphql`
{
 heroImg: file(name: {regex: "/hero/"}){
  childImageSharp {
        fluid(maxWidth: 500, maxHeight: 800, quality: 80) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
  }
}

`