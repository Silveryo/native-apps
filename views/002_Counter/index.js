import { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

import styles from './styles';

const CounterView = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>People Counter: {counter}</Text>
      <Button mode="contained" onPress={increment} style={styles.button}>
        Increment
      </Button>
      <Button
        mode="contained"
        onPress={decrement}
        style={styles.button}
        disabled={counter === 0}>
        Decrement
      </Button>
    </View>
  );
};

export default CounterView;
