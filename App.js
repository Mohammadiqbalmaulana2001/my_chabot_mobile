import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import AppNavigation from './src/navigations';
import { apiCall } from './src/api/openAI';

export default function App() {
  useEffect(() => {
    apiCall("hello world")
  },[]);
  return (
    <AppNavigation />
  );
}