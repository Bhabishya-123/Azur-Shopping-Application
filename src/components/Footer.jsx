import Styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";

const Wrapper = Styled.div`
    display:flex;
    @media only screen and (max-width: 700px){
      display:flex;
      flex-direction:column;
      gap:20px;
    }
`;
const Left = Styled.div`
  display: flex;
  flex-direction:column;
flex:1.5;
margin-left:5%;
`;
const Logo = Styled.h3`
margin-bottom:10px;
color:orangered;
font-size:25px;
cursor:pointer;
`;
const Desc = Styled.p`
  display: flex;
  justify-content: center;
  width:85%;

`;
const SocialContainer = Styled.div`
  display: flex;
  justify-content: flex-start;
  gap:10px;
`;
const SocialIcon = Styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  height:40px;
  width:40px;
  border-radius:50%;
  cursor:pointer;
  transition:all .2s ease-in-out;
  opacity:0.8;
&:hover{
  transform:scale(1.1);
  opacity:1;
}
`;

const Center = Styled.div`
     flex:1;
     margin-left:5%;
`;
const Title = Styled.h3`
`;
const List = Styled.ul`
      display:flex;
      flex-direction:column;
      height:180px;
      flex-wrap:wrap;
      list-style:none;
      padding:0;
`;
const ListItem = Styled.li`
     margin-top:15px;
     &:hover{
      cursor:pointer;
      text-decoration:underline;
      color:grey;
     }
`;

const Right = Styled.div`
     display:flex;
     flex-direction:column;
     gap:5px;
     flex:1;
     margin-left:5%;
     `;
const ContactItem = Styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top:5px;
  align-items:center;
  cursor:pointer;
`;
const Payment = Styled.div`
height:80px;
display:flex;
align-items:center;

`;

function Footer() {
  return (
    <Wrapper>
      <Left>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>AZUR</Logo>
        </Link>

        <Desc>
          The website footer is the section of content at the very bottom of a
          web page. It typically contains a copyright notice, link to a privacy
          policy, sitemap, logo, contact information, social media icons, and an
          email sign-up form.
        </Desc>
        <SocialContainer>
          <SocialIcon style={{ background: " #3b5998 " }}>
            <FacebookIcon style={{ color: "white" }} />
          </SocialIcon>
          <SocialIcon style={{ background: "#bc2a8d" }}>
            <InstagramIcon style={{ color: "white" }} />
          </SocialIcon>
          <SocialIcon style={{ background: "#00acee" }}>
            <TwitterIcon style={{ color: "white" }} />
          </SocialIcon>
          <SocialIcon style={{ background: "#c8232c" }}>
            <PinterestIcon style={{ color: "white" }} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Whishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{marginRight: "10px" }} />
          Ishworpur-6, Sarlahi Nepal
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight: "10px" }} />
          +977 9817604185
        </ContactItem>
        <ContactItem>
          <MailIcon style={{marginRight: "10px" }} />
          bhabishyaghimire88@gmail.com
        </ContactItem>
        <Payment>
        <img src={process.env.PUBLIC_URL + "/images/visa.png"}  alt="payment" />
        <img src={process.env.PUBLIC_URL + "/images/mastercard.png"}  alt="payment" />
        <img height="45px" src={process.env.PUBLIC_URL + "/images/paypal.png"}  alt="payment" />
        </Payment>
      </Right>
    </Wrapper>
  );
}

export default Footer;
