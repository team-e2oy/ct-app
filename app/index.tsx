import React, { useEffect } from "react";
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Platform } from 'react-native';
import * as SplashScreen from "expo-splash-screen";


export default function App() {

  const webviewSource = { uri: 'https://www.google.com/webhp?igu=1' };
  
  useEffect(() => {
    
    async function prepare() {
      await SplashScreen.preventAutoHideAsync(); // 스플래시 화면 유지
      setTimeout(() => {
        SplashScreen.hideAsync(); // 3초 후 스플래시 화면 숨기기
      }, 3000);
    }
    prepare();
  }, []);

  return (
    <View style={{ flex: 1 }} >
    {Platform.OS === 'web' ? (
      // 웹에서는 iframe을 사용
      <iframe 
        src={webviewSource.uri} 
        style={{ width: '100%', height: '100%', border: 'none' }} 
        title="WebView"
        sandbox="allow-same-origin allow-scripts"
      />
    ) : (
      // 네이티브 환경에서는 WebView 사용
      <WebView  source={{ uri: "https://www.expo.dev" }} style={{ flex: 1 }} />
    )}
  </View>
  );
}