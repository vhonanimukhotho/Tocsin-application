import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Octicons, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'


const SignUpScreen = () => {
  const navigation = useNavigation();

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");

  return (
    <View style={styles.container}>

        {/****************** Heading *****************/}
        <Text style={styles.text}>Create an account</Text>

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
            <View style={styles.inputContainer}>
                <View style={styles.inputIcon}>
                    <AntDesign name="lock" size={25} color="#666" />
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                />
            </View>
        </View>

        {/************** Submit button *************/}
        <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/************* T & Cs section ****************/}
        <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
                By registering, you confirm that you accept our{' '}
            </Text>
            <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                <Text style={[styles.color_textPrivate, {color: 'red'}]}>
                Terms of service
                </Text>
            </TouchableOpacity >
            <Text style={styles.color_textPrivate}> and </Text>
            <TouchableOpacity onPress={() => alert('Privacy Clicked!')}>
                <Text style={[styles.color_textPrivate, {color: 'red'}]}>
                Privacy Policy
                </Text>
            </TouchableOpacity >
        </View>

        {/****************** Social buttons *****************/}
        <View>
            <TouchableOpacity style={[styles.socialButtonContainer, {backgroundColor: "#2e64e5"}]}>
                <View style={styles.iconWrapper}>
                    <FontAwesome name="facebook" style={styles.icon} size={22} color="white" />
                </View>
                <View style={styles.btnTxtWrapper}>
                    <Text style={[styles.socialButtonText, {color: "white"}]}>Sign Up with Facebook</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.socialButtonContainer, {backgroundColor: "red"}]}>
                <View style={styles.iconWrapper}>
                    <FontAwesome name="google" style={styles.icon} size={22} color="pink" />
                </View>
                <View style={styles.btnTxtWrapper}>
                    <Text style={[styles.socialButtonText, {color: "white"}]}>Sign Up with Google</Text>
                </View>
            </TouchableOpacity>
        </View>

        {/********************* To login page **********************/}
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.navButtonText}>Have an account? Sign In</Text>
        </TouchableOpacity>

    </View>
  )
}

export default SignUpScreen