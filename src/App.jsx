// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 🎯 VÉRIFIEZ CETTE LIGNE !
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx'; 
import Login from './pages/Login.jsx'; 
import Results from './pages/Results.jsx'; 
import CategoryPage from './pages/CategoryPage.jsx';
import Detail from './pages/Detail.jsx';
import Cart from './pages/Cart.jsx'; 
import Register from './pages/Register.jsx';
import Account from './pages/Account.jsx';
import NotFound from './pages/NotFound.jsx'; // Import de la page 404

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          {/* Routes de détail et de catégorie (doivent être plus spécifiques que les routes simples) */}
          <Route path=":categorySlug/:itemId" element={<Detail />} /> 
          <Route path=":categorySlug" element={<CategoryPage />} /> 
          
          {/* Routes simples */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="account" element={<Account />} />
          <Route path="results" element={<Results />} />
          <Route path="cart" element={<Cart />} />
          
          {/* Route d'accueil */}
          <Route index element={<Home />} /> 
          
          {/* Route 404 (doit toujours être la dernière) */}
          <Route path="*" element={<NotFound />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;