import React, { useRef, useState } from 'react';
import { View, Button, Text } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

const WebViewExample = () => {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const handleMessage = (event) => {
    const htmlContent = event.nativeEvent.data;
    let nombre = 'dani.a.caceres';

    if (htmlContent.includes(nombre)) {
      console.log(`La palabra "${nombre}" fue encontrada en el HTML.`);
    } else {
      console.log(`La palabra "${nombre}" no fue encontrada en el HTML.`);
    }
  };

  const handleGetHTML = () => {
    setLoading(true);
    webViewRef.current.injectJavaScript(`
      window.ReactNativeWebView.postMessage(document.documentElement.outerHTML);
    `);
  };

  const handleOnLoad = () => {
    setLoading(false);
  };

  const handleScrollToBottom = () => {
    if (!loading) {
      webViewRef.current.injectJavaScript(`
        if (document.documentElement.scrollHeight - window.innerHeight <= window.scrollY) {
          window.ReactNativeWebView.postMessage('reachedBottom');
        } else {
          window.scrollTo(0, document.body.scrollHeight);
        }
      `);
    }
  };

  const handleWebViewMessage = (event) => {
    if (event.nativeEvent.data === 'reachedBottom') {
      console.log('La página ha llegado al final y no se puede hacer más scroll.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        ref={webViewRef}
        source={{ uri: 'https://www.instagram.com/bablo.binbo/followers' }}
        onMessage={handleMessage}
        injectedJavaScript={`
          window.ReactNativeWebView.postMessage(document.documentElement.outerHTML);
        `}
        onLoad={handleOnLoad}
        onMessage={handleWebViewMessage}
      />
      <Button title="Obtener HTML" onPress={handleGetHTML} />
      <Button title="Scroll hasta el final" onPress={handleScrollToBottom} />
    </View>
  );
};

export default WebViewExample;
