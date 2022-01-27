import React from "react";
import { BrowserRouter, Routes as RouteList, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { List } from "./components/pages/List";
import { Profile } from "./components/pages/Profile";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouteList>
        <Route path="/" element={<Home />} />
        <Route path="pokemons">
          <Route index element={<List />}/>
          <Route path=":id" end element={<Profile />} />
        </Route>
      </RouteList>
    </BrowserRouter>
  );
};
