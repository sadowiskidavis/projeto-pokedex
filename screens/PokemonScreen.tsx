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
      <View style={styles.apresentacao}>
        <Text style={styles.titulo}>Encontre seu Pokémon</Text>
        <Text style={styles.subtitulo}>
          Toque em um Pokémon para ver mais informações.
        </Text>
      </View>

      {carregando ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#7C3AED" />
          <Text style={styles.loadingText}>Carregando Pokémons...</Text>
        </View>
      ) : (
        <FlatList
          data={pokemons}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.lista}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              style={styles.card}
              onPress={() =>
                navigation.navigate('Detalhes', { pokemonId: item.id })
              }
            >
              <View style={styles.numero}>
                <Text style={styles.numeroTexto}>
                  #{String(item.id).padStart(3, '0')}
                </Text>
              </View>

              <Image
                source={{ uri: item.imagem }}
                style={styles.imagem}
              />

              <View style={styles.informacoes}>
                <Text style={styles.nome}>{item.nome}</Text>

                <Text style={styles.tipo}>
                  {item.tipos.join(' • ')}
                </Text>

                <Text style={styles.detalhes}>
                  Ver detalhes →
                </Text>
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5FF',
    paddingHorizontal: 16,
  },

  apresentacao: {
    paddingTop: 22,
    paddingBottom: 12,
  },

  titulo: {
    fontSize: 25,
    fontWeight: '800',
    color: '#2E1065',
  },

  subtitulo: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 6,
    lineHeight: 20,
  },

  lista: {
    paddingVertical: 12,
    gap: 14,
    paddingBottom: 24,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#E9D5FF',
  },

  imagem: {
    width: 95,
    height: 95,
  },

  informacoes: {
    flex: 1,
    marginLeft: 10,
    gap: 5,
  },

  nome: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2E1065',
    textTransform: 'capitalize',
  },

  tipo: {
    fontSize: 14,
    color: '#7C3AED',
    textTransform: 'capitalize',
  },

  detalhes: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '700',
    color: '#6D28D9',
  },

  numero: {
    position: 'absolute',
    right: 16,
    top: 12,
    backgroundColor: '#F3E8FF',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 10,
  },

  numeroTexto: {
    fontSize: 11,
    fontWeight: '700',
    color: '#7C3AED',
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },

  loadingText: {
    color: '#6B7280',
  },
});