import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

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
  Date,
  Actions,
  Option,
  OptionLabel,
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

            <Feather name="lock" color="#222" size={14} />

            <Date>há 2 anos</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                color="#222"
                size={14}
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" color="#222" size={14} />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
