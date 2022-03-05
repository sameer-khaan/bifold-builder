import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hamburger from "./hamburger.svg";
import hamburgerHover from "./hamburgerHover.svg";
import close from "./close.svg";
import closeHover from "./closeHover.svg";
import { breakpoints } from "../../Media";

const HamburgerContainer = styled.div`
  /* position: fixed; */
  right: 0px;
  top: 0px;
  height: 100%;
  width: 55%;
  z-index: 9999;
  display: none;

  @media (max-width: ${breakpoints.mobileMax}) {
    display: block;
    right: 20px;
    top: 20px;
    width: unset;
  }
`;
const HamburgerImg = styled.div`
  z-index: 99999;
  display: block;
  position: absolute;
  top: 30px;
  right: 60px;
  width: ${props => (props.on ? `40px` : `20px`)};
  height: 30px;
  display: block;
  background-image: ${props =>
    props.on ? `url(${hamburger})` : `url(${close})`};
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 1;
  transform: translate(40px);
  transition-duration: 0.2s;
  animation: fadeIn 1s forwards;
  animation-delay: 1s;
  cursor: pointer;
  position: fixed;

  @media (min-width: ${breakpoints.mobileMax}) {
    top: 40px;
    right: 80px;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &:hover {
    background-image: ${props =>
      props.on ? `url(${hamburgerHover})` : `url(${closeHover})`};
  }
`;

const NavContainer = styled.div`
  height: 100%;
  z-index: 999;
  width: 70%;
  padding: 0 30px;
  background: linear-gradient(238.96deg, #3EA744 32.79%, #BA9C21 98.55%); 
  position: ${props => (props.on ? "fixed" : "absolute")};
  display: block;
  right: 0;
  top: 0;
  opacity: 0;
  animation: ${props =>
    props.on ? "SlideOutRight .7s forwards" : "SlideFromLeft .5s forwards"};
  box-shadow: -11px 2px 48px -6px rgba(0,0,0,0.75);

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 500px;
    right: 0;
    top: 0;
    padding-left: 80px;
  }
  @keyframes SlideFromLeft {
    0% {
      transform: translate(1000px);
      opacity: 0;
    }
    100% {
      transform: translate(0);
      opacity: 1;
    }
  }

  @keyframes SlideOutRight {
    0% {
      transform: translate(0);
      opacity: 1;
    }
    100% {
      transform: translate(1000px);
      opacity: 0;
    }
  }
`;

const Links = styled.div`
  margin-top: 100px;
  width: auto;
  height: 40%;
  & > a {
    display: block;
    color: #ffffff;
    text-decoration: none;
    font-weight: 800;
    font-size: 28px;
    line-height: 91.45%;
    position: relative;
    z-index: 2;
    opacity: 0;
    border-top: 1px solid #ffffff;
    padding: 15px 10px;
    animation: ${props => (props.on ? "none" : "SlideInText .7s forwards")};
    transition: all .4s ease-in-out;  
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
    }
    &:nth-child(5) {
      animation-delay: 0.4s;
    }
    &:last-of-type {
      border-bottom: 1px solid #ffffff;
    }
    @keyframes SlideInText {
      0% {
        transform: translate(100px);
        opacity: 0;
      }
      100% {
        transform: translate(0);
        opacity: 1;
      }
    }
    &::after {
      width: 0px;
      left: -10px;
      content: "";
      display: inline-block;
      height: 20px;
      position: absolute;
      bottom: 0px;
      z-index: -2;
      transition: width 0.4s;
    }
    &:hover {
      padding: 15px 20px;
    }
  }
`;

class Hamburger extends Component {
  state = {
    active: false
  };

  constructor() {
    super();
    this.state = {
      active: true
    };
  }
  render() {
    return (
      <HamburgerContainer>
        <HamburgerImg
          on={this.state.active}
          onClick={() => this.setState({ active: !this.state.active })}
        />
        <NavContainer on={this.state.active}>
          <Links on={this.state.active}>
            <Link to="/">Design</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/">Main Site</Link>
            <Link to="/contact">Contact</Link>
          </Links>
        </NavContainer>
      </HamburgerContainer>
    );
  }
}

export default Hamburger;
