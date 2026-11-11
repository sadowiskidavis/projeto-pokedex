import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerToggleButton } from '@react-navigation/drawer';

import PokemonScreen from '../screens/PokemonScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import type { InicioStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<InicioStackParamList>();

export default function InicioStack() {
  return (
    <Stack.Navigator
      initialRouteName="Pokemon"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6D28D9',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: '700',
        },
      }}
    >
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: 'Minha Pokédex',
          headerLeft: () => (
            <DrawerToggleButton tintColor="#FFFFFF" />
          ),
        }}
      />

      <Stack.Screen
        name="Detalhes"
        component={DetalhesScreen}
        options={{
          title: 'Detalhes',
        }}
      />
    </Stack.Navigator>
  );
}