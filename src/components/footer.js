import React from 'react';
import styled from 'styled-components';
import Facebook from '../images/icons/facebook.svg'
import Linkedin from '../images/icons/linkedin.svg'
import Twitter from '../images/icons/twitter.svg'

const StyledWrapper = styled.div`

margin-top: 20px;

`

const StyledSocialWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
`

const StyledSocial = styled.div`
width: 25px;
margin-left: 30px;

&:first-of-type{
    margin-left: 0;
}
`
const StyledCopy = styled.div`
display: flex;
justify-content: center;
margin: 20px;

`

const Footer = () => {
    return (
        <StyledWrapper>
            <StyledSocialWrapper>

            <StyledSocial>
                <Facebook/>
            </StyledSocial>
            <StyledSocial>
                <Linkedin/>
            </StyledSocial>
            <StyledSocial>
                <Twitter/>
            </StyledSocial>
            </StyledSocialWrapper>
            <StyledCopy>
                <p>
                Copyright (c) 2020 created by Mariusz Krawczyk 
                </p>
            </StyledCopy>
        </StyledWrapper>
    );
}

export default Footer;
