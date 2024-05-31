import {Link} from "react-router-dom"
import styled from "styled-components"
import HomeHeader from "./HomeHeader"

const Button = styled.button`
position:absolute;
top:100px;
&:hover {
  cursor: pointer;
}
`


function HomePage() {
  return (
  <>    
    <Link to={`/items`}><Button>버튼</Button></Link>
    <HomeHeader/>
  </>
  )
}

export default HomePage; 