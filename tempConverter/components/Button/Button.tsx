import { Text, TouchableOpacity } from 'react-native';

import { s } from './Button.styles';

interface ButtonProps {
  isToCelcius: boolean;
  setIsToCelcius: (value: boolean) => void;
}

export const Button = ({ isToCelcius, setIsToCelcius }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={s.button}
      onPress={() => setIsToCelcius(!isToCelcius)}
    >
      <Text>Convert to {isToCelcius ? 'Fahrenheit' : 'Celcius'}</Text>
    </TouchableOpacity>
  );
};
