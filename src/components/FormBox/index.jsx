import React from 'react';
import Form from '../Form';
import SignUp from '../SignUp';
import Stores from '../Stores';

import { Container } from './styles';

function FormBox() {
  return (
    <Container>
      <Form />
      <SignUp />
      <Stores />
    </Container>
  );
}

export default FormBox;
