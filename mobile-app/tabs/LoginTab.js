import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView }   from 'react-native'
import React, { useState }                               from 'react'
import { SafeAreaView }                    from 'react-native-safe-area-context';
import {COLOR_CONSTANTS}                   from "../components/ColorConstants"
import { useUser }                        from '../contexts/UserContext'

export default function LoginTab({ onLoginSuccess }) {
    const { login } = useUser();

    // user info, will be updated by input form
    const [loginCred, setLoginCred] = useState({
        email:      null,
        password:   null 
    });

    // update loginCred on change
    const handleFormChange = (field, value) => {
        setLoginCred(prevState => ({
            ...prevState,
            [field]: value
        }));
    }

    // makes API call to server to get user session
    async function handleLoginAttempt(){
        console.log("Creds:", loginCred);
        console.log("Request server");

        try {
            const response = await fetch("http://localhost:3001/api/users/auth/login/attempt", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({
                    credentials: loginCred
                })
            });
            
            console.log("Response status:", response.status);
            const data = await response.json();
            console.log("API RESPONSE:", data);

            if (data.status === 200){
                // Find the logged in user from the response
                const loggedInUser = data.session;
                if (loggedInUser) {
                    // Store user data in context
                    login({
                        id: loggedInUser.id,
                        email: loggedInUser.email,
                        firstName: loggedInUser.first_name,
                        lastName: loggedInUser.last_name
                    });
                    
                    // Call the success callback
                    if (onLoginSuccess) {
                        onLoginSuccess();
                    }
                }
            }else{
                // render error pop up
                console.log("Login failed:", data.message);
            }

        } catch (error) {
            console.error("Error on request:", error.message);
        }

    }

    // handles Google sign-in
    async function handleGoogleSignIn(){
        console.log("Google sign-in requested");
        // TODO: Implement Google OAuth integration
    }

  return (
    <SafeAreaView style={styles.scaffoldView}>
        {/* upper region with logo  */}
        <View style={styles.upperRegion}>
            <Image 
                style={styles.logo}
                source={require("../assets/lfh-logo.png")}  />
        </View>

        {/* middle region with login form  */}
        <View style={styles.formContainer}>
            {/* header for login page  */}
            <Text style={styles.formHeader}>Sign in</Text>

            {/* actual form view  */}
            <View style={styles.loginForm}>

                {/* email input  */}
                <TextInput
                    style={styles.inputField}
                    placeholder='Enter Email'
                    value={loginCred.email || ''}
                    onChangeText={(text) => handleFormChange('email', text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                {/* password input  */}
                <TextInput
                    style={styles.inputField}
                    placeholder='Enter Password'
                    value={loginCred.password || ''}
                    onChangeText={(text) => handleFormChange('password', text)}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                {/* submit option  */}
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={handleLoginAttempt}
                >
                    <Text style={styles.signInButtonText}>Sign in</Text>
                </TouchableOpacity>
        
                {/* forgot password option  */}

                <Text
                style={styles.forgotPasswordLink}
                >Forgot password? Click here</Text>


            </View>

        </View>

        {/* continue with google option  */}
        <View style={styles.googleContainer}>
            <TouchableOpacity
                style={styles.googleButton}
                onPress={handleGoogleSignIn}
            >
                <View style={styles.googleIconContainer}>
                    <Text style={styles.googleIcon}>G</Text>
                </View>
                <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>
        </View>

        {/* register option  */}
        <View style={styles.registerContainer}>
            <TouchableOpacity
                style={styles.registerButton}
                onPress={handleGoogleSignIn}
            >
                <Text style={styles.registerButtonText}>Register account</Text>
            </TouchableOpacity>
        </View>
        
    </SafeAreaView>
  )
}
//============================================================================
//STYLES AND STYLES-CONSTANTS
//============================================================================
const styles = StyleSheet.create({
    scaffoldView: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        gap: 30,
        padding: 10,
    },
    upperRegion : {
        width : "100%",
        height: "10%",
        maxHeight: "70px",
        backgroundColor: "",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    },
    formContainer: {
        width: "100%",
        height: "55%",
        maxHeight: "500px",
        backgroundColor: COLOR_CONSTANTS.lightest_gray,
        borderRadius: 30, 
        flexDirection: "column",
        alignItems: "center",
        padding: 10
    },
    formHeader: {
        fontSize: 30,
        fontWeight: "bold",
        color: COLOR_CONSTANTS.lincoln_financial_red,
        marginTop: 15
    },
    loginForm: {
        width: "100%",
        flex: 1,
        padding: 20,
        gap: 15
    },
    inputField: {
        borderWidth: 1,
        borderColor: COLOR_CONSTANTS.light_gray,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: 'white',
        marginBottom: 10
    },
    signInButton: {
        width: "100%",
        padding: 15,
        backgroundColor: COLOR_CONSTANTS.lincoln_financial_red,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    signInButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    forgotPasswordLink: {
        color: COLOR_CONSTANTS.lincoln_financial_orange,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 5
    },
    googleContainer: {
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 0
    },
    googleButton: {
        width: "100%",
        padding: 15,
        backgroundColor: "#4285F4", // Google blue
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#4285F4",
        flexDirection: "row",
        gap: 10
    },
    googleButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    },
    googleIconContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "#4285F4",
        alignItems: "center",
        justifyContent: "center"
    },
    googleIcon: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    registerContainer: {
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 0
    },
    registerButton: {
        width: "100%",
        padding: 15,
        backgroundColor: COLOR_CONSTANTS.lincoln_financial_red,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: COLOR_CONSTANTS.lincoln_financial_red
    },
    registerButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600"
    }

});