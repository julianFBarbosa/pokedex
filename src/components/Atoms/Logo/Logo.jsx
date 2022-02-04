import React from "react";

export const Logo = ({ src, alt }) => {
  return <img src={src ? src : ""} alt={alt ? alt : ""} />;
};
