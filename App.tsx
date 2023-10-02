import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import MainScreen from './src/screens/mainScreen/mainScreen';
import { LogBox } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/state/store';
import { useAppDispatch } from './src/state/dispatch';
import { addToTimeSpent } from './src/state/actions';
import { selectAppTimeState } from './src/state/selector';

const Stack = createNativeStackNavigator();

const Root = () => {
  const dispatch = useAppDispatch();

  let resendTimeInterval: number | NodeJS.Timeout;
  resendTimeInterval = setInterval(() => {
    dispatch(addToTimeSpent(1));
  }, 1000);
  useEffect(() => {
    return () => {
      clearInterval(resendTimeInterval);
    };
  });
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App(): JSX.Element {
  LogBox.ignoreAllLogs();
  
  return (
    <Provider store={store}>
      <Root/>
    </Provider>
  );
}

export default App;
