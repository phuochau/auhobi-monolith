import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';
import Modal from 'react-native-modal';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../main.stack';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { fetchServiceHistories, ServiceHistoryType } from '../../../../store/service-history/service-history.actions';
import dayjs from 'dayjs';

enum DateRange {
  THIS_MONTH = 0,
  LAST_MONTH = 1,
  LAST_3_MONTHS = 2,
  LAST_6_MONTHS = 3,
  THIS_YEAR = 4,
  CUSTOM = 5,
}

const dateRanges = [
  { id: DateRange.THIS_MONTH, label: 'This Month' },
  { id: DateRange.LAST_MONTH, label: 'Last Month' },
  { id: DateRange.LAST_3_MONTHS, label: 'Last 3 Months' },
  { id: DateRange.LAST_6_MONTHS, label: 'Last 6 Months' },
  { id: DateRange.THIS_YEAR, label: 'This Year' },
  { id: DateRange.CUSTOM, label: 'Custom Range' },
];

const getDateRange = (range: DateRange) => {
  const today = dayjs();
  switch (range) {
    case DateRange.THIS_MONTH:
      return {
        start: today.startOf('month'),
        end: today.endOf('month'),
      };
    case DateRange.LAST_MONTH:
      return {
        start: today.subtract(1, 'month').startOf('month'),
        end: today.subtract(1, 'month').endOf('month'),
      };
    case DateRange.LAST_3_MONTHS:
      return {
        start: today.subtract(2, 'month').startOf('month'),
        end: today.endOf('month'),
      };
    case DateRange.LAST_6_MONTHS:
      return {
        start: today.subtract(5, 'month').startOf('month'),
        end: today.endOf('month'),
      };
    case DateRange.THIS_YEAR:
      return {
        start: today.startOf('year'),
        end: today.endOf('year'),
      };
    default:
      return {
        start: today.startOf('month'),
        end: today.endOf('month'),
      };
  }
};

const Tag = ({ label, color }: { label: string; color: { bg: string; text: string } }) => (
  <View style={[styles.tag, { backgroundColor: color.bg }]}>
    <Text style={{ color: color.text, fontSize: 12, fontWeight: '600' }}>{label}</Text>
  </View>
);

const ServiceHistoryCard = ({ log }: { log: ServiceHistoryType }) => {
  const { dateFormat, mileageUnit, currency, naText } = useAppSelector((state) => state.app);
  const atDate = dayjs(log.date).format(dateFormat);
  const formattedMileage = log.mileage ? `${log.mileage.toLocaleString()} ${mileageUnit}` : naText;
  const formattedCost = log.cost ? `${log.cost.toLocaleString()} ${currency}` : naText;

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.tagRow}>
          <Tag label={log.ref_service_types.name || 'Service'} color={{ bg: '#E7F1FF', text: '#267BFF' }} />
        </View>
        <Text style={styles.amount}>{formattedCost}</Text>
      </View>

      <Text style={styles.title}>{log.service_details}</Text>
      <Text style={styles.subtitle}>
        <Icon name="map-marker-outline" size={16} color="#777" /> {log.custom_garage_name || naText}
      </Text>

      <View style={styles.row}>
        <Text style={styles.meta}>
          <Icon name="speedometer" size={16} color="#555" /> {formattedMileage}
        </Text>
        <Text style={styles.meta}>
          <Icon name="clock-outline" size={16} color="#555" /> {atDate}
        </Text>
      </View>

      {log.note && (
        <View style={styles.noteBox}>
          <Text style={styles.noteText}>{log.note}</Text>
        </View>
      )}

      {log.media && log.media.length > 0 && (
        <View style={styles.imageRow}>
          {log.media.map((uri: string, index: number) => (
            <Image key={index} source={{ uri }} style={styles.image} />
          ))}
        </View>
      )}
    </View>
  );
};

export const ServiceHistoriesScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const dispatch = useAppDispatch();
  const { dateMonthFormat, dateMonthYearFormat, monthYearFormat, dateFormat } = useAppSelector((state) => state.app);
  const { selectedVehicle } = useAppSelector((state) => state.auth);
  const { histories, loading, error } = useAppSelector((state) => state.serviceHistory);
  
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedRange, setSelectedRange] = useState<DateRange>(DateRange.THIS_MONTH);
  const [dateRange, setDateRange] = useState(getDateRange(DateRange.THIS_MONTH));

  useEffect(() => {
    if (selectedVehicle) {
      dispatch(fetchServiceHistories(selectedVehicle.id));
    }
  }, [dispatch, selectedVehicle]);

  const filteredHistories = useMemo(() => {
    return histories.filter(history => {
      const historyDate = dayjs(history.date);
      return historyDate.isAfter(dateRange.start) && historyDate.isBefore(dateRange.end);
    });
  }, [histories, dateRange]);

  const handleRangeSelect = (range: DateRange) => {
    setSelectedRange(range);
    setDateRange(getDateRange(range));
    setModalVisible(false);
  };

  const renderItem = ({ item, index }: { item: ServiceHistoryType; index: number }) => {
    const currentDate = dayjs(item.date).format(dateMonthFormat);
    const previousDate = index > 0 ? dayjs(filteredHistories[index - 1].date).format(dateMonthFormat) : null;
    const showDate = index === 0 || currentDate !== previousDate;
    const isToday = dayjs(item.date).format(dateMonthYearFormat) === dayjs().format(dateMonthYearFormat);

    return (
      <View>
        {showDate && (
          <View style={styles.dateHeader}>
            <Text style={styles.dateText}>{currentDate}</Text>
            {isToday && <Text style={styles.todayLabel}>Today</Text>}
          </View>
        )}
        <ServiceHistoryCard log={item} />
      </View>
    );
  };
  
  const toggleModal = () => setModalVisible(!isModalVisible);

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color="#267BFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity 
          style={styles.retryButton}
          onPress={() => selectedVehicle && dispatch(fetchServiceHistories(selectedVehicle.id))}
        >
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Floating Header */}
      <View style={styles.stickyHeader}>
        <Text style={styles.headerTitle}>
          {dayjs(dateRange.start).format(dateFormat)} - {dayjs(dateRange.end).format(dateFormat)}
        </Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={toggleModal}
          >
            <Icon name="calendar-today" size={22} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              console.log('Go to notifications');
            }}
          >
            <Icon name="bell-badge-outline" size={22} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              navigation.navigate('summary');
            }}
          >
            <Icon name="chart-pie-outline" size={22} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Date Range Modal */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        backdropOpacity={0.4}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Date Range</Text>
          {dateRanges.map((range) => (
            <Pressable
              key={range.id}
              style={[
                styles.rangeOption,
                selectedRange === range.id && styles.rangeSelected,
              ]}
              onPress={() => handleRangeSelect(range.id)}
            >
              <Text
                style={[
                  styles.rangeText,
                  selectedRange === range.id && { color: '#267BFF', fontWeight: 'bold' },
                ]}
              >
                {range.label}
              </Text>
              {range.id === DateRange.CUSTOM && (
                <Icon name="calendar" size={18} color="#888" style={{ marginLeft: 'auto' }} />
              )}
              {selectedRange === range.id && (
                <Icon name="check" size={18} color="#267BFF" style={{ marginLeft: 10 }} />
              )}
            </Pressable>
          ))}

          <TouchableOpacity style={styles.applyButton} onPress={toggleModal}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* List Content */}
      <FlatList
        data={filteredHistories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, paddingTop: 76 }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No service histories found</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFF' },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#D32F2F',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#267BFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    color: '#666',
    fontSize: 16,
  },
  stickyHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#F8FAFF',
    zIndex: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    paddingHorizontal: 6,
  },
  dateHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  dateText: { fontWeight: 'bold', fontSize: 16 },
  todayLabel: {
    color: '#267BFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tagRow: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 8,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  title: { fontSize: 16, fontWeight: 'bold', marginTop: 8 },
  subtitle: {
    color: '#777',
    fontSize: 14,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  meta: {
    fontSize: 13,
    color: '#444',
    flexDirection: 'row',
  },
  noteBox: {
    backgroundColor: '#FFF8E5',
    padding: 12,
    borderRadius: 10,
    marginTop: 12,
  },
  noteText: {
    fontSize: 13,
    color: '#6A5F2D',
  },
  imageRow: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  payment: {
    fontSize: 12,
    color: '#888',
    marginTop: 6,
    textAlign: 'right',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    padding: 20,
    paddingBottom: 30,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  rangeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
  },
  rangeText: {
    fontSize: 14,
    color: '#333',
  },
  rangeSelected: {
    backgroundColor: '#F0F6FF',
    borderRadius: 6,
  },
  applyButton: {
    marginTop: 20,
    backgroundColor: '#267BFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
