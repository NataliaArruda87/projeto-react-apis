import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from '../Pages/DetalisPage/DetailsPage';
import HomePage from '../Pages/HomePage/HomePage';
import PokedexPage from '../Pages/PokedexPage/PokedexPage';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/pokedex" element={<PokedexPage/>}/>
            <Route path="/details/:pokemonId" element={<DetailsPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
