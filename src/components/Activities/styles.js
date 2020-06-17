import styled from 'styled-components/native';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  margin-top: 20px;
  padding: 0 16px;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: bold;
`;

export const Card = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  height: 30px;
`;

export const Avatar = styled.Image``;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: 14px;
`;

export const Username = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
`;

export const CardFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #f75175;
  font-size: 14px;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 2px;
  height: 12px;
  background: ${({ theme }) => theme.colors.text};
  margin: 0 10px;
  opacity: 0.4;
`;

export const LockIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'lock',
  color: theme.colors.text,
  size: 14,
}))``;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-left: 5px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  margin-left: 15px;
  flex-direction: row;
  align-items: center;
`;

export const CommentIcon = styled(MaterialCommunityIcons).attrs(
  ({ theme }) => ({
    name: 'comment-outline',
    color: theme.colors.text,
    size: 14,
  })
)``;

export const OptionLabel = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  margin-left: 5px;
`;

export const HeartIcon = styled(AntDesign).attrs(({ theme }) => ({
  name: 'hearto',
  color: theme.colors.text,
  size: 14,
}))``;
