import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrimaryNavbar from './components/navbar/primarynavbar';
import CopyNavbar from './components/nav/secondnavbar';
import OldPage from './components/page/oldpage/oldpage';
import HomePage from './components/page/home/home';
import BrandPage from './components/page/brand/brandpage';
import ProductPage from './components/page/particularproduct/productpage';
function App() {
  const dynamicRoutes = [
    { path: "/sell-phone", name: "Sell Phone" },
    { path: "/laptop", name: "Laptop" },
    { path: "/tv", name: "TV" },
    { path: "/tablet", name: "Tablet" },
  ];
  return (
    <Router>
      <>
        <div className="App">
          <PrimaryNavbar />
          <header>
            <div className="nav-area">
              <a href="/#" className="logo">
              </a>
              <CopyNavbar />
            </div>
          </header>
          <div>
 
          </div>
         
        </div>
        <div className='routed'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new-cashify" element={<HomePage />} />
            {/* {dynamicRoutes.map(({ path }) => (
              <Route key={path} path={path} element={<OldPage />} />
            ))} */}

            <Route path="/:heading" element={<OldPage />} />
            <Route path="/:heading/:brandName" element={<BrandPage />} />
            <Route path="/:heading/:brandName/:productName" element={<ProductPage />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;


