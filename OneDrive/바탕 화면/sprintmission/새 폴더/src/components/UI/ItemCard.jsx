import styled from "styled-components";
import React from "react";
import {Link} from "react-router-dom";

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`

const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`

const InformDiv = styled.div`
  
`

const ItemCard = ({item}) => {
  return (
    <Link to="/product">
    <Container>
        <ItemImg src={item.images[0]} alt={item.name}/>
        <InformDiv>

        </InformDiv>

    </Container>
    </Link>
  )
}

export { ItemCard , Container };