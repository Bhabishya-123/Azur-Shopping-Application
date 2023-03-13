import Styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

const Info = Styled.div`
position:absolute;
background:black;
opacity:0.5;
height:100%;
width:100%;
z-index:3;
display:none;
align-items:center;
justify-content:center;
gap:10px;
`;

const Container = Styled.div`
height:350px;
width:280px;
display:flex;
align-items:center;
justify-content:center;
background:aliceblue;
position:relative;
&:hover ${Info}{
  display:flex;
  cursor:pointer;
}
`;

const Image = Styled.img`
height:100%;
width:100%;
z-index:1;
object-fit:cover;
`;

const Icon = Styled.div`
height:35px;
width:35px;
border-radius:50%;
background:white;
display:flex;
align-items:center;
justify-content:center;
transition:all 500ms ease;
&:hover{
  transform:scale(1.1);
  background:violet;
}
`;

function Product({product}) {
  return (
    <Container>
        <Image src={product.category.image} alt="popular_product"/>

        <Info>
          <Icon><ShoppingCartIcon/></Icon>
          <Icon><FavoriteIcon/></Icon>
          <Link to="/product" style={{ textDecoration: "none" }}> <Icon><SearchIcon/></Icon> </Link>
        </Info>
    </Container>
  )
}

export default Product