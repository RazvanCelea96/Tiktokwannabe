import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import avatar5 from '../../../../assets/avatar5.png';
import avatar6 from '../../../../assets/avatar6.png';
import apptheme from '../../../../assets/apptheme.png';
import bell from '../../../../assets/bell.png';
import blocked from '../../../../assets/blocked.png';
import lock from '../../../../assets/lock.png';
import mail from '../../../../assets/mail.png';
import picture from '../../../../assets/picture.png';
import profile from '../../../../assets/profile.png';
import t from '../../../../assets/t.png';
import recycle from '../../../../assets/recycle.png';

export default function Settings({navigation}) {
  const [pictureIsPressed, setPictureIsPressed] = useState(false);
  const renderPictureSetting = (
    name,
    description,
    source,
    screen,
    screenName,
  ) => {
    return (
      <View
        style={{
          alignItems: 'flex-start',
          flexDirection: 'row',
          marginBottom: 10,
          width: 300,
        }}>
        <View
          style={{
            borderRadius: 37.5,
            backgroundColor: 'rgba(198, 208, 218, 0.2)',
            width: 34,
            height: 34,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 14,
              height: 14,
            }}
            source={source}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            onPress={() => setPictureIsPressed(!pictureIsPressed)}>
            <Text style={{marginLeft: 20}}>{renderText(name)}</Text>
          </TouchableOpacity>
          {pictureIsPressed ? (
            <View style={{flexDirection: 'row', marginLeft: 17}}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: '#7D848B',
                  borderRadius: 17.5,
                  paddingHorizontal: 25,
                  marginRight: 10,
                  paddingVertical: 5,
                  alignItems: 'center',
                }}>
                <Text style={{color: '#7D848B', fontSize: 13}}>Edit </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: 'red',
                  borderRadius: 17.5,
                  paddingHorizontal: 20,
                  marginRight: 10,
                  paddingVertical: 5,
                  alignItems: 'center',
                }}>
                <Text style={{color: 'red', fontSize: 13}}>New picture </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
    );
  };

  const renderText = (name, description) => {
    return (
      <View
        style={{
          //fontFamily: 'Avenir Next Cyr',
          marginLeft: 20,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.name} children={name} />
        <Text style={styles.nameTwo} children={description} />
      </View>
    );
  };

  const renderProfileSetting = (
    name,
    description,
    source,
    screen,
    screenName,
  ) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(screen, {screen: screenName})}>
        <View
          style={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            marginBottom: 10,
            width: 300,
          }}>
          <Image
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
            }}
            source={source}
          />

          {renderText(name, description)}
        </View>
      </TouchableOpacity>
    );
  };
  const renderSetting = (name, description, source, screen, screenName) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(screen, {screen: screenName})}>
        <View
          style={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            marginBottom: 10,
            width: 300,
          }}>
          <View
            style={{
              borderRadius: 37.5,
              backgroundColor: 'rgba(198, 208, 218, 0.2)',
              width: 34,
              height: 34,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 14,
                height: 14,
              }}
              source={source}
            />
          </View>

          {renderText(name, description)}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        padding: 10,
        paddingTop: 30,
        height: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: 'white',
        paddingLeft: 20,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexGrow: 1,
          }}>
          {renderProfileSetting(
            'Main account',
            'smallsnake312',
            avatar6,
            'ChangeAccount',
          )}
          {renderSetting('Name', 'Ahmed Shubber', profile, 'NameEdit')}
          {renderSetting(
            'Caption',
            `Hi! I’m abigail. I’m a model based in florida. Next to modeling I love to play video games and watch my fav shows on netflix.`,
            t,
            'CaptionEdit',
          )}

          {renderPictureSetting('Profile picture', '', picture)}
          {renderSetting(
            'E-mail address',
            'jesmiles@gmail.com',
            mail,
            'NewEmail',
          )}
          {renderSetting('Password', '', lock, 'NewPassword')}
          {renderSetting('Delete Account', '', recycle, '')}
        </View>
        <View>
          <Text style={{paddingVertical: 30}}>APPLICATION</Text>
          {renderSetting('App theme', '', apptheme, 'AppTheme')}
          {renderSetting('Notifications', '', bell, 'NotificationSettings')}
          {renderSetting('Blocked', '', blocked, 'BlockedList')}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    //fontFamily: 'Avenir Next Cyr',
    fontSize: 16,
    lineHeight: 18,
    color: '#040C1B',
    fontWeight: '600',
  },
  nameTwo: {
    fontSize: 13,
    lineHeight: 18,
    color: '#040C1B',
    fontWeight: '600',
    opacity: 0.5,
  },
  detailContent: {
    marginRight: 28,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 20,
    color: '#040C1B',
    opacity: 0.5,
  },
  count: {
    fontSize: 18,
  },
  buttonContainer: {
    alignItems: 'center',
    height: 26,
    width: 100,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 0.6,
  },
});
