import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import { ThemeContext } from 'styled-components';

import { Button, MoneyIcon, Label } from './styles';

export default function PayButton({ focused }) {
  const { title } = useContext(ThemeContext);

  const navigation = useNavigation();

  function handleNavigateToPay() {
    navigation.navigate('Pay');
  }

  return (
    <TouchableWithoutFeedback onPress={handleNavigateToPay}>
      <Button
        colors={
          focused
            ? title === 'light'
              ? ['#093f32', '#093f32']
              : ['#fff', '#ccc']
            : ['#00fc6c', '#00ac4a']
        }
        start={[1, 0.2]}
      >
        {console.log(focused)}
        <MoneyIcon focused={focused} />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}
