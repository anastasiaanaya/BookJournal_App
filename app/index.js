import { Redirect } from 'expo-router';

export default function Index() {
  // Aquesta és la porta d'entrada. Quan l'usuari obre l'app, 
  // l'empenyem directament cap a la carpeta de les pestanyes.
  return <Redirect href="/(tabs)" />;
}