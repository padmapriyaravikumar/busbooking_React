import React from 'react'
import styled from 'styled-components'
const HeaderContainer = styled.header`
background-color:pink;
padding:1px;
text-align:center;

`
const HeaderTitle=styled.h1`
font-size:40px;
color:black;
margin:0;
`
const Header = () => {
  return (
    <div>
        <HeaderContainer>
            <HeaderTitle>
                PLACEBO
            </HeaderTitle>
        </HeaderContainer>
    </div>
  )
}

export default Header