import React from 'react'
import Navbar from '../components/header/Navbar'
import Announcement from '../components/header/Announcement'
import Products from '../components/product/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Styled from 'styled-components'

const Title = Styled.h1`
margin:20px;
font-weight:300;
/* text-decoration:underline; */
`;
const FilterCont = Styled.div`
display:flex;
justify-content:space-between;
`;
const Filter = Styled.div`
margin:20px;
`;
const FilterText = Styled.span`
font-size:20px;
font-weight:500;
margin-right:20px;
`;
const Select = Styled.select`
margin-right:20px;
padding:15px
`;
const Option = Styled.option`

`;

function ProductList() {
  return (
<>
  <Navbar/>
  <Announcement/>
  <Title>Dresses</Title>
  <FilterCont>
    <Filter>
      <FilterText>Filter Products:</FilterText>
      <Select>
        <Option disabled selected>Color</Option>
        <Option>White</Option>
        <Option>Black</Option>
        <Option>Red</Option>
        <Option>Blue</Option>
        <Option>Green</Option>
      </Select>
      <Select>
        <Option disabled selected>Size</Option>
        <Option>XS</Option>
        <Option>S</Option>
        <Option>M</Option>
        <Option>L</Option>
        <Option>XL</Option>
      </Select>
    </Filter>
    <Filter><FilterText>Sort Products:</FilterText>
    <Select>
        <Option selected>Newest</Option>
        <Option>Price (asc)</Option>
        <Option>Price (desc)</Option>
      </Select>
    </Filter>
  </FilterCont>
  <Products/>
  <Newsletter/>
  <Footer/>
</>
 )
}

export default ProductList