import React from "react";
import styled from "styled-components";
import GilbertLogo from '../../images/gilbert-grayed-logo.svg';

const GrayedLogo = styled.div`
  svg {
    position: absolute;
    right: 10%;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: -1;
    opacity: .6;
  }
`;

export const Logo = () => <GrayedLogo><GilbertLogo/></GrayedLogo>;


