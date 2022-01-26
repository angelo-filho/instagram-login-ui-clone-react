import styled from "styled-components";

export const Container = styled.main`
  position: relative;

  width: 100%;

  margin-bottom: 0.5rem;

  input {
    outline: none;

    width: 100%;

    padding: 0.625rem 0.5rem;

    background: var(--bg-color);
    border: 1px solid var(--border);
    border-radius: 3px;

    &:focus {
      border: var(--gray) solid 1px;
    }

    &.active {
      padding: 1rem 0.5rem 0.25rem;
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 9px;
  top: 12px;

  font-size: 0.75rem;

  color: var(--gray);

  user-select: none;
  cursor: text;

  transition: 0.1s;

  &.active {
    top: 4px;

    font-size: 0.625rem;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  background: transparent;
  border: none;

  font-weight: 600;
  font-size: 0.875rem;

  cursor: pointer;
`;
