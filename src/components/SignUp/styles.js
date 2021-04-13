import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0.625rem;
  padding: 1.375rem 0;

  background: var(--white);
  border: 1px solid var(--border);

  @media (max-width: 450px) {
    background: transparent;
    border: none;
  }
`;

export const Info = styled.p`
  text-align: center;
  font-size: 0.875rem;

  & > a {
    text-decoration: none;
    font-weight: 600;
    color: var(--blue);
  }
`;
