import { View, Text, StyleSheet } from 'react-native';

export default function FavoritosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Favoritos</Text>
      <Text>Aqui ficarão seus Pokémon favoritos.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  titulo: { fontSize: 26, fontWeight: 'bold' },
});
