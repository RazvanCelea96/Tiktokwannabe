import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {chats, reactions} from './MessengerStubData';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Messenger({navigation}) {

  const windowDimensions = useWindowDimensions();
  const marginRightWriteMessage = 0.08 * windowDimensions.width;

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
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{width: 100, height: 27, fontSize: 22}}>Messages</Text>
        <Image
          style={{width: 19, height: 19, marginRight: marginRightWriteMessage}}
          source={require('../../../assets/MessengerAssets/WriteMessage.png')}
        />
      </View>
    );
  };

  const renderReaction = (style) => {
    console.log(style);
    let borderColor = style.isActive ? '#FF3A72' : '#C6D0DA';
    return (
      <View style={{marginRight: 12, marginTop: 9, display: 'flex', alignItems: 'center'}}>
        <View style={{borderColor: borderColor, borderWidth: 1.5, borderRadius: 50}}>
          <Image
            source={style.photo}
            style={{
              width: 64,
              height: 64,
              margin: 5,
            }}
          />
        </View>
        <Text style={{font: 12, fontWeight: '500'}}>{style.name}</Text>
      </View>
    );
  }

  const renderScrollViewReactions = () => {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
          {renderReaction(reactions[0])}
          {renderReaction(reactions[1])}
        </ScrollView>
    );
  }

  const renderReactions = () => {
    return (
      <View style={{marginTop: 16}}>
        <Text style={{font: 12, height: 22, width: 80}}>REACTIONS</Text>
        {renderScrollViewReactions()}
      </View>
    ); 
  }

  return (
    <View
      style={{
        borderColor: 'orange',
        borderWidth: 2,
        flex: 1,
        paddingLeft: 19,
      }}>
      {renderDropDown()}
      {renderReactions()}
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
