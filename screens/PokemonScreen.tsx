import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { buscarPokemon, idsIniciais } from '../data/pokeapi';
import type { Pokemon } from '../data/pokeapi';
import type { InicioStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<InicioStackParamList, 'Pokemon'>;

export default function PokemonScreen({ navigation }: Props) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    Promise.all(idsIniciais.map(buscarPokemon))
      .then(setPokemons)
      .finally(() => setCarregando(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pokémon</Text>
      <Text>Toque em um Pokémon para ver os detalhes.</Text>

      {carregando ? (
        <ActivityIndicator size="large" style={{ marginTop: 32 }} />
      ) : (
        <FlatList
          data={pokemons}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => (
            <Pressable
              style={styles.card}
              onPress={() =>
                navigation.navigate('Detalhes', { pokemonId: item.id })
              }
            >
              <Image source={{ uri: item.imagem }} style={styles.imagem} />
              <View style={{ gap: 8 }}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.link}>Ver detalhes →</Text>
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F4F6F8' },
  titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 8 },
  lista: { paddingVertical: 16, gap: 12 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E1E5EA',
  },
  imagem: { width: 90, height: 90 },
  nome: { fontSize: 18, fontWeight: 'bold', textTransform: 'capitalize' },
  link: { color: '#1454BD', fontWeight: 'bold' },
});
