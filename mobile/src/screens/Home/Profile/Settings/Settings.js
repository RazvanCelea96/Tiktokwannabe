import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Settings({navigation}) {
  return (
    <View>
      <Text>Settings screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('NameChange')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Name Change</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('CaptionEdit')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Caption Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ChangeAccount')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Change Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('BlockList')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Block List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Notifications')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Notifications Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewPassword')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to New Password</Text>
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
