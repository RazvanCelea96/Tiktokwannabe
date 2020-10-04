import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Chat({navigation}) {
  return (
    <View>
      <Text>Chat screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('ForwardMessage')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Forward Message</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchMessages')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Search Messages</Text>
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
