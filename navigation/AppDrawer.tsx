import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import AppTabs from './AppTabs';
import FavoritosScreen from '../screens/FavoritosScreen';
import ConfiguracoesScreen from '../screens/ConfiguracoesScreen';
import type { AppDrawerParamList } from '../types/navigation';

const Drawer = createDrawerNavigator<AppDrawerParamList>();

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Pokedex"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="Pokedex"
        component={AppTabs}
        options={{
          title: 'Pokédex',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="game-controller-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favoritos"
        component={FavoritosScreen}
        options={{
          title: 'Favoritos',
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Configuracoes"
        component={ConfiguracoesScreen}
        options={{
          title: 'Configurações',
          headerShown: true,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}