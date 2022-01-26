import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 98vw;

  padding-top: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 875px) {
    align-items: initial;
    padding-top: 3rem;
  }

  @media (max-width: 450px) {
    align-items: initial;
    padding-top: 0;
  }
`;
