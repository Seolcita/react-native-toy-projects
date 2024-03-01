import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    borderRadius: 25,
    paddingLeft: 20,
  },
  unit: {
    position: 'absolute',
    right: 20,
    top: 0,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
