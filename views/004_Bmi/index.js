import { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Text, Button } from 'react-native-paper';

import styles from './styles';

const BMICalculatorView = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;

    if (weightInKg > 0 && heightInM > 0) {
      const bmi = weightInKg / (heightInM * heightInM);
      let bmiCategory = '';

      if (bmi < 18.5) {
        bmiCategory = 'Underweight';
      } else if (bmi < 24.9) {
        bmiCategory = 'Normal weight';
      } else if (bmi < 29.9) {
        bmiCategory = 'Overweight';
      } else {
        bmiCategory = 'Obesity';
      }

      setResult(`Your BMI is ${bmi.toFixed(2)}. Category: ${bmiCategory}`);
    } else {
      setResult('Please enter valid weight and height.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setWeight}
        value={weight}
        keyboardType="numeric"
        placeholder="Enter your weight in kg"
      />
      <TextInput
        style={styles.input}
        onChangeText={setHeight}
        value={height}
        keyboardType="numeric"
        placeholder="Enter your height in cm"
      />
      <Button mode="contained" onPress={calculateBMI} style={styles.button}>
        Calculate BMI
      </Button>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};

export default BMICalculatorView;
