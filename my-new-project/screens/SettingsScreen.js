import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
import Queries from '../components/Queries.js'


export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  //return <ExpoConfigView />;

  return (

    <Queries />
  );
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
