import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 1rem;

  width: 98vw;
  height: 100%;
  min-height: 100vh;

  @media (max-width: 875px) {
    align-items: initial;
    padding-top: 3rem;
  }

  @media (max-width: 450px) {
    align-items: initial;
    padding-top: 0;
  }
`;
