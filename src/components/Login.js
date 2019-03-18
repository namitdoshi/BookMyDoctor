import React, { Component } from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../../assets/img/Octocat.png')}></Image>
                    <Text style={styles.title}>An app made for you!</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#1B9CFC',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
      color: '#fff',
      marginTop: 10,
      width: 160,
      textAlign: 'center',
      opacity: 0.9
    }
});

