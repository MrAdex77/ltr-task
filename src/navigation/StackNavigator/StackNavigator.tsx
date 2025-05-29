import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import { Routes } from '../routes';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name={Routes.Home} component={HomeScreen} />
      </Stack.Navigator>
    </>
  );
};
