import React, { useState } from 'react';

import { Container, Image, EnterButton, FacebookButton, Link } from './styles';

import Input from '../Input';
import Divider from '../Divider';

function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function changeUsernameValue(event) {
    setUsername(event.target.value);
  }

  function changePasswordValue(event) {
    setPassword(event.target.value);
  }

  function isLenghtZero() {
    return password.length === 0;
  }

  function canSend() {
    return password.length >= 6 && username.length > 0;
  }

  return (
    <Container>
      <form action="">
        <Image src="/images/logo-instagram.png" alt="" />
        <Input
          name="email"
          label="Telefone, nome de usuário ou email"
          onChange={changeUsernameValue}
          isLenghtZero={isLenghtZero}
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          onChange={changePasswordValue}
          isLenghtZero={isLenghtZero}
          password
        />
        <EnterButton disabled={!canSend()}>Entrar</EnterButton>
        <Divider text="OU" />
        <FacebookButton>
          <img src="/images/facebook-logo.png" alt="Logo facebook" />
          Entrar com o Facebook
        </FacebookButton>
        <Link href="#">Esqueceu a senha?</Link>
      </form>
    </Container>
  );
}

export default Form;
