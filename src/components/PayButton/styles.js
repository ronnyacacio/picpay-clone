import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export const Button = styled(LinearGradient)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const MoneyIcon = styled(MaterialIcons).attrs(({ theme, focused }) => ({
  name: 'attach-money',
  size: 30,
  color: theme.title === 'dark' && focused ? '#000' : '#fff',
}))``;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({ theme, focused }) =>
    focused && theme.title === 'dark' ? '#000' : '#fff'};
`;
