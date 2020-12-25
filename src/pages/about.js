import React from 'react';
import Image from 'gatsby-image'
import styled from 'styled-components';
import { graphql } from 'gatsby';

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-bottom: 2px solid rgb(${({theme})=>theme.colors.borderColor});

${({theme})=> theme.media.desktop.m}{

height: 50%;
p{
margin-left: 20px;
margin-right: 20px;
}

}

`
const Section = styled.section`
text-align:center;
${({theme})=> theme.media.desktop.m}{
margin: 0;

display: flex;
flex-direction: column;
justify-content: center;
}

`
const StyledImg = styled(Image)`
min-width:300px;
max-width: 1000px;

${({theme})=> theme.media.desktop.m}{
height: calc(100vh - 70px);
width: 45vw;
}

${({theme})=> theme.media.desktop.l}{
height: calc(100vh - 90px);
width: 55vw;
}
`
const Wrapper = styled.div`

${({theme})=> theme.media.desktop.m}{
display: flex;
flex-direction: row-reverse;

}
`
const AuthorName = styled.p`
font-size: 26px;
margin-top: 20px;
`

const aboutPage = ({data}) => {
    return (
        <Wrapper>
            <Section>
                <StyledImg fluid={data.file.childImageSharp.fluid} />
            </Section>
            <Section>
                <StyledDiv>
                    <h2>About</h2>
                    <p>Pariatur esse Lorem velit minim nostrud nostrud ut elit.Sint veniam sunt ipsum id aliqua quis ea quis reprehenderit cillum esse non sint aliquip.Mollit ex sit nostrud ut proident id.</p>
                </StyledDiv>
                <StyledDiv>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis maiores cum perspiciatis dolore aliquid nesciunt minima itaque impedit, optio corporis, alias assumenda ullam facilis laudantium quidem dolorum neque perferendis!</p>
                    <AuthorName>Mariusz Krawczyk</AuthorName>
                </StyledDiv>
            </Section>
        </Wrapper>
    );
}

export default aboutPage;

export const query = graphql`
{
    file(name: {regex: "/team/"}) {
    childImageSharp {
      fluid(maxWidth: 1000, maxHeight: 1000, quality: 90) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`