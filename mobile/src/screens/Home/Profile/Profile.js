import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Profile({navigation}) {
  return (
    <View>
      <Text>Profile screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Following')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Following</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Followers')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Followers</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('StoryViews')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Story views</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Settings</Text>
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
