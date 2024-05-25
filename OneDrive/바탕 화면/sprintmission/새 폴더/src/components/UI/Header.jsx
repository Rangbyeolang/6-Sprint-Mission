import styled from "styled-components";
import colors from "../../style/colors"
import React from "react";

import Logo from "../../assets/logo.svg?react"

const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: none;
  border-bottom: solid 1px ${colors.GRAY};
`;

const PandaLogo = styled(Logo)`
  width: 154px;
  height: 51px;
  margin: 10px 200px;
`;


const Login = styled.button`
  width: 88px;
  height: 42px;
  border-radius: 8px;
  background-color: ${colors.BLUE_100};
  color: #ffffff;
  margin: 10px 200px;

  &:hover {
    background-color: ${colors.BLUE_200};
  }

`

const Header =()=>{
    return (
        <Container>
            <PandaLogo/>
            <Login>로그인</Login>
        </Container>
    )
}

export default Header;