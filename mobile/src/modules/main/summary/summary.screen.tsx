import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@react-native-vector-icons/material-design-icons';

export const SummaryScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Maintenance Report',
      headerRight: () => (
        <TouchableOpacity style={styles.exportBtn}>
          <Icon name="download" size={16} color="#fff" />
          <Text style={styles.exportText}>Export PDF</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      {/* Month */}
      <Text style={styles.subTitle}>March 2025</Text>

      {/* Summary */}
      <View style={styles.summaryBox}>
        <SummaryItem label="Total Services" value="8 services" />
        <SummaryItem label="Total Expenses" value="$534.99" highlight />
        <SummaryItem label="Mileage Range" value="44,980 - 45,230 mi" />
      </View>

      {/* Distribution */}
      <Text style={styles.sectionTitle}>Service Distribution</Text>
      <ProgressLabel label="Maintenance" percent={0.45} color="#3B82F6" />
      <ProgressLabel label="Detailing" percent={0.3} color="#A855F7" />
      <ProgressLabel label="Other" percent={0.25} color="#10B981" />

      {/* Logs */}
      <Text style={styles.sectionTitle}>Detailed Logs</Text>
      <LogItem
        type="Maintenance"
        title="Oil Change"
        date="20 March, 2025"
        mileage="45,230 mi"
        cost="$89.99"
        color="#3B82F6"
      />
      <LogItem
        type="Detailing"
        title="Tire Rotation"
        date="15 March, 2025"
        mileage="44,980 mi"
        cost="$45.00"
        color="#A855F7"
      />

      {/* Footer */}
      <Text style={styles.footerText}>
        Generated on March 20, 2025{'\n'}Vehicle Maintenance Log Report
      </Text>
    </ScrollView>
  );
};

// Subcomponents (same as before)
const SummaryItem = ({ label, value, highlight }: any) => (
  <View style={styles.summaryItem}>
    <Text style={styles.summaryLabel}>{label}</Text>
    <Text style={[styles.summaryValue, highlight && { color: '#3B82F6' }]}>{value}</Text>
  </View>
);

const ProgressLabel = ({ label, percent, color }: any) => (
  <View style={styles.progressRow}>
    <View style={styles.progressBar}>
      <View style={[styles.progressFill, { width: `${percent * 100}%`, backgroundColor: color }]} />
    </View>
    <Text style={[styles.progressText, { color }]}>{label} ({Math.round(percent * 100)}%)</Text>
  </View>
);

const LogItem = ({ type, title, date, mileage, cost, color }: any) => (
  <View style={styles.logItem}>
    <View style={styles.logTopRow}>
      <View style={[styles.tag, { backgroundColor: color + '22' }]}>
        <Text style={[styles.tagText, { color }]}>{type}</Text>
      </View>
      <Text style={[styles.cost, { color }]}>{cost}</Text>
    </View>
    <Text style={styles.logTitle}>{title}</Text>
    <Text style={styles.logSub}>{date} • {mileage}</Text>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  exportBtn: {
    flexDirection: 'row',
    backgroundColor: '#3B82F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 10,
    gap: 6,
  },
  exportText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  subTitle: {
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 20,
    fontSize: 14,
  },
  summaryBox: {
    backgroundColor: '#F9FAFB',
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
  },
  summaryItem: {
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 13,
    color: '#6B7280',
  },
  summaryValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
    color: '#111827',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    marginRight: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 10,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '500',
  },
  logItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  logTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
  },
  cost: {
    fontWeight: '600',
    fontSize: 14,
  },
  logTitle: {
    marginTop: 4,
    fontWeight: '600',
    fontSize: 15,
  },
  logSub: {
    color: '#6B7280',
    fontSize: 13,
    marginTop: 2,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 24,
    marginBottom: 20,
  },
});
