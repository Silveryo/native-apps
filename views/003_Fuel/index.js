import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Text, Button } from 'react-native-paper';

import styles from './styles';

const FuelView = () => {
  const [ethanolPrice, setEthanolPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const ratio = parseFloat(ethanolPrice) / parseFloat(gasolinePrice);
    if (ratio < 0.7) {
      setResult('Ethanol is more economical.');
    } else {
      setResult('Gasoline is more economical.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}> Fuel Calculator </Text>
      <TextInput
        style={styles.input}
        onChangeText={setEthanolPrice}
        value={ethanolPrice}
        keyboardType="numeric"
        placeholder="Enter the price of ethanol"
      />
      <TextInput
        style={styles.input}
        onChangeText={setGasolinePrice}
        value={gasolinePrice}
        keyboardType="numeric"
        placeholder="Enter the price of gasoline"
      />
      <Button mode="contained" onPress={calculate} style={styles.button}>
        Calculate
      </Button>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};

export default FuelView;
