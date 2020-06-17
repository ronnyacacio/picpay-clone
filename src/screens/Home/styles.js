import styled from 'styled-components/native';
import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

export const Wrapper = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${statusBarHeight}px;
`;

export const Header = styled.View`
  height: 50px;
  padding: 10px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  text-align: center;
  opacity: 0.8;
`;

export const Balance = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
