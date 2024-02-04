import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Navigationbar from './src/components/navigationbar/Navigationbar';

const { height, width } = Dimensions.get('window');

const App = () => {

  // ===============================================
  // Hide the splash screen when the component mounts
  // ================================================
  useEffect(() => {
    SplashScreen.hide();
  }, []);



  return (

    <>
      <Navigationbar />
    </>
  );
};

export default App;



