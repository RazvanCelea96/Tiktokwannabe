import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {chats} from './MessengerStubData';

export default function Messenger({navigation}) {
  return (
    <View
      style={{
        borderColor: 'orange',
        borderWidth: 2,
        flex: 1,
      }}>
      <View style={{borderColor: 'red', borderWidth: 2}}>
        <Text>s</Text>
      </View>
      <View style={{borderColor: 'blue', borderWidth: 2}}>
        <Text>s</Text>
      </View>
      <View style={{borderColor: 'green', borderWidth: 2}}>
        <Text>s</Text>
      </View>
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
