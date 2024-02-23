import { Link } from "react-router-dom";
import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #00000047;
  padding: 12px;
  transition: all 0.3s;
  background: #fff;
`;

export const Image = styled.img`
  width: 226px;
  max-width: 90%;
  margin: 0 auto;
  padding-bottom: 16px;
  border-bottom: 1px solid #00000011;
`;

export const Name = styled.p`
  padding: 8px;
  text-align: center;
`;

export const CTA = styled(Link)`
  padding: 8px;
  background: #f2d52f;
  color: #fff;
  transition: all 0.3s;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: #ffe031;
    color: #fff;
  filter: brightness(100%);
  }
`;
