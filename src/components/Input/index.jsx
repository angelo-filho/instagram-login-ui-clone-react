import React, { useState } from 'react';

import { Container, Label, Button } from './styles';

function Input({ name, label, type, password, isLenghtZero, ...props }) {
  const [isActive, setIsActive] = useState(false);
  const [inputType, setInputType] = useState(type);
  const [buttonText, setButtonText] = useState('Mostrar');

  function toggleIsActive(event) {
    if (
      (event.target.value.length === 1 && !isActive) ||
      (event.target.value.length === 0 && isActive)
    ) {
      setIsActive((active) => !active);
    }
  }

  function changeInputType() {
    setInputType(inputType === 'password' ? 'text' : 'password');
    setButtonText((text) => (text === 'Mostrar' ? 'Ocultar' : 'Mostrar'));
  }

  return (
    <Container>
      <input
        className={isActive ? 'active' : ''}
        onChange={(event) => {
          toggleIsActive(event);
          props.onChange(event);
        }}
        id={name}
        name={name}
        type={inputType}
      />
      <Label className={isActive ? 'active' : ''} htmlFor={name}>
        {label}
      </Label>
      {password && !isLenghtZero() ? (
        <Button type="button" onClick={changeInputType}>
          {buttonText}
        </Button>
      ) : null}
    </Container>
  );
}

export default Input;
