import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='light-content'
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Username or email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType='go'
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text> 
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginBottom: 15,
        color: 'rgba(255,255,255,0.9)'
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    }
});