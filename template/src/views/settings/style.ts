import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
  },
  textContainerStyle: {
    flex: 1,
    alignItems: 'flex-start',
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 15,
  },
  description: {
    fontSize: 18,
    color: 'green',
    marginTop: 20,
    lineHeight: 26,
  },
  moreDesc: {
    fontSize: 16,
    color: 'blue',
    marginTop: 20,
    lineHeight: 26,
  },
});
