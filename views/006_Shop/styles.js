import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  productCard: {
    width: 200,
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
  },
  productDescription: {
    fontSize: 14,
    marginHorizontal: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
});
