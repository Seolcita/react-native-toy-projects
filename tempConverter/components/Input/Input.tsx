import { Text, TextInput, View } from 'react-native';
import { s } from './Input.styles';
import { useState } from 'react';

interface InputProps {
  defaultValue?: number;
  isToCelcius: boolean;
  onChange: (value: number) => void;
  setError: (value: string | undefined) => void;
}

export const Input = ({
  defaultValue,
  isToCelcius,
  onChange,
  setError,
}: InputProps) => {
  const handleOnChange = (text: number) => {
    if (isNaN(text)) {
      setError('Please enter a valid number');
    } else {
      setError(undefined);
      onChange(+text);
    }
  };

  return (
    <View style={s.root}>
      <TextInput
        style={s.input}
        placeholder='Type your temperature'
        maxLength={4}
        defaultValue={defaultValue?.toString()}
        onChangeText={(text) => handleOnChange(+text)}
      />
      <Text style={s.unit}>{isToCelcius ? 'F' : 'C'}</Text>
    </View>
  );
};
