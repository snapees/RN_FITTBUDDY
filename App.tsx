import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
export default function App() {
  // const [visible, setVisible] = useState(true);
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };
    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Hello, Dave.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});
