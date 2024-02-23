import styled from "styled-components";

export const Centered = styled.p`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-transform: capitalize;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.div`
  display: flex;
  gap: 8px;
`;

export const Body = styled.div`
  margin-top: 16px;
  border-top: 1px solid #3c3c3c55;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MoveTitle = styled.p`
  font-weight: 600;
  padding: 8px;
`;

export const MoveContainer = styled.div``;

export const MoveList = styled.div`
  max-height: 200px;
  width: 140px;
  margin: 8px;
  margin-right: 0;
  overflow-y: scroll;
`;

export const MoveItem = styled.div`
  padding: 2px 4px;
`;

export const SpriteContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow: auto;
`;

export const SpriteImage = styled.img`
  width: 200px;
  height: 200px;
`;
