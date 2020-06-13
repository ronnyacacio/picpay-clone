import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Button, Label } from './styles';

export default function PayButton({ focused }) {
  const navigation = useNavigation();

  function handleNavigateToPay() {
    navigation.navigate('Pay');
  }

  return (
    <TouchableWithoutFeedback onPress={handleNavigateToPay}>
      <Button
        colors={focused ? ['#093f32', '#093f32'] : ['#00fc6c', '#00ac4a']}
        start={[1, 0.2]}
      >
        <MaterialIcons name="attach-money" size={30} color="#fff" />
        <Label>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}
