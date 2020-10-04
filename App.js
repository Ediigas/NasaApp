
import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text

} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.backgroud}>
      <View style={styles.containerLogo}>
        <Image
          source={require('./src/assets/120-2-02.png')}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => { }}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Access</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text>Create free account</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>


  );
}

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#333333',
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",

  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: '90%',
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  submitText: {
    color: "#FFF",
    fontSize:18,
  }

})
