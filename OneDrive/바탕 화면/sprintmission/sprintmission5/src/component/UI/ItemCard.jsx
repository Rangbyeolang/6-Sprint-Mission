import styled from "styled-components";
import Heart from "../../assets/heart_inactive.svg"

const ButtonCard = styled.button`
  width: auto;
  height: auto;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  &:hover{
    cursor: pointer;
  }
`

const ItemImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`
const TextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
`
const Price = styled.p`
  font-weight: 700;
`

const Icon = styled(Heart)`
  width:16px;
  height: 16px;
`
const Like = styled.p`
  font-size: 12px;
  font-weight: 500;
`

function ItemCard({itemImg, itemName, itemPrice}){
  <ButtonCard>
    <ItemImg src={itemImg}/> 
    <TextDiv>
      <Title>{itemName}</Title>
      <Price>{itemPrice}</Price>
      <div>
        <Icon/>
        <Like>
            
        </Like>
      </div>
    </TextDiv>
  </ButtonCard>
}

export default ItemCard;