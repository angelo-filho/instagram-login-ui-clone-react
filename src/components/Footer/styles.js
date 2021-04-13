import styled from 'styled-components';

export const Container = styled.footer`
  width: 98vw;

  margin-top: 2rem;
  margin-bottom: 4rem;
  padding: 0 1.25rem;
`;

export const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  justify-content: center;

  width: 100%;
  margin-bottom: 0.5rem;
`;

export const Link = styled.li`
  list-style: none;

  flex: 0 0 auto;

  display: flex;

  font-size: 0.75rem;
  color: var(--gray);

  & > a {
    text-decoration: none;
    font-size: 0.75rem;
    color: var(--gray);

    svg {
      transform: rotateZ(180deg) translateY(-0.1rem);
      margin-left: 0.25rem;
    }
  }
`;

export const Copyright = styled(Links)`
  margin-top: 1rem;
`;
