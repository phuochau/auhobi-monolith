import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import DatePicker, { DateType, useDefaultStyles } from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import Icon from '@react-native-vector-icons/material-design-icons';

interface DateRangeInputProps {
  value: { startDate: string; endDate: string };
  onChange: (value: { startDate: string; endDate: string }) => void;
  label?: string;
  displayFormat?: string;
}

export const DateRangeInput: React.FC<DateRangeInputProps> = ({
  value,
  onChange,
  label,
  displayFormat = 'MMM D, YYYY',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const defaultStyles = useDefaultStyles();
  const [selectedDate, setSelectedDate] = useState<{ startDate: string; endDate: string }>(value);
  
  const handleDateChange = (params: { startDate: DateType; endDate: DateType }) => {
    if (params.startDate && params.endDate) {
      setSelectedDate({
        startDate: dayjs(params.startDate).format('YYYY-MM-DD'),
        endDate: dayjs(params.endDate).format('YYYY-MM-DD'),
      });
    }
  };

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity
        style={styles.input}
        onPress={() => setIsVisible(true)}
      >
        <View style={styles.dateRangeContainer}>
          <View style={styles.dateContainer}>
            <Icon name="calendar" size={20} color="#666" />
            <Text style={styles.dateText}>
              {dayjs(value.startDate).format(displayFormat)}
            </Text>
          </View>
          <Text style={styles.separator}>to</Text>
          <View style={styles.dateContainer}>
            <Icon name="calendar" size={20} color="#666" />
            <Text style={styles.dateText}>
              {dayjs(value.endDate).format(displayFormat)}
            </Text>
          </View>
        </View>
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
              mode="range"
              startDate={dayjs(selectedDate.startDate)}
              endDate={dayjs(selectedDate.endDate)}
              onChange={handleDateChange}
              styles={{
                ...defaultStyles,
                today: { borderColor: 'blue', borderWidth: 1 }, // Add a border to today's date
                selected: { backgroundColor: 'blue' }, // Highlight the selected day
                selected_label: { color: 'white' }, // Highlight the selected day label
              }}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setIsVisible(false);
                onChange(selectedDate);
              }}
            >
              <Text style={styles.closeButtonText}>Confirm</Text>
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
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
  },
  dateRangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dateText: {
    fontSize: 14,
    color: '#333',
  },
  separator: {
    marginHorizontal: 8,
    color: '#666',
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