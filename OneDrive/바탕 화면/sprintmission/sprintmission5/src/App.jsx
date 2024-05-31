//import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../src/pages/Homepage/Homepage";
import MarketPage from "./pages/MarketPage/MarketPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/items" element={<MarketPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
