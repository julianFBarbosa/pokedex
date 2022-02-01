import React from "react";
import { BrowserRouter, Routes as RouteList, Route } from "react-router-dom";
import { List } from "./components/Pages/List";
import { Detail } from "./components/Pages/Detail";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouteList>
        <Route path="/" element={<List />} />
        <Route path="pokemons">
          <Route index element={<List />}/>
          <Route path=":id" end element={<Detail />} />
        </Route>
      </RouteList>
    </BrowserRouter>
  );
};
