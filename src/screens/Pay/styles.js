import styled from 'styled-components/native';
import { Feather as Icon } from '@expo/vector-icons';

Icon.loadFont();

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const ToggleThemeButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 40px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px black;
  elevation: 5;
`;

export const ThemeIcon = styled(Icon).attrs({
  size: 30,
  color: '#feb72b',
})``;
