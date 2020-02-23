import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import logo from "../images/gilbert-logo.svg";
import "./utils/gilbert-fonts.css";

const HeaderWrapper = styled.div`
  position: fixed;
  width: 70px;
  z-index: 99;
  overflow: hidden;
`;
const HeaderContent = styled.div`
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  background-color: #181818;
  display: flex; /* establish flex container */
  flex-direction: column; /* make main-axis vertical */
  justify-content: center; /* align items vertically, in this case */
  align-items: center;
  height: 100vh;
  .logo {
    background: #080808;
    height: 107px;
    display: flex; /* establish flex container */
    flex-direction: column; /* make main-axis vertical */
    justify-content: center; /* align items vertically, in this case */
    align-items: center;
    position: absolute;
    top: 0;
    width: 100%;
    img {
      margin-bottom: 0;
      max-width: 42px;
    }
  }
  .mainNav {
  }
  nav {
    ul {
      margin: 0;
      li {
        display: flex;
        align-items: center;
        margin-bottom: 0;
        span {
          display: none;
        }
        &:hover {
          .dev {
            display: none;
            cursor: pointer;
          }
          span {
            display: block;
            height: 48px;
            width: 100%;
            font-size: 0.6rem;
            line-height: 46px;
            -webkit-animation: fadeIn 1s;
            animation: fadeIn 1s;
            cursor: pointer;
          }
        }
        a.active {
          color: #ed2654;
          -webkit-animation: fadeIn 1s;
          animation: fadeIn 1s;
          &:hover {
            span {
              display: none;
            }
            .dev {
              display: block;
            }
          }
        }
        a {
          width: 100%;
          text-align: center;
          text-decoration: none;
          color: #575454;
          .dev {
            font-size: 1.6rem;
            width: 32px;
            height: 32px;
            display: block;

            @media (min-height: 568px) and (max-height: 700px) {
              height: 18px;
            }
            position: relative;
            display: block;
            margin: 8px auto;
            text-align: center;
            &:before {
              position: absolute;
              top: 0;
              bottom: 0;
              display: block;
              left: 0;
              right: 0;
            }
          }
        }
      }
    }
  }
  .socials {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    ul {
      padding: 0;
      margin: 0;
      li {
        padding: 2px 0;
        margin-bottom: 0;
        a {
          width: 100%;
          text-align: center;
          text-decoration: none;
          color: #575454;
          .dev {
            font-size: 1.4rem;
            width: 24px;
            height: 24px;
            position: relative;
            display: block;
            margin: 8px auto;
            @media (min-height: 568px) and (max-height: 700px) {
              height: 10px;
            }
            &:before {
              position: absolute;
              top: 0;
              bottom: 0;
              display: block;
            }
          }
        }
      }
    }
  }
`;

const Header = ({ siteTitle, menuLinks, socialChannels }) => (
  <HeaderWrapper>
    <HeaderContent>
      <div className="logo">
        <Link
          to="/"
          alt="Gilbert Logo"
          aria-label="links to home page"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          <img style={{ width: "100px" }} src={logo} alt="Gilbert Logo" />
        </Link>
      </div>
      <div className="mainNav">
        <nav>
          <ul>
            {menuLinks.map(link => (
              <li key={link.name} style={{ listStyleType: "none" }}>
                <Link
                  to={link.link}
                  activeClassName="active"
                  aria-label={`links to ${link.name}`}
                  alt={link.name}
                >
                  <i className={`dev dev-${link.name}`}></i>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="socials">
          <ul>
            {socialChannels.map(link => (
              <li key={link.name} style={{ listStyleType: "none" }}>
                <a
                  alt={link.name}
                  aria-label={`links to ${link.name}`}
                  rel="noopener noreferrer"
                  href={link.link}
                  target="_blank"
                >
                  <i className={`dev dev-${link.name}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HeaderContent>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
