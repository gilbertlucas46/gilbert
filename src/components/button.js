import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

const ButtonContainer = styled.div`
    height: 3rem;
    border: 2px solid #ED2654;
    border-radius: 4px;
    padding: 0 1rem;
    display: inline-block;
    line-height: 2.9rem;
    font-size: 1.2rem;
    color: #ED2654;
    letter-spacing: 2px;
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1); 
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1); 
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1);
    transition: all 200ms ease-in;
    transform: scale(1);
    text-align:center;
    max-width:14rem;
    &:hover {
    background-color: #ED2654;
    border: 2px solid #ED2654;
   
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1.1);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1.1);   
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1.1);
    transition: all 200ms ease-in;
    transform: scale(1.1);
    color:#fff;
    text-align:center;
    max-width:14rem;
    cursor: pointer;
        a {
            color: #ffff;
        }
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