import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from '@react-native-vector-icons/material-icons';
import { AuthenticationStackParamList } from '../authentication.stack';

export const WelcomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthenticationStackParamList>>();

  const handleGetStarted = () => {
    navigation.navigate('sign-in');
  };

  return (
    <ImageBackground
      source={require('@assets/images/welcome-bg.jpg')}
      resizeMode="cover"
      className="flex-1 justify-end"
    >
      <View className="absolute inset-0 bg-black/30" />

      <View className="px-6 pb-8 items-center">
        {/* Logo and title */}
        <View className="absolute top-20 items-center">
          <View className="bg-black p-4 rounded-full mb-3">
            <Icon name="article" size={24} color="white" />
          </View>
          <Text className="text-white text-3xl font-bold">CarLog</Text>
          <Text className="text-gray-300 text-sm mt-1">
            Your car's digital service book
          </Text>
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          className="mt-60 w-full bg-blue-500 py-4 rounded-xl items-center"
          onPress={handleGetStarted}
        >
          <Text className="text-white text-base font-semibold">Get Started</Text>
        </TouchableOpacity>

        {/* Terms and Privacy */}
        <Text className="text-xs text-gray-300 text-center mt-4">
          By continuing, you agree to our{' '}
          <Text
            className="underline text-white"
            onPress={() => Linking.openURL('https://yourdomain.com/terms')}
          >
            Terms
          </Text>{' '}
          &{' '}
          <Text
            className="underline text-white"
            onPress={() => Linking.openURL('https://yourdomain.com/privacy')}
          >
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  container: {
    padding: 24,
    alignItems: 'center',
  },
  logoWrapper: {
    position: 'absolute',
    top: 80,
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
