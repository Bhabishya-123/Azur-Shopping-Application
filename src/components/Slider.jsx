import Styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {PopularItems} from '../dummyData'
import {Button} from './reusable_styled/Reusable.Styled'

const Wrapper = Styled.div`
 background:whitesmoke;
    margin-bottom:50px;
`;
const SlideCont = Styled.div`
    height:68vh;
    width:100%; 
    @media only screen and (max-width: 700px){
      height:300px;
      display:flex;
    }
    `

const SaleCont = Styled.div`
background:none;
position:absolute;
top:36%;
right:8%;
width:400px;
@media only screen and (max-width: 700px){
     display:none;
    }
`;
const SaleHead = Styled.h1`
font-family:cursive;
font-size:40px;
`;
const SaleDesc = Styled.p`
letter-spacing:5px;
`;
const SaleBtn  = Styled(Button)`
	box-shadow:inset 0px 1px 0px 0px #fce2c1;
	background:linear-gradient(to bottom, #ffc477 5%, #fb9e25 100%);
	border:2px solid #eeb44f;
	text-shadow:0px 1px 0px #cc9f52;
	font-size:16px;
  transition: all 500ms;
  background: url('https://fortheloveofgeorge.com.au/wp-content/uploads/2013/07/FallenLeavesPattern_vCS4_preview.png') ;
  &:hover{
    background-size: 100%;
    background-position: center;
    transition: .3s all ease-in-out;
  }
`;

function Slider() {
  return (
   <Wrapper>
        <Carousel  autoPlay="true" infiniteLoop="true"  thumbWidth="100px">
        {
        PopularItems.map((product)=>(
          <SlideCont key={product.id} user={product}>
              <img  src={product.image} alt='popular product'/>
              <SaleCont>
              <SaleHead>{product.category}</SaleHead>
              <SaleDesc>{product.desc}</SaleDesc>
              <SaleBtn>Shop Now</SaleBtn>
              </SaleCont>
          </SlideCont>
        ))}
            </Carousel> 
   </Wrapper>
  )
}

export default Slider