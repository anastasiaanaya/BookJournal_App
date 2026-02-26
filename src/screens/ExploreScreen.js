/* import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 Explorar</Text>
      <Text>Aquí irá el contenido de exploración de nuevos libros.</Text>
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
}); */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';

export default function ExploreScreen() {
  const [query, setQuery] = useState(''); // Lo que el usuario escribe
  const [books, setBooks] = useState([]); // Los resultados de la API
  const [loading, setLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(''); // Mensajes de error / no resultados

  // Función para buscar en la API
  const searchBooks = async (qParam) => {
    const q = (typeof qParam === 'string' ? qParam : query).trim();
    if (!q) return; // Si está vacío, no busca

    setError('');
    setLoading(true);
    try {
      // Llamada a la API de Google Books (aseguramos escape de caracteres)
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&maxResults=10`);
      const data = await response.json();

      // Guardamos los libros (o un array vacío si no hay resultados)
      const items = data.items || [];
      setBooks(items);
      if (items.length === 0) setError('Oooops, no hemos encontrado el libro que buscas.');
      else setError('');
    } catch (error) {
      console.error("Error buscant llibres:", error);
      setError('Error conectando con la API. Comprueba tu conexión.');
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  // Función que dibuja CADA libro en la lista
  const renderBook = ({ item }) => {
    const bookInfo = item.volumeInfo;
    // Algunos libros no tienen portada, ponemos una de repuesto por si acaso
    const imageUrl = bookInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150x200.png?text=Sense+Portada';

    return (
      <View style={styles.bookCard}>
        <Image source={{ uri: imageUrl }} style={styles.coverImage} />
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle} numberOfLines={2}>{bookInfo.title}</Text>
          <Text style={styles.bookAuthor}>{bookInfo.authors?.join(', ') || 'Autor desconegut'}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>🔍 Explorar Llibres</Text>
      
      {/* Buscador */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Escriu un títol, autor..."
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={({ nativeEvent }) => searchBooks(nativeEvent.text)} // Busca al darle al intro en el teclado
        />
        <Button title="Cercar" onPress={searchBooks} color="#8B4513" />
      </View>

      {/* Rueda de carga o Lista de resultados */}
      {loading ? (
        <ActivityIndicator size="large" color="#8B4513" style={{ marginTop: 20 }} />
      ) : books.length === 0 ? (
        <View style={{ marginTop: 20, alignItems: 'center' }}>
          <Text style={styles.emptyMessage}>{error || 'Oooops, no hemos encontrado el libro que buscas.'}</Text>
        </View>
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={renderBook}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

// Estilos básicos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: 'white',
  },
  bookCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  coverImage: {
    width: 60,
    height: 90,
    borderRadius: 4,
  },
  bookInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  emptyMessage: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    padding: 20,
  },
});