import type { NavigatorScreenParams } from '@react-navigation/native';

export type InicioStackParamList = {
  Pokemon: undefined;
  Detalhes: { pokemonId: number };
};

export type AppTabParamList = {
  Inicio: NavigatorScreenParams<InicioStackParamList>;
  Favoritos: undefined;
  Configuracoes: undefined;
};

export type AppDrawerParamList = {
  Pokedex: NavigatorScreenParams<AppTabParamList>;
  Favoritos: undefined;
  Configuracoes: undefined;
};
