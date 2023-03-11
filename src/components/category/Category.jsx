import Styled from "styled-components";
import CatagItem from "./CatagItem";
import { Categories} from "../../dummyData";
import { Link } from "react-router-dom";

const Wrapper = Styled.div`
    display:flex;
    background:whitesmoke;
    margin-bottom:50px;
    @media only screen and (max-width: 1100px){
   flex-direction:column;
    }
`;
const Left = Styled.div`
flex:2.8;
display:flex;
flex-wrap:wrap;
justify-content:center;
/* background:red; */
`;
const Right = Styled.div`
flex:2;
display:flex;
justify-content:center;
align-items:center;
/* background:yellow; */
`;
const RightCont = Styled.div`
width:70%;
`;

<Link to="/" style={{ textDecoration: "none" }}></Link>

function Category() {
  return (
   <Wrapper>
    <Left>
    {
      Categories.filter((item)=>item.id<=4).map((filtItem)=>{
      return <Link to="/products" style={{ textDecoration: "none" }}> <CatagItem key={filtItem.id} catagProduct={filtItem}/></Link>
      })
    }
    </Left>
    <Right>
    <RightCont width="50%">
      <img src="" alt="logo" />
      <h2>Choose category</h2>
      <p>This is our category. You can choose any category to get your products</p>
    </RightCont>
    </Right>
   </Wrapper>
  )
}

export default Category