import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const reactions = [
  {name: 'James', photo: `Elipse 19.png`, isActive: true},
  {name: 'Jessica', photo: `Elipse 147.png`, isActive: false},
];

const chats = [
  {
    name: `Jessica Parker`,
    lastMessage: {
      type: `text`,
      text: `How your life is going?`,
      audioLength: ``,
      photo: ``,
    },
    time: `29 min ago`,
    notifications: 1,
    isAudio: false,
    audioLength: ``,
    isTyping: false,
    delivered: false,
    seen: false,
    photo: [`Elipse 11.png`],
  },
  {
    name: `James, Beth`,
    lastMessage: {
      type: `text`,
      text: `Wow, that's awesome!`,
      audioLength: ``,
      photo: ``,
    },
    time: `31 min ago`,
    notifications: 7,
    isAudio: false,
    audioLength: ``,
    isTyping: false,
    delivered: false,
    seen: false,
    photo: [`Oval.png`, `Oval2.png`],
  },
  {
    name: `Brandon Wilson`,
    lastMessage: {
      type: `text`,
      text: ``,
      audioLength: ``,
      photo: ``,
    },
    time: `2 hours ago`,
    notifications: 0,
    isAudio: false,
    audioLength: ``,
    isTyping: true,
    delivered: false,
    seen: false,
    photo: [`Elipse 18.png`],
  },
  {
    name: `James miles`,
    lastMessage: {
      type: `audio`,
      text: ``,
      audioLength: `01:27`,
      photo: ``,
    },
    time: `1 hour ago`,
    notifications: 0,
    isAudio: true,
    audioLength: `01:27`,
    isTyping: false,
    delivered: false,
    seen: false,
    photo: [`Elipse 18.png`],
  },
  {
    name: `Zach spencer`,
    lastMessage: `Yeah of course, just text me!`,
    time: `1 hour ago`,
    notifications: 0,
    isAudio: false,
    audioLength: ``,
    isTyping: false,
    delivered: true,
    seen: false,
    photo: [`Elipse 12.png`],
  },
  {
    name: `Andrew spencer`,
    lastMessage: `😂😂😂😂`,
    time: `1 hour ago`,
    notifications: 0,
    isAudio: false,
    audioLength: ``,
    isTyping: false,
    delivered: false,
    seen: true,
    photo: [`Elipse 16.png`],
  },
  {
    name: `Leslie Robertson`,
    lastMessage: `It's by the door`,
    time: `2 hours ago`,
    notifications: 0,
    isAudio: false,
    audioLength: ``,
    isTyping: false,
    delivered: false,
    seen: false,
    photo: [`Elipse 17.png`],
  },
  {
    name: `Sara mello`,
    lastMessage: ``,
    time: `2 hours ago`,
    notifications: 0,
    isAudio: false,
    audioLength: ``,
    isTyping: false,
    delivered: false,
    seen: false,
    photo: [`Elipse 17.png`],
  },
];

export default function Messenger({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Messenger Screen</Text>
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
