import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function DetailScreen({route, navigation}) {
  const {card} = route.params;
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailTitle}>{card.title}</Text>
      <Text style={styles.detailContent}>{card.content}</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5', // Light background color
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333', // Dark text color for better contrast
  },
  detailContent: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    color: '#666', // Slightly lighter text color for content
    marginBottom: 32,
  },
  backButton: {
    backgroundColor: '#007BFF', // Primary button color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff', // White text for button
    fontSize: 16,
    fontWeight: 'bold',
  },
});
