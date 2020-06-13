import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Suggestions, Activities, Tips, Banner } from '../../components';
import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>

        <Suggestions />

        <Activities />

        <Tips />

        <Banner />
      </Container>
    </Wrapper>
  );
}
