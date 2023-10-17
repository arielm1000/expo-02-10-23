import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import { BoxModelObjectScreen } from './src/screens/ObjectModel/BoxModelObjectScreen';
import { PositionModelScreen } from './src/screens/ObjectModel/PositionModelScreen';
import { FlexBoxScreen } from './src/screens/ObjectModel/FlexBoxScreen';
import { HomeScreen } from './src/screens/products/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigators/StackNavigator';


export default function App() {
  return (
   // <SafeAreaView> 
      <>
      {/* <StatusBar style='black' /> */}
{/*       <BoxModelObjectScreen/> 
      <PositionModelScreen />  */}
      {/* <FlexBoxScreen/> */}
      {/* </SafeAreaView> */}
      {/* <HomeScreen/> */}
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      </>
  );
}


