import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/navigation';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/views/loginpage';
import FirstPage from "./src/views/firstpage";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { StatusBar, Platform, Text, View } from 'react-native';
import GlobalFont from 'react-native-global-font';
import CreateAccountPage from './src/views/createaccountpage';
import HomePage from './src/views/homepage';
import ContactPage from './src/views/contactpage';
import HelpPage from './src/views/helppage';
import AboutUsPage from './src/views/aboutuspage';
import ProfilePage from './src/views/profilepage';
import NewPetPage from './src/views/newpetpage';
import ImmersiveMode from 'react-native-immersive';
import ForgetPasswordPage from './src/views/forgetpasswordpage';


enableScreens();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      GlobalFont.applyGlobal('Poppins-Regular');
      setFontsLoaded(true);
      ImmersiveMode.fullLayout(true);
      ImmersiveMode.setImmersive(true);
    }

    prepare();

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
  }, []);

  if (!fontsLoaded) return (
    <View><Text>Carregando fontes...</Text></View>
  );

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='FirstPage' screenOptions={{
          headerShown: false,
          animation: "none"
        }}>
          <Stack.Screen name='FirstPage' component={FirstPage} />
          <Stack.Screen name='LoginPage' component={LoginPage} />
          <Stack.Screen name='CreateAccountPage' component={CreateAccountPage} />
          <Stack.Screen name='HomePage' component={HomePage} />
          <Stack.Screen name='HelpPage' component={HelpPage} />
          <Stack.Screen name='ContactPage' component={ContactPage} />
          <Stack.Screen name='AboutUsPage' component={AboutUsPage} />
          <Stack.Screen name='ProfilePage' component={ProfilePage} />
          <Stack.Screen name='NewPetPage' component={NewPetPage} />
          <Stack.Screen name='ForgetPasswordPage' component={ForgetPasswordPage} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
