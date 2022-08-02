import {Dimensions, StyleSheet} from 'react-native';

//buraya yazılacak stili geri döndür
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 18,
  },
  description: {
    marginTop: 3,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
    color:'purple',
  },
  inner_container: {
    padding: 5,
  },
});