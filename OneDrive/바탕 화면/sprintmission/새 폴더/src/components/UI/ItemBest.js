import styled from "styled-components";
import React from "react";
import {Link} from "react-router-dom";
import getItem from "../../api/Api";
import { ItemCard,Container } from "./ItemCard";

const ContainerBest = styled.div`
  width: 1200px;
  height: 406px;
`

const CardContainer = styled(Container)`
  width:282px;
  height: 362px;
`
const TitleBest = styled.p`
`

function GetBestItem () {
  const fetchData
}


const ItemBest = () => {
  return (
    <>
    <ContainerBest>
        <TitleBest>베스트 상품</TitleBest>
        <ItemCard/>
    </ContainerBest>
    </>
  )
}

export default ItemBest;