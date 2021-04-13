import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  margin-top: 1rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;

  background: var(--border);
`;

export const Span = styled.span`
  margin: 0 1.125rem;

  font-weight: 600;
  font-size: 0.813rem;
  color: var(--gray);
`;
