import React from "react";

import * as StyleLogo from "./Logo.styles";

export const Logo = ({ src, alt }) => {
  return <StyleLogo.Image src={src ? src : ""} alt={alt ? alt : ""} />;
};
