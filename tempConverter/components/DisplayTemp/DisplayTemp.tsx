import { Text, View, ViewBase } from 'react-native';
import { s } from './DisplayTemp.styles';

interface DisplayTempProps {
  inputTemp: number;
  isToCelcius: boolean;
  error?: string;
}

export const DisplayTemp = ({
  inputTemp,
  isToCelcius,
  error,
}: DisplayTempProps) => {
  const convertTemp = ({
    inputTemp,
    isToCelcius,
  }: DisplayTempProps): string => {
    if (isToCelcius) {
      const celcius = (inputTemp * 1.8 + 32).toFixed(0);
      return `${celcius} °C`;
    } else {
      const fahrenheit = ((inputTemp - 32) / 1.8).toFixed(0);
      return `${fahrenheit} °F`;
    }
  };

  return (
    <View style={s.root}>
      {error ? (
        <Text style={s.error}>{error}</Text>
      ) : (
        <Text style={s.text}>{convertTemp({ inputTemp, isToCelcius })}</Text>
      )}
    </View>
  );
};
