import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

import styles from './styles';

const BankView = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [education, setEducation] = useState('');
  const [accountLimit, setAccountLimit] = useState(0);
  const [isBrazilian, setIsBrazilian] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    setSubmittedData({
      name,
      age,
      gender,
      education,
      accountLimit,
      isBrazilian,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open a Bank Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
      />
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
      <Picker
        selectedValue={education}
        onValueChange={(itemValue) => setEducation(itemValue)}>
        <Picker.Item label="High School" value="highSchool" />
        <Picker.Item label="Bachelor's Degree" value="bachelorsDegree" />
        <Picker.Item label="Master's Degree" value="mastersDegree" />
      </Picker>
      <Text>Account Limit: {accountLimit}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={10000}
        step={1}
        value={accountLimit}
        onValueChange={setAccountLimit}
      />
      <View style={styles.switchContainer}>
        <Text>Brazilian?</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isBrazilian ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsBrazilian}
          value={isBrazilian}
        />
      </View>
      <Button title="Confirm" onPress={handleSubmit} />
      {submittedData && (
        <View style={styles.submittedData}>
          <Text>Name: {submittedData.name}</Text>
          <Text>Age: {submittedData.age}</Text>
          <Text>Gender: {submittedData.gender}</Text>
          <Text>Education: {submittedData.education}</Text>
          <Text>Account Limit: {submittedData.accountLimit}</Text>
          <Text>Is Brazilian: {submittedData.isBrazilian ? 'Yes' : 'No'}</Text>
        </View>
      )}
    </View>
  );
};

export default BankView;
