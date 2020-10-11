import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {chats} from './MessengerStubData';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Messenger({navigation}) {
  const renderDropDown = () => {
    /*
    return (
      <DropDownPicker
        items={[
          {label: 'Messages', value: 'item1'},
          {label: 'Private Messages', value: 'item2'},
          {label: 'Groups', value: 'item1'},
          {label: 'Reactions', value: 'item2'},
        ]}
        defaultIndex={0}
        containerStyle={{height: 40}}
        onChangeItem={(item) => console.log(item.label, item.value)}
      />
    );
    */
    return <Text>DropDown</Text>;
  };

  return (
    <View
      style={{
        borderColor: 'orange',
        borderWidth: 2,
        flex: 1,
      }}>
      <View style={{borderColor: 'red', borderWidth: 2}}>
        {renderDropDown()}
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
