import React from 'react';
import {
  TextInput,
  Pressable,
  Text,
  View,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  Image,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [number, onChangeNumber] = React.useState('');
  const [text, onChangeText] = React.useState('Useless Text');
  const naturalDisasters = [
    '⚫Floods',
    '⚫Landslides',
    '⚫Cyclones',
    '⚫Droughts',
    '⚫Heatwaves',
    '⚫Cold waves',
    '⚫Hailstorms',
    '⚫Tornadoes',
    '⚫Wildfires',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>Alert Me</Text>
           <SafeAreaView>
      <TextInput
      onChangeText={onChangeNumber}
        style={styles.input}
        maxLength={40}
        placeholder="Sri Lanka ID Number / Passport Number"
        value={number}
        keyboardType="numeric"
        autoFocus={true}
      />
      <TextInput style={styles.input} maxLength={40} placeholder="Password" />
      </SafeAreaView>
      <Pressable style={styles.button}>
        <Text style={styles.button}>LOG IN</Text>
      </Pressable>
      <Text style={styles.text}>Dont have an Account? Sign Up</Text>

      <Text style={styles.earlywarning}>
        The app provides real-time early warnings for the following natural
        disasters in Sri Lanka.
      </Text>

      <View>
        {naturalDisasters.map((disaster, index) => (
          <Text key={index} style={styles.earlywarning2}>
            {disaster}
          </Text>
        ))}
      </View>

      <Text style={styles.allright}>A Product By 🅡CodeFlexa 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    marginTop: 55,
  },
  whiteText: {
    color: '"#FFFFFF"',
  },
  darkText: {
    color: '#000000',
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
  earlywarning: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    padding: 3,
  },
  earlywarning2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    paddingRight: -50,
  },
  allright: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003566',
    padding: 15,
  },
});
export default AppPro;
