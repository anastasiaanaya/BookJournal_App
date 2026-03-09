import { View, Text, StyleSheet } from 'react-native';
import {useLocalSearchParams, Stack} from 'expo-router';

export default function BookDetailScreen() {
  const { nom, autor, descripcio } = useLocalSearchParams(); 

  return (
    <View style={styles.container}>
        {/* canviar dinàmicament el títol de la pàgina */}
        <Stack.Screen
          options={{ title: `Detall del Llibre: ${nom}`,
            headerStyle: { backgroundColor: '#25292e' },
          }}
        />
      <Text style={styles.nomText}>Títol: {nom}</Text>
      <Text style={styles.autorText}>Autor: {autor}</Text>
      <Text style={styles.descripcioText}>Descripció: {descripcio}</Text>
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
  nomText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  autorText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descripcioText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
  }
});