import { Platform } from 'react-native';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <>
      <StackNavigator behavior={Platform.OS === 'ios' ? 'padding' : 'height'}/>
    </>
  );
}


