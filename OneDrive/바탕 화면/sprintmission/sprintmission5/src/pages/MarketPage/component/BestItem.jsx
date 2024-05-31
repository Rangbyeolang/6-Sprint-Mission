import { useEffect } from "react";
import styled from "styled-components";
import getProducts from "../../../api/API";
import ItemCard from "../../../component/UI/ItemCard";

//1. 페이지 너비 파악 2. 페이지 너비 별로 num return 3. num 갯수만큼 정보 접근 4. {num으로 width나눈 값 - 16*(num-1)}/num=prop 전달

function getNum() {
    const width = window.innerWidth;

    if(width<745) {
        return 1
    }else if(width<1200) {
        return 2
    }else{return 4}
}
const num = getNum();

const BestContainer = styled.div`
    width: 1200px;
    height: 406px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media(max-width: 1199px){
        width: 696px;
        height: 460px;
    }
    @media(max-width: 744px){
        width: 375px;
        height: 423px;
    }
`

const BestTitle =styled.p`
    font-size: 20px;
    font-weight: 700;
`
const CardContainer = styled.div`
    width: 1200px;
    height: 362px;
    display: grid;
    grid-template-columns: repeat(${num}, 1fr);
    gap: 16px;
`





async function getItemData(page=1,pageSize,orderBy="favorite"){
    
    let sizePage = num * 2 + 2;
    pageSize = sizePage;

    const productData = await getProducts({page,pageSize,orderBy});

    const dataList = productData.list;

    const data = dataList.slice(0,num);
    return data;
}


async function BestItem() {
  /*useEffect(getNum,[window.innerWidth])

  const [itemNum,setItemNum]=useState()
  setItemNum(getNum)*/
  //여기 다시 해보셈

  const itemData = await getItemData() 
  
  function ItemArray() {
    const itemcards = itemData.map((item)=><ItemCard key={item.id} itemImg={item.images} itemName={item.name} itemPrice={item.price}/>)
    return itemcards;
}


  return(
    <BestContainer>
      <BestTitle>베스트 상품</BestTitle>
      <CardContainer>
        <ItemArray/>
      </CardContainer>
    </BestContainer>
)

}

export default BestItem;





