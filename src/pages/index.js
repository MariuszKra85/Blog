import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

color: ${({theme})=> theme.color.primary};

`

const indexPage = () => {
  return (
    <StyledDiv>
      To jest strona głowna
    </StyledDiv>
  );
}

export default indexPage;
