import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-dom'; 

export default function BibliotecaMenu() {
  return (
    <View style={styles.container}>
      
      <Link href="/biblioteca/llista-lectures" style={styles.card}>
        <Text style={styles.cardIcon}>📚</Text>
        <Text style={styles.cardText}>Llista de lectures (Llegits)</Text>
      </Link>

      <Link href="/biblioteca/llibres-pendents" style={styles.card}>
        <Text style={styles.cardIcon}>📖</Text>
        <Text style={styles.cardText}>Llibres pendents (Llegint)</Text>
      </Link>

      <Link href="/biblioteca/llibres-vull-llegir" style={styles.card}>
        <Text style={styles.cardIcon}>⭐</Text>
        <Text style={styles.cardText}>Llibres que vull llegir (TBR)</Text>
      </Link>

      <Link href="/biblioteca/prestats" style={styles.card}>
        <Text style={styles.cardIcon}>🤝</Text>
        <Text style={styles.cardText}>Registre de llibres prestats</Text>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  }
});