import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PizzaTranslator from './Components/PizzaTranslator';
import Login from './Components/Login/Login';
import Touchables from './Components/Touchable/Touchable'
import SafeAreaView from './Components/TextInputExample/TextInputExample1'
import MultilineTextInputExample from
 './Components/TextInputExample/MultilineTextInputExample'

export default function App() {
  return (
    <Login/>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
