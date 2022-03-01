import styled from "styled-components";

export const PokemonItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #00000047;
  padding: 12px;
  transition: all .3s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const PokemonImage = styled.img`
  width: 226px;
  max-width: 90%;
  margin: 0 auto;
  padding-bottom: 16px;
  border-bottom: 1px solid #00000047;

`;
