import { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function ConfiguracoesScreen() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: temaEscuro ? '#121212' : '#FFFFFF' },
      ]}
    >
      <Text style={[styles.titulo, { color: temaEscuro ? '#FFFFFF' : '#000000' }]}>
        Configurações
      </Text>
      <Text style={{ color: temaEscuro ? '#FFFFFF' : '#000000' }}>
        Tema: {temaEscuro ? 'Escuro' : 'Claro'}
      </Text>
      <Switch value={temaEscuro} onValueChange={setTemaEscuro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold'
  },
});
