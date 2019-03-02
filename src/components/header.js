import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import logo from "../images/gilbert-logo.svg"

const HeaderWrapper = styled.div`
  background: #524763;
  img {
    margin-bottom:0;
  }
`;
const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.3rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContent> 
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img style={{width:'100px'}}  src={logo} alt="Gilbert Logo"/>
        </Link>
      </h1>
    </HeaderContent>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
