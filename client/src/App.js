import React, { Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import s from "./App.css";
import NavBar from "./Components/navBar/NavBar";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import ShopsPage from "./Pages/ShopsPage";

const App = () => {
  return (
    <div className={s.App}>
      <Suspense>
        {/* <Router> */}
          <Routes>
            
            <Route path="/" element={<NavBar />}>
              <Route index path="/" element={<ShopsPage />} />
              <Route path="/cart" element={<ShoppingCartPage />} />
            </Route>
          </Routes>
        {/* </Router> */}
      </Suspense>
    </div>
  );
};

export default App;
