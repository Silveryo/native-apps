import { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import { currencies } from './data';
import styles from './styles';

const CurrencyConverterView = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState(currencies[0].name);
  const [toCurrency, setToCurrency] = useState(currencies[1].name);
  const [result, setResult] = useState('');

  const convertCurrency = () => {
    const fromRate = currencies.find(
      (currency) => currency.name === fromCurrency
    ).rate;
    const toRate = currencies.find(
      (currency) => currency.name === toCurrency
    ).rate;
    const result = (amount / fromRate) * toRate;
    setResult(result.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
      />
      <Picker selectedValue={fromCurrency} onValueChange={setFromCurrency}>
        {currencies.map((currency) => (
          <Picker.Item
            key={currency.id}
            label={currency.name}
            value={currency.name}
          />
        ))}
      </Picker>
      <Picker selectedValue={toCurrency} onValueChange={setToCurrency}>
        {currencies.map((currency) => (
          <Picker.Item
            key={currency.id}
            label={currency.name}
            value={currency.name}
          />
        ))}
      </Picker>
      <Button title="Convert" onPress={convertCurrency} />
      {result && (
        <Text style={styles.result}>
          {amount} {fromCurrency} = {result} {toCurrency}
        </Text>
      )}
    </View>
  );
};

export default CurrencyConverterView;
