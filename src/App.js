import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import ProductList from "./pages/ProductList";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./Success";
import Pay from "./Pay";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/products' element={<ProductList/>} />
        <Route exact path='/product' element={<SingleProduct/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/pay' element={<Pay/>} />
        <Route exact path='/sucess' element={<Success/>} />
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
