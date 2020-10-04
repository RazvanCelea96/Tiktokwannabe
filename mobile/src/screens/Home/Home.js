import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Camera')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeComments')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Comments</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Share')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Share</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Messenger')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Messenger</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 25,
    marginLeft: 50,
    marginRight: 50,
  },

  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
