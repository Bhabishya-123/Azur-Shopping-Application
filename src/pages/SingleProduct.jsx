import React, { useState } from 'react'
import Styled from 'styled-components';
import Navbar from '../components/header/Navbar'
import Announcement from '../components/header/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const Wrapper = Styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin-top:40px;
`;
const ImgCont = Styled.div`
display:flex;
justify-content:center;
flex:1.3;
`;
const Image = Styled.img`
width:400px;
object-fit:cover;
`;
const InfoCont = Styled.div`
flex:2;
display:flex;
flex-direction:column;
`;
const Title = Styled.h1`
font-weight:300;
font-size:35px;
font-family:monospace;
`;
const Desc = Styled.p`
width:80%;
`;
const Price = Styled.span`
display:flex;
align-items:center;
font-size:35px;
font-family:monospace;
`;
const FilterCont = Styled.div`
display:flex;
align-items:center;
gap:20px;
height:80px;
`;
const Filter = Styled.div`
display:flex;
`;
const FilterTitle = Styled.span`
margin-right:5px;
`;
const FilterColor = Styled.div`
height:20px;
width:20px;
border-radius:50%;
background:${props=>props.color};
cursor:pointer;
margin-right:5px;

`;
const FilterSize = Styled.select`

`;
const FilterSizeOption = Styled.option`

`;
const DownCont = Styled.div`
display:flex;
gap:20px;
align-items:center;
height:60px;
`;
const ItemAmountCont = Styled.div`
display:flex;
align-items:center;
`;
const Icon = Styled.div`
display:flex;
align-items:center;
justify-content:center;
height:20px;
width:20px;
cursor:pointer;
border:1px solid${props=>props.bg};
transition: all .2s ease-in;
&:active{
background:${props=>props.bg};
transition: all .2s ease-out;
}
;`
const Amount = Styled.span`
  margin:0px 10px;
  font-size:20px;
`;
const ButtonCont = Styled.div`
border:1.5px solid skyblue;
border-radius:5px;
`;
function SingleProduct() {
  const [counter,setCounter] = useState(1);
  const counterHandler = (action)=>{
  if(action==="inc"){
    setCounter(counter+1);
  }
  else if(counter>1){
    setCounter(counter-1);
  }
  }

  return (
    <>
      <Navbar/>
  <Announcement/>
  <Wrapper>
    <ImgCont>
    <Image src={process.env.PUBLIC_URL + "/images/test.jpg"} alt="payment img"/>
    </ImgCont>
    <InfoCont>
      <Title>Weird clothes</Title>
      <Desc>
        This is very best product of 2020. It has exported in more than
        500 countries and has world best quality clothes.
        This is very best product of 2020. It has exported in more than
        500 countries and has world best quality clothes.
        This is very best product of 2020. It has exported in more than
        500 countries and has world best quality clothes.
      </Desc>
      <Price><AttachMoneyIcon style={{fontSize:'35px'}}/>63</Price>
      <FilterCont>
        <Filter>
          <FilterTitle>Color</FilterTitle>
        <FilterColor color="black"/>
        <FilterColor color="yellow"/>
        <FilterColor color="green"/>
        </Filter>

        <Filter>
        <FilterTitle>Size</FilterTitle>
        <FilterSize>
          <FilterSizeOption>XS</FilterSizeOption>
          <FilterSizeOption>S</FilterSizeOption>
          <FilterSizeOption>M</FilterSizeOption>
          <FilterSizeOption>L</FilterSizeOption>
          <FilterSizeOption>XL</FilterSizeOption>
        </FilterSize>
        </Filter>
      </FilterCont>
      <DownCont>
        <ItemAmountCont>
          <Icon bg="#FF5733">
          <RemoveIcon onClick={()=>counterHandler("dec")} style={{fontSize:'20px'}}/>
          </Icon>
          <Amount>{counter}</Amount>
          <Icon bg="#1db33e">
          <AddIcon onClick={()=>counterHandler("inc")} style={{fontSize:'20px'}}/>
          </Icon>
        </ItemAmountCont>
        <ButtonCont>
        <Button>ADD TO CART</Button>
        </ButtonCont>
      </DownCont>
    </InfoCont>
  </Wrapper>
  <Newsletter/>
  <Footer/>
    </>
 )
}

export default SingleProduct