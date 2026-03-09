import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DiaryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📖 El meu diari</Text>
      <Text>Aquí irá tu diario de lectura.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Un gris clarito para el fondo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});