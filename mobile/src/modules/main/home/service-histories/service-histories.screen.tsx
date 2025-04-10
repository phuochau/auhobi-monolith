import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';

const logs = [
    {
        id: '1',
        date: '20 March',
        today: true,
        title: 'Oil Change',
        type: 'Maintenance',
        status: 'Complete',
        amount: '$89.99',
        payment: 'Credit Card',
        location: 'Toyota Service Center',
        mileage: '45,230 mi',
        time: '10:30 AM',
        notes: 'Regular maintenance. Changed oil filter as well. Next service due in 5,000 miles.',
        images: [
          { id: '1', uri: 'https://i.imgur.com/G4hUpn8.png' },
          { id: '2', uri: 'https://i.imgur.com/l49aYS3.png' },
        ],
      },
      {
        id: '2',
        date: '15 March',
        today: false,
        title: 'Tire Rotation',
        type: 'Detailing',
        status: 'Complete',
        amount: '$45.00',
        payment: 'Cash',
        location: 'Quick Tire Shop',
        mileage: '44,980 mi',
        time: '2:15 PM',
        notes: 'Balanced and rotated all tires. Alignment check performed.',
        images: [
          { id: '1', uri: 'https://i.imgur.com/u3zRAzW.jpeg' },
        ],
      },
];

const Tag = ({ label, color }: any) => (
  <View style={[styles.tag, { backgroundColor: color.bg }]}>
    <Text style={{ color: color.text, fontSize: 12, fontWeight: '600' }}>{label}</Text>
  </View>
);

const MaintenanceCard = ({ log }: any) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.tagRow}>
        <Tag label={log.type} color={{ bg: '#E7F1FF', text: '#267BFF' }} />
        <Tag label={log.status} color={{ bg: '#DDF5E6', text: '#21A366' }} />
      </View>
      <Text style={styles.amount}>{log.amount}</Text>
    </View>

    <Text style={styles.title}>{log.title}</Text>
    <Text style={styles.subtitle}>
      <Icon name="map-marker-outline" size={16} color="#777" /> {log.location}
    </Text>

    <View style={styles.row}>
      <Text style={styles.meta}>
        <Icon name="speedometer" size={16} color="#555" /> {log.mileage}
      </Text>
      <Text style={styles.meta}>
        <Icon name="clock-outline" size={16} color="#555" /> {log.time}
      </Text>
    </View>

    <View style={styles.noteBox}>
      <Text style={styles.noteText}>{log.notes}</Text>
    </View>

    <View style={styles.imageRow}>
      {log.images.map((img: any) => (
        <Image key={img.id} source={{ uri: img.uri }} style={styles.image} />
      ))}
      <TouchableOpacity style={styles.imagePlaceholder}>
        <Text style={{ fontSize: 24, color: '#999' }}>+</Text>
      </TouchableOpacity>
    </View>

    <Text style={styles.payment}>via {log.payment}</Text>
  </View>
);

export const ServiceHistoriesScreen = () => {

  const renderItem = ({ item, index }: any) => {
    const showDate = index === 0 || logs[index - 1].date !== item.date;

    return (
      <View>
        {showDate && (
          <View style={styles.dateHeader}>
            <Text style={styles.dateText}>{item.date}</Text>
            {item.today && <Text style={styles.todayLabel}>Today</Text>}
          </View>
        )}
        <MaintenanceCard log={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
        {/* Floating Header */}
      <View style={styles.stickyHeader}>
        <Text style={styles.headerTitle}>March 2025</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              console.log('Open date range picker');
            }}
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
        </View>
      </View>

      <FlatList
        data={logs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFF' },
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
});
