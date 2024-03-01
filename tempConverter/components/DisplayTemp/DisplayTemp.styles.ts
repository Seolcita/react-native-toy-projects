import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  unit: {
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  error: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});
