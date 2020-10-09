import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import avatar5 from '../../../../assets/avatar5.png';

export default function Settings({navigation}) {
  const renderText = (title, subtitle) => {
    return (
      <View
        style={{
          fontFamily: 'Avenir Next Cyr',
          height: 40,
          marginLeft: 20,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.name} children={title} />
        <Text style={styles.nameTwo} children={subtitle} />
      </View>
    );
  };
  const renderComment = () => {
    return (
      <View
        style={{
          alignItems: 'flex-start',
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <Image
          style={{width: 50, height: 50, borderRadius: 25}}
          source={avatar5}
        />
        {renderText(title)}
      </View>
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
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexGrow: 1,
          }}>
          {renderComment()}
          {renderComment()}
          {renderComment()}
          {renderComment()}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontFamily: 'Avenir Next Cyr',
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

{
  /* <TouchableOpacity
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
}); */
}
