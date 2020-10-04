import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function NOtificationSettings({navigation}) {
  return (
    <View>
      <Text>Settings screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('NotificationsCommentsSettings')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Comments Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('NotificationsSavesSettings')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Saves Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('NotificationsRequestsSettings')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Requests Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('NotificationsSharesSettings')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Shares Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('PreviewSettings')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go to Preview Settings</Text>
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
