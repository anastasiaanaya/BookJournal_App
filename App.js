import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Iconos gratuitos incluidos en Expo

//nuestras pantallas
import HomeScreen from './src/screens/HomeScreen';
import LibraryScreen from './src/screens/LibraryScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import DiaryScreen from './src/screens/DiaryScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();
  
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Biblioteca') iconName = focused ? 'library' : 'library-outline';
            else if (route.name === 'Explorar') iconName = focused ? 'search' : 'search-outline';
            else if (route.name === 'Diari') iconName = focused ? 'book' : 'book-outline';
            else if (route.name === 'Perfil') iconName = focused ? 'person' : 'person-outline';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#8B4513', //marrón para el icono activo
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Inici' }}/>
        <Tab.Screen name="Library" component={LibraryScreen} options={{ title: 'Biblioteca' }} />
        <Tab.Screen name="Explore" component={ExploreScreen} options={{ title: 'Explorar' }} />
        <Tab.Screen name="Diary" component={DiaryScreen} options={{ title: 'El meu diari' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
