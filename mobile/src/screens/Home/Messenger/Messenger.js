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
        <Text style={{fontSize: 12, height: 22, width: 80, opacity: 0.5}}>REACTIONS</Text>
        {renderScrollViewReactions()}
      </View>
    ); 
  }

  const renderLastMessage = (chatInfo) => {
    if(chatInfo.isTyping) {
      return (<Text style={{fontSize: 15}}>is typing...</Text>); 
    }
    if(chatInfo.lastMessage.type === 'text') {
      return (<Text style={{fontSize: 15}}>{chatInfo.lastMessage.text}</Text>);
    }
    if(chatInfo.lastMessage.type === 'audio') {
      return (
        <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
          <Text style={{fontSize: 15}}>{chatInfo.lastMessage.audioLength}</Text>
          <Image
            source={require("../../../assets/MessengerAssets/Audio.png")}
            style={{
              width: 140,
              height: 8,
              marginLeft: 10,
            }}
          />
        </View>
      )
    }
  }

  const renderChat = (chatInfo) => {
    return (
      <View style={{flexDirection: 'row', marginBottom: 29}}>
        <View style={{width: 50, height: 50, marginRight: 14}}>
          <Image
              source={chatInfo.photo[0]}
              style={{
                width: 50,
                height: 50,
              }}
            />
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={{fontSize: 16}}>{chatInfo.name}</Text>
            <Text style={{fontSize: 12, marginLeft: 7, opacity: 0.5}}>{chatInfo.time}</Text>
          </View>
          <View style={{marginTop: 5}}>
            {renderLastMessage(chatInfo)}
          </View>
        </View>
        <View>
          
        </View>
      </View>
    );
  }

  const renderMessages = () => {
    return (
      <View style={{borderColor: 'green', borderWidth: 2, marginTop: 20}}>
        <Text style={{fontSize: 12, height: 22, width: 74, opacity: 0.5}}>MESSAGES</Text>
        <ScrollView style={{marginTop: 13}}>
          {renderChat(chats[0])}
          {renderChat(chats[1])}
          {renderChat(chats[2])}
          {renderChat(chats[3])}
          {renderChat(chats[4])}
          {renderChat(chats[5])}
          {renderChat(chats[6])}
          {renderChat(chats[7])}
        </ScrollView>
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
        backgroundColor: 'white',
      }}>
      {renderDropDown()}
      {renderReactions()}
      {renderMessages()}
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
