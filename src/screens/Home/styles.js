import styled from 'styled-components/native';
import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

export const Wrapper = styled.SafeAreaView`
  margin-top: ${statusBarHeight}px;
  flex: 1;
  background: #f8f8f8;
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Header = styled.View`
  height: 50px;
  padding: 10px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: #222;
  font-size: 14px;
  text-align: center;
  opacity: 0.8;
`;

export const Balance = styled.Text`
  color: #222;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
