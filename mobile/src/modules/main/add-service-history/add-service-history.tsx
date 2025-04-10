import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import ImagePicker from 'react-native-image-crop-picker';

export const AddServiceHistory = () => {
  const [serviceType, setServiceType] = useState('Maintenance');
  const [details, setDetails] = useState('');
  const [provider, setProvider] = useState('');
  const [cost, setCost] = useState('');
  const [mileage, setMileage] = useState('');
  const [notes, setNotes] = useState('');
  const [servicePhoto, setServicePhoto] = useState(null);
  const [billPhoto, setBillPhoto] = useState(null);

  const pickImage = async (setter: any) => {
    try {
      const image = await ImagePicker.openPicker({
        width: 800,
        height: 800,
        cropping: true,
        compressImageQuality: 0.8,
      });
      setter(image.path);
    } catch (error) {
      console.warn('Image selection canceled or failed', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.scanBox}>
        <Text style={styles.scanTitle}>Scan your bill</Text>
        <TouchableOpacity style={styles.scanButton}>
          <Text style={styles.scanButtonText}>Scan</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Service Type</Text>
      <Dropdown
        data={[{ label: 'Maintenance', value: 'Maintenance' }]}
        value={serviceType}
        onChange={item => setServiceType(item.value)}
        labelField="label"
        valueField="value"
        style={styles.dropdown}
        placeholder="Select type"
      />

      <Text style={styles.label}>Service Details</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Oil Change"
        value={details}
        onChangeText={setDetails}
      />

      <Text style={styles.label}>Service Provider</Text>
      <TextInput
        style={styles.input}
        placeholder="Shop or mechanic name"
        value={provider}
        onChangeText={setProvider}
      />

      <Text style={styles.label}>Cost</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="$0.00"
        value={cost}
        onChangeText={setCost}
      />

      <Text style={styles.label}>Current Mileage</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter current mileage"
        value={mileage}
        onChangeText={setMileage}
      />

      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Add any additional notes..."
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      <Text style={styles.label}>Service Photos</Text>
      <TouchableOpacity style={styles.photoBox} onPress={() => pickImage(setServicePhoto)}>
        {servicePhoto ? (
          <Image source={{ uri: servicePhoto }} style={styles.photo} />
        ) : (
          <Text>Add Photo</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.label}>Bill Photos</Text>
      <TouchableOpacity style={styles.photoBox} onPress={() => pickImage(setBillPhoto)}>
        {billPhoto ? (
          <Image source={{ uri: billPhoto }} style={styles.photo} />
        ) : (
          <Text>Add Bill</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Log</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  scanBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F2ECFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  scanTitle: { fontWeight: 'bold', color: '#5F4B8B' },
  scanButton: {
    backgroundColor: '#845EF7',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  scanButtonText: { color: 'white', fontWeight: 'bold' },
  label: { marginTop: 12, marginBottom: 4, fontWeight: '600' },
  dropdown: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  photoBox: {
    height: 100,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  photo: {
    height: 100,
    width: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  saveButton: {
    backgroundColor: '#845EF7',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
  },
  saveButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});
