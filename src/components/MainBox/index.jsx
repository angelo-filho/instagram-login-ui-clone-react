import React from 'react';
import Carousel from '../Carousel';
import FormBox from '../FormBox';

import { Container } from './styles';

function MainBox() {
  return (
    <Container>
      <Carousel />
      <FormBox />
    </Container>
  );
}

export default MainBox;
