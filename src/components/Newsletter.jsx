import Styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { Button, Input } from "./reusable_styled/Reusable.Styled";

const Wrapper = Styled.div`
    background:#f0f7ff;
    display:flex;
align-items:center;
justify-content:center;
`;
const Container = Styled.div`
width:100%;
 height:400px;
 display:flex;
 flex-direction:column;
align-items:center;
gap:5px;
`;
const Title = Styled.h4`
font-family:roboto;
    font-size:60px;
    margin-bottom:20px;
    padding:0;
    letter-spacing:2px;
`;
const Desc = Styled.div`
font-family:monospace;
     font-size:20px;
     @media only screen and (max-width: 500px){
    width:80%;
    }
`;
const InputCont = Styled.div`
height:100px;
width:clamp(250px,80%,600px);
display:flex;
align-items:center;
`;
const NewsInput = Styled(Input)`
height:40px;
padding-left:20px;
flex:8
`;

const NewsBtn = Styled(Button)`
height:40px;
min-width:80px;
  flex:1;
  border:none;
  background:#088F8F;
  border-radius:0;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  &:hover{
    display:flex;
    opacity:1;
  }
  &:before{
    content:'Send';
    transition:all linear 0.5s;
     display:inline-block;
      width:0%;
      opacity:0;
 }
 &:hover::before{
    width:100%;
    opacity:1;
      transition: width 0.5s ease-out;
    }
 &:active{
      color:skyblue;
    }
`;

function Newsletter() {
  return (
    <Wrapper>
      <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favourite products.</Desc>
        <InputCont>
          <NewsInput placeholder="Your Email" />
          <NewsBtn>
           <SendIcon />
          </NewsBtn>
        </InputCont>
      </Container>
    </Wrapper>
  );
}

export default Newsletter;
