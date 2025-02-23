This solution uses `Linking.addEventListener` to listen for URL changes instead of solely relying on `getInitialURL()`.  This provides a more reliable approach to handling deep links.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrlChange = async (url) => {
      setInitialUrl(url);
    };
    Linking.addEventListener('url', handleUrlChange);
    return () => Linking.removeEventListener('url', handleUrlChange);
  }, []);

  useEffect(() => {
    const getInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      if(url){
        setInitialUrl(url)
      }
    };
    getInitialUrl();
  }, []);

  return (
    <View>
      {initialUrl ? <Text>Initial URL: {initialUrl}</Text> : <Text>No URL found</Text>}
    </View>
  );
}
```