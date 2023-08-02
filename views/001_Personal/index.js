import { Text, View, Pressable } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './styles';

const PersonalView = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.heading}>Personal Information</Text>
        <Text style={styles.paragraph}>Zdenek, 25yo</Text>
      </Card>
      <Card style={styles.card}>
        <Text style={styles.heading}>Education</Text>
        <Text style={styles.paragraph}>Technicka Univerzita Liberec</Text>
      </Card>
      <Card style={styles.card}>
        <Text style={styles.heading}>Experience</Text>
        <Text style={styles.paragraph}>Marketing, Software development</Text>
      </Card>
      <Card style={styles.card}>
        <Text style={styles.heading}>Hobbies</Text>
        <Text style={styles.paragraph}>Surfing</Text>
      </Card>
    </View>
  );
};

export default PersonalView;
