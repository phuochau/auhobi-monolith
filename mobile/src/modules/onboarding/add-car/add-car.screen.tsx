import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Icon from '@react-native-vector-icons/material-design-icons';
import ImagePicker from 'react-native-image-crop-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchVehicleBrands, createVehicle } from '../../../store/vehicle/vehicle.actions';
import { signOut } from '../../../store/auth/auth.actions';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/root-navigator';
import dayjs from 'dayjs';
import { Supabase } from '../../../lib/supabase/client';
import RNFS from 'react-native-fs';

// ------------------------
// Zod Schema
// ------------------------
const schema = z.object({
    nickname: z.string().optional(),
    brand: z.string().min(1, 'Required'),
    model: z.string().min(1, 'Required'),
    year: z
        .string()
        .regex(/^\d{4}$/, 'Invalid year')
        .refine(val => parseInt(val) >= 1980 && parseInt(val) <= 2050, {
            message: 'Year must be between 1980 and 2050',
        })
});

type AddCarFormData = z.infer<typeof schema>;

export const AddCarScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [photo, setPhoto] = useState<string | null>(null);
    const [uploadingPhoto, setUploadingPhoto] = useState(false);
    const [signingOut, setSigningOut] = useState(false);
    const dispatch = useAppDispatch();
    const { brands, loading } = useAppSelector(state => state.vehicle);
    const { user } = useAppSelector(state => state.auth);
    
    useEffect(() => {
        dispatch(fetchVehicleBrands());
    }, [dispatch]);

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<AddCarFormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            nickname: '',
            brand: '',
            model: '',
            year: dayjs().year().toString()
        },
    });

    const pickPhoto = async () => {
        try {
            const image = await ImagePicker.openPicker({
                width: 800,
                height: 800,
                cropping: true,
                mediaType: 'photo',
                includeBase64: false,
            });
            setPhoto(image.path);
        } catch {
            console.log('Photo picking cancelled');
        }
    };

    const onSubmit = async (data: AddCarFormData) => {
        if (!user?.id) {
            Alert.alert('Error', 'User not authenticated');
            return;
        }

        try {
            let photoUrl: string | undefined;
            
            if (photo) {
                setUploadingPhoto(true);
                const base64 = await RNFS.readFile(photo, 'base64');
                photoUrl = await Supabase.uploadImage(`${user?.id}`, base64);
                setUploadingPhoto(false);
            }

            await dispatch(createVehicle({
                brand_id: parseInt(data.brand),
                model: data.model,
                name: data.nickname,
                year: data.year,
                owner_id: user.id,
                photo: photoUrl,
            })).unwrap();
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'Failed to add car. Please try again.');
        }
    };

    const handleSignOut = async () => {
        try {
            setSigningOut(true);
            await dispatch(signOut());
        } catch (error) {
            Alert.alert('Error', 'Failed to sign out. Please try again.');
        } finally {
            setSigningOut(false);
        }
    };

    const brandOptions = brands.map(brand => ({
        label: brand.name,
        value: brand.id.toString(),
    }));

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.photoWrapper}>
                <TouchableOpacity 
                    style={styles.photoUpload} 
                    onPress={pickPhoto}
                    disabled={uploadingPhoto}
                >
                    {photo ? (
                        <Image source={{ uri: photo }} style={styles.photo} />
                    ) : (
                        <View style={styles.iconCircle}>
                            <Icon name="car" size={28} color="#3B82F6" />
                        </View>
                    )}
                    <Text style={styles.photoText}>
                        {uploadingPhoto ? 'Uploading photo...' : 'Add car photo'}
                    </Text>
                    <Text style={styles.photoOptional}>Optional</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Basic Information</Text>

                <Controller
                    control={control}
                    name="nickname"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            placeholder="e.g. My Toyota"
                            style={styles.input}
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
                {errors.nickname && <Text style={styles.error}>{errors.nickname.message}</Text>}

                <Controller
                    control={control}
                    name="brand"
                    render={({ field: { onChange, value } }) => (
                        <Dropdown
                            style={styles.dropdown}
                            data={brandOptions}
                            labelField="label"
                            valueField="value"
                            value={value}
                            onChange={item => onChange(item.value)}
                            placeholder={loading ? "Loading brands..." : "Select brand"}
                            search={true}
                        />
                    )}
                />
                {errors.brand && <Text style={styles.error}>{errors.brand.message}</Text>}

                <Controller
                    control={control}
                    name="model"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            placeholder="e.g. Camry"
                            style={styles.input}
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
                {errors.model && <Text style={styles.error}>{errors.model.message}</Text>}

                <Controller
                    control={control}
                    name="year"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            placeholder="2025"
                            style={styles.input}
                            keyboardType="numeric"
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
                {errors.year && <Text style={styles.error}>{errors.year.message}</Text>}
            </View>

            <TouchableOpacity 
                style={[styles.addButton, (isSubmitting || uploadingPhoto) && styles.addButtonDisabled]} 
                onPress={handleSubmit(onSubmit)}
                disabled={isSubmitting || uploadingPhoto}
            >
                <Text style={styles.addButtonText}>
                    {(isSubmitting || uploadingPhoto) ? 'Adding...' : 'Add Car'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.signOutButton} 
                onPress={handleSignOut}
                disabled={signingOut}
            >
                <Text style={styles.signOutText}>
                    {signingOut ? 'Signing out...' : 'Sign Out'}
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: '#F9FAFF',
    },
    photoWrapper: {
        backgroundColor: '#EDF3FF',
        borderRadius: 12,
        paddingVertical: 24,
        paddingHorizontal: 16,
        alignItems: 'center',
        marginBottom: 20,
    },
    photoUpload: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconCircle: {
        width: 56,
        height: 56,
        backgroundColor: '#E0EAFF',
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    photoText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#3B3B3B',
    },
    photoOptional: {
        fontSize: 12,
        color: '#888',
    },
    photo: {
        width: 120,
        height: 120,
        borderRadius: 12,
        resizeMode: 'cover',
        marginBottom: 8,
    },
    section: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.03,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
        elevation: 2,
    },
    sectionTitle: {
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 12,
        color: '#111827',
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginBottom: 12,
        fontSize: 14,
    },
    dropdown: {
        backgroundColor: '#fff',
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 14,
        marginBottom: 12,
        height: 48,
        justifyContent: 'center',
    },
    mileageRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    unit: {
        marginLeft: 8,
        fontSize: 14,
        color: '#555',
    },
    addButton: {
        backgroundColor: '#3B82F6',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginHorizontal: 16,
    },
    addButtonDisabled: {
        backgroundColor: '#93C5FD',
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    error: {
        color: '#D32F2F',
        fontSize: 12,
        marginTop: -8,
        marginBottom: 8,
    },
    signOutButton: {
        marginTop: 24,
        paddingVertical: 12,
        alignItems: 'center',
    },
    signOutText: {
        color: '#EF4444',
        fontSize: 14,
        fontWeight: '500',
    },
});
