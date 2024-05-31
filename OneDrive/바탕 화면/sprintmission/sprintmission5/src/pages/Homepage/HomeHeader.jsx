import styled from "styled-components";
import colors from "../../styles/colors";
import LogoImg from "../../assets/logo/logo.svg?react";

const HeaderDiv = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  border-bottom: solid 1px ${colors.GRAY};
`

const Logo = styled(LogoImg)`
  width: 153px;
  height: 51px;
  margin-left: 200px;

  &:hover{
    cursor: pointer;
  }

`

const Login = styled.button`
  width: 88px;
  height: 42px;
  border-radius: 8px;
  padding: 12px 23px;
  background-color: ${colors.BLUE_ACTIVE};
  border: none;
  color: white;
  margin-right: 200px;

  &:hover{
    cursor: pointer;
  }

`

function Header() {
  return(
    <HeaderDiv>
      <Logo/>
      <Login>로그인</Login>
    </HeaderDiv>
  )
}

export default Header;