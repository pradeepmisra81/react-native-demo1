import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tw from 'tailwind-react-native-classnames';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    // <View style={tw`flex items-center justify-center h-screen`}>
    //   <Text style={tw`text-lg font-bold text-blue-500`}>Hello, Tailwind!</Text>
    // </View>
    <View style={loginStyles.container}>
      <View style={tw`flex items-center justify-center`}>
       <Text style={tw`text-lg font-bold text-blue-500`}>Hello, Tailwind!</Text>
    </View> 
      <View style={loginStyles.inputView}>
        <TextInput
          style={loginStyles.TextInput}
          placeholder="Email.........."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={loginStyles.inputView}>
        <TextInput
          style={loginStyles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={loginStyles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={loginStyles.loginBtn}>
        <Text style={loginStyles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});

export default Login;