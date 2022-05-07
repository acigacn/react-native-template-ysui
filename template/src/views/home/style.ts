import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemContainerStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    height: 90,
  },
  textContainerStyle: {
    flex: 1,
    alignItems: 'flex-start',
  },
  imageStyle: {
    width: 65,
    height: 65,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: 'black',
    marginTop: 8,
  },
  description: {
    fontSize: 15,
    color: 'blue',
    marginTop: 12,
  },
});
