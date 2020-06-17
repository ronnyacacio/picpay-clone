import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {
  Container,
  Title,
  Description,
  ToggleThemeButton,
  ThemeIcon,
} from './styles';

export default function Pay({ toggleTheme }) {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Title>ToggleTheme</Title>

      <Description>Alterne o tema entre Dark e Light</Description>

      <ToggleThemeButton onPress={toggleTheme}>
        <ThemeIcon name={title === 'light' ? 'sun' : 'moon'} />
      </ToggleThemeButton>
    </Container>
  );
}
