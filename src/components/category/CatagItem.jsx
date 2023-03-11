import Styled from "styled-components";

const Container = Styled.div`
    border:${props => (props.id==='3')||(props.id==='2')? "4px solid skyblue":"4px solid white"};
    position:relative;
    transition:400ms all;
    &:before{
      position:absolute;
      content:' ';
      display:inline-block;
      display:flex;
      align-items:center;
      justify-content:center;
      height:100%;
      width:100%;
      background: rgb(5,5,5,0.4);
      transition: height 1s ease;
    }
    &:hover{
      cursor:pointer;
      transform:scale(1.04);
      z-index:1;
      transition:.2 ease;
    }
    &:hover::before{
      transition: height 1s ease-out;
      content:'shop now';
      height:0%;
      font-size:18px;
      text-decoration:underline;
      color:grey;
      text-transform: uppercase;
      text-shadow: 1px 1px 0px #333a34;
      margin-top:10px;
    }
      
`;
const Image = Styled.img`
  height:200px;
  width:300px;
`;
const Info = Styled.div`
text-align:center;
transform: rotate(-45deg);
    position:absolute;
    top:25%;
    left:2%;
`;
const Notice = Styled.div`
background:orange;
width:50px;
color:white;
`;
const Title = Styled.h3`
margin:0;
padding:0;
font-weight:400;
font-family:ariel;
text-transform: uppercase;
color:wheat;
`;

function CatagItem({catagProduct}) {
  return (
    <Container id={catagProduct.id}>
        <Image src={catagProduct.image} alt="categoryImage"/>
        <Info>
        <Notice>NEW</Notice>
            <Title>{catagProduct.category}</Title>
        </Info>
    </Container>
  )
}

export default CatagItem