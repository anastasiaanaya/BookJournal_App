import { Tabs, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        // Estils Header
        headerStyle: { backgroundColor: '#25292e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        
        // Colors menú inferior
        tabBarActiveTintColor: '#8B4513',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      {/* Pestanya Inici */}
      <Tabs.Screen 
        name="index" // 'index' es la pantalla principal (Home)
        options={{ 
          title: 'Inici',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          )
        }} 
      />

      {/* 2. Pestanya Biblioteca */}
      <Tabs.Screen 
        name="biblioteca" 
        options={{ 
          title: 'Biblioteca',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'library' : 'library-outline'} size={size} color={color} />
          )
        }} 
      />
      <Stack.Screen 
        name="detall_llibres" 
        options={{ 
          title: 'Detall del Llibre',
            headerStyle: { backgroundColor: '#25292e' },
        }} 
      />

      {/* 3. Pestanya Explorar */}
      <Tabs.Screen 
        name="explorar" 
        options={{ 
          title: 'Explorar',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'search' : 'search-outline'} size={size} color={color} />
          )
        }} 
      />

      {/* 4. Pestanya Diari */}
      <Tabs.Screen 
        name="diari" 
        options={{ 
          title: 'El meu Diari',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'book' : 'book-outline'} size={size} color={color} />
          )
        }} 
      />

      {/* 5. Pestanya Perfil */}
      <Tabs.Screen 
        name="perfil" 
        options={{ 
          title: 'Perfil',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />
          )
        }} 
      />
    </Tabs>
  );
}