import React, { useRef, useState } from 'react';
import { View, Button, Text } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';


const WebViewExample = () => {
  const webViewRef = useRef(null);

  const handleMessage = (event) => {
    const htmlContent = event.nativeEvent.data;
    console.log('HTML Content:', htmlContent);
  };


  return (

        <WebView
          style={{ flex: 1 }}
          ref={webViewRef}
          source={{ uri: 'https://www.instagram.com/bablo.binbo/followers' }} // Cambia la URL según tus necesidades
          onMessage={handleMessage}
          injectedJavaScript={`
          window.ReactNativeWebView.postMessage(document.documentElement.outerHTML);
        `} />
        

  );
};

export default WebViewExample;
