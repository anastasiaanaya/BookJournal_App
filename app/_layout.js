import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen 
        name="detall_llibres" 
        options={{ 
          title: 'Detall del Llibre',
          headerStyle: { backgroundColor: '#25292e' },
          headerTintColor: '#fff',
        }} 
      />
    </Stack>
  );
}