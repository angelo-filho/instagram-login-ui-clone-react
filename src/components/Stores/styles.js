import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  margin-top: 1.375rem;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 0.875rem;

  margin-bottom: 1.375rem;
`;

export const Image = styled.img`
  width: 135px;

  cursor: pointer;
`;

export const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${Image}:first-child {
    margin-right: 0.5rem;
  }
`;
