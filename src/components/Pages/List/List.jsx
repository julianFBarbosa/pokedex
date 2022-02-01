import React from "react";
import { Link, Outlet } from "react-router-dom";

export const List = () => {
  return (
    <div>
      <p>List</p>
      <Link to="/">Home</Link>
      <Outlet />
    </div>
  );
};
