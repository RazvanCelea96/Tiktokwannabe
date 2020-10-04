import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Messenger({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Messenger Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('PrivateMessage')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Private Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Groups')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Groups</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Reactions')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Reactions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchPeople')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Search People</Text>
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
