import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Icon from '@react-native-vector-icons/material-design-icons';
import ImagePicker from 'react-native-image-crop-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch } from 'react-redux';

// ------------------------
// Zod Schema
// ------------------------
const schema = z.object({
    nickname: z.string().min(1, 'Required'),
    brand: z.string().min(1, 'Required'),
    model: z.string().min(1, 'Required'),
    year: z
        .string()
        .regex(/^\d{4}$/, 'Invalid year')
        .refine(val => parseInt(val) >= 1980 && parseInt(val) <= 2050, {
            message: 'Year must be between 1980 and 2050',
        }),
    licensePlate: z.string().min(1, 'Required'),
    mileage: z
        .string()
        .regex(/^\d+$/, 'Mileage must be a number')
        .refine(val => parseInt(val) >= 0, 'Mileage must be positive'),
});

type AddCarFormData = z.infer<typeof schema>;

// ------------------------
// Dropdown Options
// ------------------------
const brandOptions = [
    { label: 'Toyota', value: 'Toyota' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Ford', value: 'Ford' },
    { label: 'Tesla', value: 'Tesla' },
];

export const AddCarScreen = () => {
    const [photo, setPhoto] = useState<string | null>(null);
    
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<AddCarFormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            nickname: '',
            brand: 'Toyota',
            model: '',
            year: '2025',
            licensePlate: '',
            mileage: '',
        },
    });

    const pickPhoto = async () => {
        try {
            const image = await ImagePicker.openPicker({
                width: 800,
                height: 800,
                cropping: true,
            });
            setPhoto(image.path);
        } catch {
            console.log('Photo picking cancelled');
        }
    };

    const onSubmit = (data: AddCarFormData) => {
        console.log({ ...data, photo });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.photoWrapper}>
                <TouchableOpacity style={styles.photoUpload} onPress={pickPhoto}>
                    {photo ? (
                        <Image source={{ uri: photo }} style={styles.photo} />
                    ) : (
                        <View style={styles.iconCircle}>
                            <Icon name="car" size={28} color="#3B82F6" />
                        </View>
                    )}
                    <Text style={styles.photoText}>Add car photo</Text>
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
                            placeholder="Select brand"
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

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Additional Information</Text>

                <Controller
                    control={control}
                    name="licensePlate"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            placeholder="ABC 123"
                            style={styles.input}
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
                {errors.licensePlate && <Text style={styles.error}>{errors.licensePlate.message}</Text>}

                <View style={styles.mileageRow}>
                    <Controller
                        control={control}
                        name="mileage"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder="0"
                                style={[styles.input, { flex: 1 }]}
                                keyboardType="numeric"
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    <Text style={styles.unit}>mi</Text>
                </View>
                {errors.mileage && <Text style={styles.error}>{errors.mileage.message}</Text>}
            </View>

            <TouchableOpacity style={styles.addButton} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.addButtonText}>Add Car</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: '#F9FAFF', // lighter blue background
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
});
