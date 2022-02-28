import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <Navbar>
      <Logo>
        <img src="/images/logo.svg"/>
      </Logo>
      <NavMenu>
        Menu
      </NavMenu>
    </Navbar>
  )
}

const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 15px;
  z-index: 3;
`;

const Logo = styled.a`
  width: 80px;
  padding 0;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  img {
    display: block;
    width: 100%
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;


export default Header;