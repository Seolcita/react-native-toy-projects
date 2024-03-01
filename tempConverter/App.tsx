import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View, ImageBackground } from 'react-native';
import hotBackground from './assets/hot.png';
import coldBackground from './assets/cold.png';

import { s } from './App.styles';
import { Input } from './components/Input/Input';
import { useState } from 'react';
import { DisplayTemp } from './components/DisplayTemp/DisplayTemp';
import { Button } from './components/Button/Button';

export default function App() {
  const [inputTemp, setInputTemp] = useState(0);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isToCelcius, setIsToCelcius] = useState(false);

  const isColdWeather = () => {
    if (isToCelcius) {
      return inputTemp <= 32;
    } else {
      return inputTemp <= 0;
    }
  };

  return (
    <ImageBackground
      source={isColdWeather() ? coldBackground : hotBackground}
      style={s.backgroundImage}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.container}>
            <DisplayTemp
              inputTemp={inputTemp}
              isToCelcius={isToCelcius}
              error={error}
            />
            <Input
              defaultValue={0}
              onChange={setInputTemp}
              isToCelcius={isToCelcius}
              setError={setError}
            />
            <Button isToCelcius={isToCelcius} setIsToCelcius={setIsToCelcius} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
