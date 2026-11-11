import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerToggleButton } from '@react-navigation/drawer';

import PokemonScreen from '../screens/PokemonScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import type { InicioStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<InicioStackParamList>();

export default function InicioStack() {
  return (
    <Stack.Navigator initialRouteName="Pokemon">
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: 'Pokédex',
          headerLeft: () => <DrawerToggleButton tintColor="#1454BD" />,
        }}
      />
      <Stack.Screen
        name="Detalhes"
        component={DetalhesScreen}
        options={{ title: 'Detalhes do Pokémon' }}
      />
    </Stack.Navigator>
  );
}
