import styled from "styled-components";

export const Text = styled.p`
  background-color: ${(props) => props.background || "#eaeaf4"};
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    filter: brightness(85%);
  }
`;
