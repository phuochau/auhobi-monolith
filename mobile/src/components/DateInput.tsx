import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import DatePicker, { DateType } from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import Icon from '@react-native-vector-icons/material-design-icons';

interface DateInputProps {
  value: string;
  onChange: (date: string) => void;
  label?: string;
  displayFormat?: string;
}

export const DateInput: React.FC<DateInputProps> = ({ value, onChange, label, displayFormat = 'MMM D, YYYY' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleDateChange = (params: { date: DateType }) => {
    if (params.date) {
      onChange(dayjs(params.date).toISOString());
      setIsVisible(false);
    }
  };

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity
        style={styles.input}
        onPress={() => setIsVisible(true)}
      >
        <Text style={styles.dateText}>
          {value ? dayjs(value).format(displayFormat) : 'Select date'}
        </Text>
        <Icon name="calendar" size={20} color="#666" />
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <DatePicker
              date={value ? dayjs(value) : dayjs()}
              onChange={handleDateChange}
              mode="single"
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: '600',
    marginBottom: 6,
    marginTop: 14,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  dateText: {
    fontSize: 14,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    width: '90%',
    maxWidth: 400,
  },
  closeButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#845EF7',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
}); 