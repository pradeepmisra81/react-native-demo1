import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import { Platform, StyleSheet } from 'react-native';


const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
      <Button style={styles}>Button</Button>
    </View>
  );
};


const styles = StyleSheet.create({
 container: {
flex: 1,
   ...Platform.select({
     ios: {
       backgroundColor: 'red',
     },
     android: {
       backgroundColor: 'green',
     },
     default: {
       // other platforms, web for example
       backgroundColor: 'green',
     },    }),
},
});

export default PizzaTranslator;