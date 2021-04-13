import React from 'react';

import { Container, Line, Span } from './styles';

function Divider({ text }) {
  return (
    <Container>
      <Line />
      <Span> {text} </Span>
      <Line />
    </Container>
  );
}

export default Divider;
