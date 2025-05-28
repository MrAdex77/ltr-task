import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Routes} from './routes';

export type LogOutStackParamList = {
  [Routes.Login]: undefined;
};

export type RootStackParamList = {
  [Routes.Home]: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  LogOutStackParamList,
  Routes.Login
>;

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.Home
>;
