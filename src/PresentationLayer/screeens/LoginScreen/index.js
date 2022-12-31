import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Octicons, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'


const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");

  return (
    <View style={styles.container}>

        {/****************** Heading *****************/}
        <Text style={styles.text}>TocSin</Text>

        {/***************** Inputs ***************/}
        <View>
            <View style={styles.inputContainer}>
                <View style={styles.inputIcon}>
                    <Octicons name="person" size={25} color="#666" />
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    keyboardType="email-address"
                    placeholder="Email"
                />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputIcon}>
                    <AntDesign name="lock1" size={25} color="#666" />
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    secureTextEntry={true}
                    placeholder="Password"
                />
            </View>
        </View>

        {/************** Submit button *************/}
        <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/************* Forgot Password section ****************/}
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => alert('to forgot password!')}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/****************** Social buttons *****************/}
        <View>
            <TouchableOpacity style={[styles.socialButtonContainer, {backgroundColor: "#2e64e5"}]}>
                <View style={styles.iconWrapper}>
                    <FontAwesome name="facebook" style={styles.icon} size={22} color="white" />
                </View>
                <View style={styles.btnTxtWrapper}>
                    <Text style={[styles.socialButtonText, {color: "white"}]}>Sign In with Facebook</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.socialButtonContainer, {backgroundColor: "red"}]}>
                <View style={styles.iconWrapper}>
                    <FontAwesome name="google" style={styles.icon} size={22} color="pink" />
                </View>
                <View style={styles.btnTxtWrapper}>
                    <Text style={[styles.socialButtonText, {color: "white"}]}>Sign In with Google</Text>
                </View>
            </TouchableOpacity>
        </View>

        {/********************* To login page **********************/}
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.navButtonText}>Do not have an account? Create here</Text>
        </TouchableOpacity>

    </View>
  )
}

export default LoginScreen