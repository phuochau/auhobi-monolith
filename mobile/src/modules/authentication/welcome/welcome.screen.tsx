import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthenticationStackParamList } from '../authentication.stack';

export const WelcomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthenticationStackParamList>>();

  const handleGetStarted = () => {
    navigation.navigate('sign-in');
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/welcome-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <View style={styles.logoCircle}>
            <Text style={styles.carIcon}>🚗</Text>
          </View>
          <Text style={styles.title}>CarLog</Text>
          <Text style={styles.subtitle}>Your car's digital service book</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By continuing, you agree to our{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('https://yourdomain.com/terms')}>
            Terms
          </Text>{' '}
          &{' '}
          <Text style={styles.link} onPress={() => Linking.openURL('https://yourdomain.com/privacy')}>
            Privacy Policy
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    padding: 24,
    alignItems: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
  },
  logoCircle: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 32,
    marginBottom: 12,
  },
  carIcon: {
    fontSize: 24,
    color: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 6,
  },
  button: {
    marginTop: 180,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  termsText: {
    marginTop: 16,
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
  },
  link: {
    textDecorationLine: 'underline',
    color: 'white',
  },
});
