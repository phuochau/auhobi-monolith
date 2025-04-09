import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthenticationStackParamList } from '../authentication.stack';

export const SignInScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthenticationStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login pressed');
  };

  return (
    <View className="flex-1 bg-white items-center justify-center px-6">
      {/* Logo */}
      <View className="bg-indigo-500 p-5 rounded-2xl mb-5">
        <Icon name="car" size={28} color="white" />
      </View>

      {/* Title */}
      <Text className="text-2xl font-semibold text-gray-900">Car Manager</Text>
      <Text className="text-sm text-gray-500 mt-1">
        Track your car maintenance easily
      </Text>

      {/* Input fields */}
      <View className="w-full mt-8 space-y-4">
        <View className="flex-row items-center px-4 py-3 bg-gray-100 rounded-xl">
          <Icon name="email-outline" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Email address"
            className="ml-2 flex-1 text-gray-700"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View className="flex-row items-center px-4 py-3 bg-gray-100 rounded-xl">
          <Icon name="lock-outline" size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Password"
            className="ml-2 flex-1 text-gray-700"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      {/* Forgot Password */}
      <View className="w-full items-end mt-2">
        <Pressable onPress={() => Alert.alert('Navigate to forgot password')}>
          <Text className="text-indigo-500 text-sm font-medium">Forgot Password?</Text>
        </Pressable>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        className="mt-5 w-full bg-indigo-500 py-4 rounded-xl items-center"
        onPress={handleLogin}
      >
        <Text className="text-white font-semibold text-base">Sign In</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View className="flex-row items-center w-full my-5">
        <View className="flex-1 h-px bg-gray-200" />
        <Text className="mx-2 text-gray-400 text-sm">Or continue with</Text>
        <View className="flex-1 h-px bg-gray-200" />
      </View>

      {/* Social Buttons */}
      <View className="flex-row justify-center space-x-4">
        <TouchableOpacity className="p-3 rounded-xl border border-gray-200">
          <Icon name="google" size={22} color="#9CA3AF" />
        </TouchableOpacity>
        <TouchableOpacity className="p-3 rounded-xl border border-gray-200">
          <Icon name="facebook" size={22} color="#3B5998" />
        </TouchableOpacity>
        <TouchableOpacity className="p-3 rounded-xl border border-gray-200">
          <Icon name="apple" size={22} color="#111" />
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <View className="flex-row mt-6">
        <Text className="text-gray-500">Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('sign-up')}>
          <Text className="text-indigo-500 font-semibold">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
