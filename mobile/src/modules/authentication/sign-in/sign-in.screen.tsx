import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthenticationStackParamList } from '../authentication.stack';
import { signIn, fetchUserVehicles } from '../../../store/auth/auth.actions';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

// Define the schema
const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignInFormValues = z.infer<typeof schema>;

export const SignInScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticationStackParamList>>();
  const dispatch = useAppDispatch();
  const { loading, error, vehicles } = useAppSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: SignInFormValues) => {
    try {
      await dispatch(signIn(data));
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoWrapper}>
        <View style={styles.logoCircle}>
          <Icon name="car" size={28} color="white" />
        </View>
        <Text style={styles.title}>Car Manager</Text>
        <Text style={styles.subtitle}>Track your car maintenance easily</Text>
      </View>

      {/* Form */}
      <View style={styles.inputSection}>
        {/* Email */}
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field: { value, onChange, onBlur } }) => (
            <View style={styles.inputWrapper}>
              <Icon name="email-outline" size={20} color="#9CA3AF" />
              <TextInput
                style={styles.input}
                placeholder="Email address"
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            </View>
          )}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}

        {/* Password */}
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field: { value, onChange, onBlur } }) => (
            <View style={styles.inputWrapper}>
              <Icon name="lock-outline" size={20} color="#9CA3AF" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            </View>
          )}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}

        {/* Forgot Password */}
        <View style={styles.forgotWrapper}>
          <Pressable onPress={() => Alert.alert('Forgot Password')}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </Pressable>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity
          style={styles.signInButton}
          disabled={loading}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.signInText}>{loading ? 'Signing In...' : 'Sign In'}</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.dividerWrapper}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or continue with</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Logins */}
      <View style={styles.socialWrapper}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={22} color="#9CA3AF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={22} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={22} color="#111" />
        </TouchableOpacity>
      </View>

      {/* Sign up link */}
      <View style={styles.signUpWrapper}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('sign-up')}>
          <Text style={styles.signUpLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoCircle: {
    backgroundColor: '#4F46E5',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  inputSection: {
    marginTop: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#111827',
  },
  forgotWrapper: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    color: '#4F46E5',
    fontSize: 13,
    fontWeight: '500',
  },
  signInButton: {
    backgroundColor: '#4F46E5',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  signInText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    marginBottom: 12,
    marginLeft: 4,
  },
  dividerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#9CA3AF',
    fontSize: 12,
  },
  socialWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialButton: {
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 6,
  },
  signUpWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  signUpText: {
    color: '#6B7280',
    fontSize: 13,
  },
  signUpLink: {
    color: '#4F46E5',
    fontWeight: '600',
    fontSize: 13,
  },
});
