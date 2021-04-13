import React from 'react';

import { Container, Text, Images, Image } from './styles';

function Stores() {
  return (
    <Container>
      <Text>Obtenha o aplicativo.</Text>
      <Images>
        <Image src="/images/app-store.png" alt="Baixar na app store" />
        <Image src="/images/play-store.png" alt="Baixar na play store" />
      </Images>
    </Container>
  );
}

export default Stores;
