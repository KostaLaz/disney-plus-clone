import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <Navbar>Header</Navbar>
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


export default Header;