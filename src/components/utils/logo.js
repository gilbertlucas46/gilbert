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
  }
`;

export const Logo = () => <GrayedLogo><GilbertLogo/></GrayedLogo>;


