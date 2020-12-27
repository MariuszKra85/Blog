import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import Map from '../components/Map';

const StyledContactText = styled.div`
 width: 90vw;
margin-left: 3vw;


${({theme})=>theme.media.desktop.m}{
width: auto;
 max-width: 600px;
grid-area: content;
}
`
const ContactWrapper = styled.div`

${({theme})=>theme.media.desktop.m}{
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 40vh 40vh;
grid-template-areas:
"content map"
"form map";
}
`
const StyledForm = styled.div`
${({theme})=>theme.media.desktop.m}{
width: auto;
 max-width: 600px;
grid-area: form;
}
`
const StyledMap = styled.div`
${({theme})=>theme.media.desktop.m}{
width: auto;
 max-width: 600px;
grid-area: map;
}
`

const ContactPage = () => {
    return (
        <ContactWrapper>
            <StyledContactText>
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ipsum ex, quis aspernatur quod fugiat! Distinctio deleniti, harum expedita autem quam, soluta consectetur dignissimos suscipit iste laudantium veritatis sit vero?</p>
            </StyledContactText>
            <StyledMap>
                <Map/>
            </StyledMap>
            <StyledForm>
                <Form/>
            </StyledForm>
        </ContactWrapper>
    );
}

export default ContactPage;
