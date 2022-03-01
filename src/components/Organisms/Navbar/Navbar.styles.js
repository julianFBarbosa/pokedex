import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.nav`
  background: #f5f5f5;
  box-shadow: 0px 1px 5px 0px #dfdfdf;
  margin-bottom: 16px;
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1080px;
  max-width: 95%;
  margin: 0 auto;
  padding: 24px 0;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;
