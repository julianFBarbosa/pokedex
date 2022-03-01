import styled, { css } from "styled-components";

export const Input = styled.input`
  ${(props) =>
    props.variant &&
    css`
      padding: 12px 18px;
      border: none;
    `}
`;
