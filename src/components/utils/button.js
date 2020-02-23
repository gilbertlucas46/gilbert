import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonContainer = styled.div`
  button {
    background-color: transparent;
    border: 0;
    line-height: 3rem;
    font-size: 1.2rem;
    color: #ed2654;
    border-radius: 4px;
    min-width: 8rem;
    line-height: 52px;
    &:hover {
      background-color: #ed2654;
      border: 2px solid #ed2654;
      -webkit-transition: all 200ms ease-in;
      -webkit-transform: scale(1.1);
      -ms-transition: all 200ms ease-in;
      -ms-transform: scale(1.1);
      -moz-transition: all 200ms ease-in;
      -moz-transform: scale(1.1);
      transition: all 200ms ease-in;
      transform: scale(1.1);
      color: #fff;
      text-align: center;
      max-width: 14rem;
      border: 0;
      cursor: pointer;
      a {
        color: #ffff;
      }
    }
  }
  a {
    padding: 0 1rem;
  }
  border: 2px solid #ed2654;
  border-radius: 4px;
  min-width: 6rem;
  display: inline-block;
  line-height: 2.8rem;
  font-size: 1.2rem;
  color: #ed2654;
  letter-spacing: 2px;
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(1);
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(1);
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(1);
  transition: all 200ms ease-in;
  transform: scale(1);
  text-align: center;
  max-width: 14rem;
  overflow: hidden;
  &:hover {
    background-color: #ed2654;
    border: 2px solid #ed2654;
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1.1);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1.1);
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1.1);
    transition: all 200ms ease-in;
    transform: scale(1.1);
    color: #fff;
    text-align: center;
    max-width: 14rem;
    cursor: pointer;
    a {
      color: #ffff;
    }
  }
  a {
    color: #ed2654;
    text-decoration: none;
  }
`;

const Button = ({ children, location }) => (
  <ButtonContainer>{children}</ButtonContainer>
);
export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired
};
