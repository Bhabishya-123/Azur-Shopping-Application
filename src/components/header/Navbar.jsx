import React from "react";
import Styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Input } from "../reusable_styled/Reusable.Styled";
import {Link} from 'react-router-dom'
import {mobile} from '../../responsive'

const Wrapper = Styled.div`
    position:sticky;
    top:0;
    background:white;
    z-index:2;
    height:60px;
    display:flex;
    align-items: center;
    ${mobile({height:'45px'})};
`;
const Left = Styled.div`
flex:1;
${mobile({flex:2})};
`;
const Logo = Styled.h1`
  display: flex;
  justify-content: center;
  color: orangered;
  cursor:pointer;
`;

const Center = Styled.div`
display:flex;
flex:3;
${mobile({flex:4})};
`;
const SearchContainer = Styled.div`
    height:45px;
    width:90%;
    border:none;
    background:whitesmoke;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const NavInput = Styled(Input)`
    height:25px;
    width:80%;
    background:whitesmoke;
    color:grey;
`;
const SearchBtn = Styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    height:45px;
    background:orange;
    border:none;
    cursor:pointer;
    color:white;
`;
const Right = Styled.div`
display:flex;
justify-content:flex-end;
flex:2;
${mobile({flex:'1',justifyContent:'center'})}
`;
const MenuItemCont = Styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-right:60px;
${mobile({display:'none'})};
`;
const MenuItem = Styled.div`
    font-size:16px;
    cursor:pointer;
    margin-left:25px;
`;

const MenuItemShopCart = Styled(MenuItem)`
 ${mobile({display:'flex'})};
 margin:0;
 display:none;
`

function Navbar() {
  return (
    <Wrapper>
      <Left>
      <Link to="/" style={{textDecoration:'none'}}>
        <Logo>AZUR</Logo>
        </Link>
      </Left>
      <Center>
        <SearchContainer>
          <NavInput placeholder="Search in Azur" />
        </SearchContainer>
        <SearchBtn>
          <SearchIcon />
        </SearchBtn>
      </Center>
      <Right>
     <MenuItemCont>
     <Link to="/register" style={{textDecoration:'none'}}>
     <MenuItem>Register</MenuItem>
     </Link>
     <Link to="/login" style={{textDecoration:'none'}}>
        <MenuItem>SignIn</MenuItem>
        </Link>
        <Link to="/cart" style={{textDecoration:'none'}}>
        <MenuItem>
          <Badge badgeContent={2} color="warning">
            <ShoppingCartIcon style={{color:'black'}}/>
          </Badge>
        </MenuItem>
        </Link>
     </MenuItemCont>
     <Link to="/cart" style={{textDecoration:'none'}}>
        <MenuItemShopCart>
          <Badge badgeContent={2} color="warning">
            <ShoppingCartIcon style={{color:'black'}}/>
          </Badge>
        </MenuItemShopCart>
        </Link>
      </Right>
    </Wrapper>
  );
}

export default Navbar;
