import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  font-weight: 550;
  background: ${(props) => props.theme.primaryRed};
  padding: 12px 18px;
  transition: all 0.2s ease-in;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.primaryRedHover};
  }
`;
