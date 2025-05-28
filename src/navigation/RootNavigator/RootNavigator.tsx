import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import {useAuth} from '../../context/AuthContext';
import LogOutNavigator from '../LogOutNavigator/LogOutNavigator';
import {StackNavigator} from '../StackNavigator/StackNavigator';

export const RootNavigator = () => {
  const {token} = useAuth();

  return (
    <NavigationContainer fallback={<ActivityIndicator animating />}>
      {token ? <StackNavigator /> : <LogOutNavigator />}
    </NavigationContainer>
  );
};
