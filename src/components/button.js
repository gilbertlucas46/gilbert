import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

const ButtonContainer = styled.div`
    height: 3rem;
    border: 2px solid #ED2654;
    border-radius: 4px;
    padding: 0 20px;
    display: inline-block;
    line-height: 2.9rem;
    font-size: 1.2rem;
    color: #ED2654;
    letter-spacing: 2px;
    &:hover {
        background-color:#ffff;
        border: 2px solid #ffff;
    }
    a {
        color: #ED2654;
        text-decoration:none;
    }
`;


const Button = ({ children,location })=> (
    <ButtonContainer>
        {children}
    </ButtonContainer>
  )
  export default Button
  
  Button.propTypes = {
    children: PropTypes.node.isRequired,
  }