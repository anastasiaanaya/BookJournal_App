import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

// Això és la màgia per integrar les pestanyes superiors amb Expo Router
const { Navigator } = createMaterialTopTabNavigator();
export const MaterialTopTabs = withLayoutContext(Navigator);

export default function BibliotecaTabLayout() {
  return (
    <MaterialTopTabs
      screenOptions={{
        lazy: true, // Força a no carregar res de les altres pestanyes fins que s'obrin
        lazyPreloadDistance: 0, // No precarrega les pestanyes del costat per si de cas
        tabBarScrollEnabled: true, // Permet fer scroll si les pestanyes no caben a la pantalla
        tabBarIndicatorStyle: { 
          backgroundColor: '#8B4513', // Línia marró que indica on ets (estil llibreta)
          height: 3,
          borderRadius: 3,
        },
        tabBarStyle: { 
          backgroundColor: '#Fdfbf7', // Color de fons tipus paper
          elevation: 2, // Ombra suau
        },
        tabBarLabelStyle: { 
          fontWeight: 'bold', 
          fontSize: 12,
          textTransform: 'none', // Perquè no ho posi tot en majúscules per defecte
        },
        tabBarActiveTintColor: '#8B4513', // Color del text quan està seleccionat
        tabBarInactiveTintColor: '#A9A9A9', // Color quan no està seleccionat
      }}
    >
      {/* La pestanya principal (Llegits) */}
      <MaterialTopTabs.Screen 
        name="index" 
        options={{ title: '📚' }} 
      />
      
      {/* La pestanya de llibres actuals */}
      <MaterialTopTabs.Screen 
        name="llibres_pendents" 
        options={{ title: '📖' }} 
      />
      
      {/* La pestanya TBR */}
      <MaterialTopTabs.Screen 
        name="tbr" 
        options={{ title: '⭐' }} 
      />
      
      {/* La pestanya de prestats */}
      <MaterialTopTabs.Screen 
        name="llibres_prestats" 
        options={{ title: '🤝' }} 
      />
    </MaterialTopTabs>
  );
}