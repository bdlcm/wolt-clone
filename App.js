import React, { useState } from 'react';
import firebase from 'firebase/app'

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from './src/infrastructure/theme';
 import { ThemeProvider } from 'styled-components';
 import {RestaurantsContextProvider} from "./src/services/restaurants/restaurants.context";
 import {LocationContextProvider} from "./src/services/location/location.context";
 import {FavoritesContextProvider} from "./src/services/favorites/favorites.context";

import {Navigation}  from "./src/infrastructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';
 
const firebaseConfig = {
  apiKey: "AIzaSyBUvSVIpUZCykYvSJk_5X3UxO_Ji31zRNg",
  authDomain: "mobile-app-2e4bb.firebaseapp.com",
  projectId: "mobile-app-2e4bb",
  storageBucket: "mobile-app-2e4bb.appspot.com",
  messagingSenderId: "669833080773",
  appId: "1:669833080773:web:28bbd71cb6e63eb07e65ac"
};


 
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded ||  !latoLoaded) {
    return null
  }
   return (
    <>
    <ThemeProvider theme={theme}>
      <FavoritesContextProvider>
     <LocationContextProvider>
     
     <RestaurantsContextProvider>

       <Navigation />
    </RestaurantsContextProvider>
    </LocationContextProvider>
    </FavoritesContextProvider>
 
  </ThemeProvider>
      <ExpoStatusBar style="auto" />

    </>
    

  );

   }

