import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";



const App = () => {

  return (<>

    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
      </Route>
    </Routes>

  </>);
};

export default App;
