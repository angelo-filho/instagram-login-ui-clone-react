import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 454px;
  height: 618px;
  background: url(/images/background.png);

  margin-right: -1rem;
  margin-left: -2rem;

  @media (max-width: 875px) {
    display: none;
  }
`;

export const Image = styled.img`
  position: absolute;
  left: 151px;
  top: 100px;
  visibility: hidden;

  &.previous,
  &.current {
    visibility: visible;
  }

  &.current {
    z-index: 1000;

    animation: 1.5s fadeIn;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
