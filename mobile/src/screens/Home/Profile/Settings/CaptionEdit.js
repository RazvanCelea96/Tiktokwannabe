import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export default function CaptionEdit({navigate}) {
  return (
    <View
      style={{
        padding: 10,
        paddingTop: 60,
        height: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#fff',
        paddingLeft: 20,
      }}>
      <View style={{marginBottom: 10, paddingLeft: 20}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            lineHeight: 21,
            color: 'black',
          }}>
          Type in your new caption down below. When your done, press save!
        </Text>
      </View>

      <View
        style={{
          width: 335,
          height: 150,
          justifyContent: 'center',
          paddingHorizontal: 15,
          marginTop: 50,
        }}>
        <TextInput
          style={{
            width: 335,
            color: 'black',
            borderRadius: 20,
            backgroundColor: '#f4f6f8',
            paddingBottom: 100,
          }}
          placeholder="Type a caption..."
          autoCorrect={false}
          autoCompleteType="off"
          keyboardAppearance="dark"
          numberOfLines={1}
          spellCheck={false}
        />
      </View>

      <TouchableOpacity
        style={{
          width: 169,
          backgroundColor: '#FF3A72',
          borderRadius: 100,
          height: 56,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
          marginLeft: 100,
        }}
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <Text style={{color: 'white', fontSize: 17}}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
