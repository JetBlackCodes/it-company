import React, { Component } from "react";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <HeaderBlock>
        <H1>ИУ5 КФ</H1> 
        <H2>Системы обработки информации</H2>
      </HeaderBlock>
    );
  }
}

export default Header;

const HeaderBlock = styled.div`
  background-image: url("/images/background-photo.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #ffe8c7;
  height: 100vh;
  margin: 0;
  text-align: center;
`;

const H = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: #fff;
  font-size: 150px;
  margin: 0px;
`;

const H1 = styled(H)`
  font-size: 110px;
  padding-top: 10%;
`;
const H2 = styled(H)`
  font-size: 35px;
`;
