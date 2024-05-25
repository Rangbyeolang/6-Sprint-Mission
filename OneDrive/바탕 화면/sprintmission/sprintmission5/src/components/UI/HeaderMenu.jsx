import styled from "styled-components";
import React from "react";
import Header from "./Header";
import { colors } from "../../style/colors";
import {Link} from "react-router-dom";


const Menu = styled.div`
  position: fixed;
  left: 385px;
  padding: 0;
  margin: 0;
  background-color: none;
`;

const Board = styled.button`
  width: 218px;
  height: 69px;
  border: none;
  background-color: none;
  color: ${colors.GRAY_600};
  font-size: 18px;
  padding: 24px auto;
  align-content: center;

  &:active {
    color: ${colors.BLUE_100};
  }
`;

const Market = styled.button`
  width: 218px;
  height: 69px;
  border: none;
  background-color: none;
  color: ${colors.BLUE_100};
  font-size: 18px;
  padding: 24px auto;
  align-content: center;
`;



const HeaderMenu = () =>{
  return(
    <>
      <Header/>
      <Menu>
        <Link to="index"><Board>자유게시판</Board></Link>
        <Market>중고마켓</Market>
      </Menu>
    </>
  )
}

export default HeaderMenu;