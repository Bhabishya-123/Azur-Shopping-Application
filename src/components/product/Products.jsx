import { useState } from "react";
import { useEffect } from "react";
import Styled from "styled-components";
import Product from "./Product";
import axios from 'axios';

const Wrapper = Styled.div`
    background:whitesmoke;
    margin-bottom:50px;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:10px;
`;

function Products() {
  const [popularProduct, setpopularProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.escuelajs.co/api/v1/products");
      setpopularProduct(result.data);
    };
    fetchData();
  }, []);
  return (
    <Wrapper>
  {
    popularProduct.filter((item)=>item.id<=12).map((product)=>(
<Product key={product.id} product={product}/>
    ))
  }
    </Wrapper>
  );
}

export default Products;
