import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from '@react-native-vector-icons/material-design-icons';
import ImagePicker from 'react-native-image-crop-picker';
import { DateInput } from '../../../components/DateInput';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { createServiceHistory } from '../../../store/service-history/service-history.actions';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../main/main.stack';
import { Supabase } from '../../../lib/supabase/client';

// ------------------------
// Zod Schema
// ------------------------
const schema = z.object({
  serviceType: z.string().min(1, 'Required'),
  details: z.string().min(1, 'Required'),
  provider: z.string().min(1, 'Required'),
  cost: z
    .string()
    .refine((val) => /^\d+(\.\d{1,2})?$/.test(val), 'Invalid amount'),
  mileage: z
    .string()
    .regex(/^\d+$/, 'Mileage must be a number'),
  notes: z.string().optional(),
  date: z.string().min(1, 'Required'),
});

type AddServiceLogForm = z.infer<typeof schema>;

export const AddServiceHistory = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const dispatch = useAppDispatch();
  const { selectedVehicle } = useAppSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddServiceLogForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      serviceType: 'Maintenance',
      details: '',
      provider: '',
      cost: '',
      mileage: '',
      notes: '',
      date: new Date().toISOString().split('T')[0],
    },
  });

  const [servicePhoto, setServicePhoto] = useState<string | null>(null);
  const [billPhoto, setBillPhoto] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async (setter: (uri: string) => void) => {
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

  const uploadImage = async (uri: string): Promise<string> => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const filename = uri.split('/').pop() || 'image.jpg';
    const { data, error } = await Supabase.getStorage()
      .upload(`service-photos/${Date.now()}-${filename}`, blob);

    if (error) {
      throw error;
    }

    const { data: { publicUrl } } = Supabase.getStorage()
      .getPublicUrl(data.path);
    return publicUrl;
  };

  const onSubmit = async (data: AddServiceLogForm) => {
    if (!selectedVehicle) {
      Alert.alert('Error', 'No vehicle selected');
      return;
    }

    try {
      setUploading(true);
      const media: string[] = [];

      if (servicePhoto) {
        const servicePhotoUrl = await uploadImage(servicePhoto);
        media.push(servicePhotoUrl);
      }

      if (billPhoto) {
        const billPhotoUrl = await uploadImage(billPhoto);
        media.push(billPhotoUrl);
      }

      await dispatch(createServiceHistory({
        serviceTypeId: 1, // TODO: Get from service types
        serviceDetails: data.details,
        provider: data.provider,
        cost: parseFloat(data.cost),
        mileage: parseInt(data.mileage),
        notes: data.notes,
        date: data.date,
        media: media.length > 0 ? media : undefined,
        vehicleId: selectedVehicle.id,
      })).unwrap();

      navigation.goBack();
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to create service history');
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F8F9FF' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Scan Box */}
        <View style={styles.scanBox}>
          <View style={styles.scanTextContainer}>
            <Icon name="camera-outline" size={20} color="#fff" />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.scanTitle}>Scan your bill</Text>
              <Text style={styles.scanSubtitle}>We'll extract the information for you</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.scanButton}>
            <Text style={styles.scanButtonText}>Scan</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <Label text="Service Type" />
        <Controller
          control={control}
          name="serviceType"
          render={({ field: { onChange, value } }) => (
            <Dropdown
              data={[{ label: 'Maintenance', value: 'Maintenance' }]}
              value={value}
              onChange={item => onChange(item.value)}
              labelField="label"
              valueField="value"
              style={styles.dropdown}
            />
          )}
        />

        <Label text="Service Date" />
        <Controller
          control={control}
          name="date"
          render={({ field: { onChange, value } }) => (
            <DateInput
              value={value}
              onChange={onChange}
            />
          )}
        />
        {errors.date && <ErrorText message={errors.date.message} />}

        <Label text="Service Details" />
        <Controller
          control={control}
          name="details"
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="e.g., Oil Change"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        {errors.details && <ErrorText message={errors.details.message} />}

        <Label text="Service Provider" />
        <Controller
          control={control}
          name="provider"
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="Shop or mechanic name"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        {errors.provider && <ErrorText message={errors.provider.message} />}

        <Label text="Cost" />
        <Controller
          control={control}
          name="cost"
          render={({ field }) => (
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="$0.00"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        {errors.cost && <ErrorText message={errors.cost.message} />}

        <Label text="Current Mileage" />
        <View style={styles.mileageRow}>
          <Controller
            control={control}
            name="mileage"
            render={({ field }) => (
              <TextInput
                style={[styles.input, { flex: 1 }]}
                keyboardType="numeric"
                placeholder="Enter current mileage"
                value={field.value}
                onChangeText={field.onChange}
              />
            )}
          />
          <Text style={styles.mileageUnit}>mi</Text>
        </View>
        {errors.mileage && <ErrorText message={errors.mileage.message} />}

        <Label text="Notes" />
        <Controller
          control={control}
          name="notes"
          render={({ field }) => (
            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Add any additional notes..."
              value={field.value}
              onChangeText={field.onChange}
              multiline
            />
          )}
        />

        <Label text="Service Photos" />
        <PhotoUpload
          uri={servicePhoto}
          label="Add Photo"
          onPress={() => pickImage(setServicePhoto)}
        />

        <Label text="Bill Photos" />
        <PhotoUpload
          uri={billPhoto}
          label="Add Bill"
          onPress={() => pickImage(setBillPhoto)}
        />
      </ScrollView>

      {/* Save Button */}
      <TouchableOpacity 
        style={[styles.saveButton, uploading && styles.saveButtonDisabled]} 
        onPress={handleSubmit(onSubmit)}
        disabled={uploading}
      >
        <Text style={styles.saveButtonText}>
          {uploading ? 'Saving...' : 'Save Log'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Components
const Label = ({ text }: { text: string }) => (
  <Text style={styles.label}>{text}</Text>
);

const ErrorText = ({ message }: { message?: string }) =>
  message ? <Text style={styles.error}>{message}</Text> : null;

const PhotoUpload = ({ uri, label, onPress }: { uri: string | null; label: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.photoBox} onPress={onPress}>
    {uri ? (
      <Image source={{ uri }} style={styles.photo} />
    ) : (
      <>
        <Text style={styles.photoPlus}>+</Text>
        <Text style={styles.photoLabel}>{label}</Text>
      </>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 100,
  },
  scanBox: {
    backgroundColor: '#845EF7',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  scanTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  scanTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  scanSubtitle: {
    fontSize: 12,
    color: '#E0DCFF',
  },
  scanButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  scanButtonText: {
    fontWeight: 'bold',
    color: '#845EF7',
  },
  label: {
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 14,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  error: {
    color: '#D32F2F',
    fontSize: 12,
    marginTop: 2,
  },
  mileageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mileageUnit: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
  photoBox: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: '#FAFAFA',
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  photoPlus: {
    fontSize: 26,
    color: '#845EF7',
    fontWeight: 'bold',
  },
  photoLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  saveButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#845EF7',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    elevation: 3,
  },
  saveButtonDisabled: {
    backgroundColor: '#B5B5B5',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
