import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { products } from './data';
import styles from './styles';

const ShopView = () => {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      {products.map((product) => (
        <View key={product.id} style={styles.productCard}>
          <Image
            source={{ uri: product.photo_url }}
            style={styles.productImage}
          />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ShopView;
