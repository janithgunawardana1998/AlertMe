import React from 'react';
import {
  TextInput,
  Pressable,
  Text,
  View,
  StyleSheet,
} from 'react-native';

const SignupForm = (): JSX.Element => {
  const [number, onChangeNumber] = React.useState('');
  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>Alert Me</Text>
      <TextInput
        onChangeText={onChangeNumber}
        style={styles.input}
        maxLength={40}
        placeholder="Sri Lanka ID Number / Passport Number"
        value={number}
        keyboardType="numeric"
        autoFocus={true}
      />
      <TextInput
        style={styles.input}
        maxLength={40}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    marginTop: 55,
  
  },
  textSize: {
    fontSize: 47,
    color: 'black',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column-reverse',
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 15,
    backgroundColor: '#2a9d8f',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    width: 250,
    textAlign: 'center',
    },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    padding: 2,
  },
  input: {
    height: 55,
    width: 295,
    margin: 22,
    borderWidth: 3,
    borderRadius: 15,
    padding: 20,
  },
});

export default SignupForm;
