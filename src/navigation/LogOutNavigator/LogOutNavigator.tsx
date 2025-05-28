import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import {Routes} from '../routes';
import {LogOutStackParamList} from '../types';

const LogOutStack = createNativeStackNavigator<LogOutStackParamList>();

const LogOutNavigator: React.FC = () => (
  <LogOutStack.Navigator>
    <LogOutStack.Screen name={Routes.Login} component={LoginScreen} />
  </LogOutStack.Navigator>
);

export default LogOutNavigator;
