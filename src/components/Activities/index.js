import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import avatar from '../../images/avatar.png';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  Username,
  CardFooter,
  Details,
  Value,
  Divider,
  LockIcon,
  Date,
  Actions,
  Option,
  CommentIcon,
  OptionLabel,
  HeartIcon,
} from './styles';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@ronnyacacio</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <Username>Ronny Acácio</Username>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>

            <Divider />

            <LockIcon />

            <Date>há 2 anos</Date>
          </Details>

          <Actions>
            <Option>
              <CommentIcon />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <HeartIcon />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
