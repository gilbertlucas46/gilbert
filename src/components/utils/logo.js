import React from 'react'
import styled from 'styled-components'

import logoFaded from '../../images/logo-faded.png'

const MyLogo = styled.div`
    position: fixed;
    height:518px;
    top:0;
    bottom:0;
    margin:auto;
    right:15%;
    z-index:-1;
`;


const Logo = ()=> (
    <MyLogo>
    <img className="logoFaded" src={logoFaded} alt="Level Up Tutorials Logo"/>
    </MyLogo>
  )
  export default Logo
  
