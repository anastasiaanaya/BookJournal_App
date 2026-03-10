import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LlibresPendents() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Llibres pendents</Text>
      <Text>Aquí aniran els llibres que tens a les prestatgeries per llegir.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }
});