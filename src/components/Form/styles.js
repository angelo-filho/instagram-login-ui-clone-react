import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    background: var(--white);

    border: 1px solid var(--border);

    padding: 1rem 2.5rem;

    @media (max-width: 450px) {
      background: transparent;
      border: none;
    }
  }
`;

export const Image = styled.img`
  width: 174px;

  margin-bottom: 1.25rem;
`;

const Button = styled.button`
  border: none;
  background: transparent;

  display: block;

  width: 100%;

  cursor: pointer;
`;

export const EnterButton = styled(Button)`
  padding: 0.438rem 0;
  margin-top: 0.25rem;

  background: var(--blue);

  border-radius: 4px;

  font-weight: 600;
  font-size: 0.875rem;
  color: var(--white);

  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

export const EnterButtonDisabled = styled(EnterButton)`
  opacity: 0.7;
`;

export const FacebookButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1.75rem;

  font-weight: 600;
  font-size: 0.875rem;
  color: var(--facebook);

  & > img {
    width: 16px;
    height: 16px;

    margin-right: 0.5rem;
  }

  &:active {
    outline: none;
    opacity: 0.5;
  }
`;

export const Link = styled.a`
  margin-top: 1.25rem;
  margin-bottom: 0.25rem;

  text-decoration: none;

  font-size: 0.75rem;
  color: var(--facebook);
`;
