import { View } from 'react-native';

import PersonalView from './views/001_Personal/index';
import CounterView from './views/002_Counter/index';
import FuelView from './views/003_Fuel/index';
import BMICalculatorView from './views/004_Bmi/index';
import JobListingView from './views/007_Jobs/index';
import CurrencyConverterView from './views/008_Currency/index';
import ShopView from './views/006_Shop/index';
import BankView from './views/005_Bank/index';

export default function App() {
  return (
    <View>
      <BankView />
      <ShopView />
      <CurrencyConverterView />
      <JobListingView />
      <BMICalculatorView />
      <FuelView />
      <CounterView />
      <PersonalView />
    </View>
  );
}
