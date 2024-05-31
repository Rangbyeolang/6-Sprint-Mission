import {Link} from "react-router-dom"
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
  border-bottom: solid 1px;
`

const Logo = styled(LogoImg)`
  width: 153px;
  height: 51px;
  margin-left: 200px;
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

const Category = styled.div`
  width: 218px;
  height: 69px;
  border: none;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
`

const Board = styled.button`
  width: 109px;
  height: auto;
  border: none;
  color: ${colors.GRAY_600};
  font-weight: 700;
  font-size: 18px;
  text-align: center;

  &:hover{
    cursor: pointer;
  }
`

const Item = styled.button`
  width: 109px;
  height: auto;
  border: none;
  color: ${colors.BLUE_ACTIVE};
  font-weight: 700;
  font-size: 18px;
  text-align: center;  

  &:hover{
    cursor: pointer;
  }
`

function Header() {
  return(
    <>
      <HeaderDiv>
        <Link to="/"><Logo/></Link>
        <Login>로그인</Login>
      </HeaderDiv>
      <Category>
        <Link to="/board"><Board>자유게시판</Board></Link>
        <Item>중고마켓</Item>
      </Category>
    </>
  )
}

export default Header;