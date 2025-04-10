import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';

export const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile */}
      <TouchableOpacity style={styles.profileCard}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>John Anderson</Text>
          <Text style={styles.email}>john.anderson@email.com</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#888" />
      </TouchableOpacity>

      {/* My Cars */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Cars</Text>

        <View style={styles.carItem}>
          <View style={styles.carLeft}>
            <View style={styles.carIconWrapper}>
              <Icon name="car" size={20} color="#3B82F6" />
            </View>
            <View>
              <Text style={styles.carName}>Toyota Camry</Text>
              <Text style={styles.carDetails}>2023 • ABC 123</Text>
            </View>
          </View>
          <Icon name="radiobox-marked" size={20} color="#3B82F6" />
        </View>

        <TouchableOpacity style={styles.addCarButton}>
          <Icon name="plus" size={20} color="#999" />
          <Text style={styles.addCarText}>Add Another Car</Text>
        </TouchableOpacity>
      </View>

      {/* Info Items */}
      <TouchableOpacity style={styles.infoItem}>
        <View style={styles.infoLeft}>
          <View style={[styles.iconCircle, { backgroundColor: '#F4EDFF' }]}>
            <Icon name="information-outline" size={18} color="#8B5CF6" />
          </View>
          <Text style={styles.infoText}>About</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#888" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoItem}>
        <View style={styles.infoLeft}>
          <View style={[styles.iconCircle, { backgroundColor: '#E7F9F0' }]}>
            <Icon name="account-check" size={18} color="#34D399" />
          </View>
          <Text style={styles.infoText}>Terms & Privacy</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#888" />
      </TouchableOpacity>

      {/* Version */}
      <Text style={styles.version}>Version 1.0.0</Text>

      {/* Logout */}
      <TouchableOpacity style={styles.logout}>
        <Icon name="logout" size={18} color="#EF4444" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F9FAFF',
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#111827',
  },
  email: {
    color: '#6B7280',
    fontSize: 13,
  },
  section: {
    backgroundColor: '#F1F5FF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontWeight: '600',
    marginBottom: 12,
    color: '#111827',
  },
  carItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  carLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  carIconWrapper: {
    backgroundColor: '#E0EAFF',
    padding: 8,
    borderRadius: 8,
  },
  carName: {
    fontWeight: '600',
    fontSize: 14,
    color: '#111',
  },
  carDetails: {
    fontSize: 12,
    color: '#777',
  },
  addCarButton: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  addCarText: {
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },
  infoItem: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconCircle: {
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    fontWeight: '500',
  },
  version: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 13,
    marginTop: 12,
  },
  logout: {
    backgroundColor: '#FEE2E2',
    padding: 14,
    borderRadius: 14,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  logoutText: {
    color: '#EF4444',
    fontWeight: '600',
  },
});
