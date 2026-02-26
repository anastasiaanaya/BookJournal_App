import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// ¡Importante que tenga "export default" y el nombre correcto!
export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 La meva Biblioteca</Text>
      <Text>Aquí aniran els teus llibres llegits i pendents.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});