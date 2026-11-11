import { useEffect, useState } from 'react';
import { View, Text, Button, Image, ActivityIndicator, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { buscarPokemon } from '../data/pokeapi';
import type { Pokemon } from '../data/pokeapi';
import type { InicioStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<InicioStackParamList, 'Detalhes'>;

export default function DetalhesScreen({ navigation, route }: Props) {
  const { pokemonId } = route.params;
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    buscarPokemon(pokemonId)
      .then(setPokemon)
      .finally(() => setCarregando(false));
  }, [pokemonId]);

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!pokemon) {
    return (
      <View style={styles.container}>
        <Text>Pokémon não encontrado.</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.imagem }} style={styles.imagem} />
      <Text style={styles.titulo}>{pokemon.nome}</Text>
      <Text> Tipo: {pokemon.tipos.join(', ')} </Text>
      <Text> Altura: {pokemon.altura} m </Text>
      <Text> Peso: {pokemon.peso} kg </Text>
      <Button title="Voltar para a lista" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 20,
    backgroundColor: '#FFFFFF',
  },
  imagem: {
    width: 200,
    height: 200
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
