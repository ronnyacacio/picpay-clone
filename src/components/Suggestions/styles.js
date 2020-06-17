import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
})`
  background: ${({ theme }) => theme.colors.primary};
  height: 100px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  align-items: center;
`;

export const Img = styled.Image`
  width: 50px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-size: 14px;
`;
