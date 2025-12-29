import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';




const { width, height } = Dimensions.get('window');

export default function Begin() {
  const navigation = useNavigation(); 
  const handlePress = () => {
    navigation.navigate('Login');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.background}
        source={{
          uri: 'https://images.unsplash.com/photo-1503627381655-17cf0637efc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D',
        }}
        resizeMode="cover"
      />
      <View style={[styles.background, styles.overflow]} />
      <View style={styles.content}>
        <Text style={styles.title}>Affordable Housing,{'\n'}Enjoy your stay</Text>
        <TouchableOpacity
         onPress={handlePress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1d1b',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  overflow: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    marginTop: 'auto',
    alignItems: 'flex-start',
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 24,
    textAlign: 'left',
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#a1377f',
    textAlign: 'center',
    marginBottom: 8,
  },
  button: {
    minWidth: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#033dfc',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color:'#dfe3f0'
  },
});