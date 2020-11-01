import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import avatar6 from '../../../../assets/avatar6.png';
import avatar7 from '../../../../assets/avatar7.png';
import avatar8 from '../../../../assets/avatar8.png';
import avatar9 from '../../../../assets/avatar9.png';
import avatar10 from '../../../../assets/avatar5.png';
import avatar11 from '../../../../assets/avatar11.png';
import avatar12 from '../../../../assets/avatar12.png';
import avatar13 from '../../../../assets/avatar13.png';
import avatar14 from '../../../../assets/avatar14.png';
import avatar15 from '../../../../assets/avatar15.png';
import avatar16 from '../../../../assets/avatar16.png';
import avatar17 from '../../../../assets/avatar17.png';
import avatar18 from '../../../../assets/avatar18.png';
import avatar19 from '../../../../assets/avatar19.png';

import ics from '../../../../assets/ics.png';

export default function BlockedList({navigation}) {
  const renderText = (name, description) => {
    return (
      <View
        style={{
          marginLeft: 20,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.name} children={name} />
        <Text style={styles.nameTwo} children={description} />
      </View>
    );
  };

  const renderChecked = (select) => {
    return (
      <View style={{alignSelf: 'center', paddingLeft: 70}}>
        {select ? (
          <></>
        ) : (
          <Image
            style={{
              width: 22,
              height: 22,
            }}
            source={ics}
          />
        )}
      </View>
    );
  };

  const renderAccountOption = (name, description, source) => {
    return (
      <TouchableOpacity
        style={{
          height: 63,
          flexDirection: 'row',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            marginBottom: 10,
            width: 300,
            paddingBottom: 7,
            padding: 10,
            paddingLeft: 20,
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
        {renderChecked()}
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        paddingTop: 70,
        height: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flexGrow: 1,
        }}>
        {renderAccountOption('Guy Watson', 'smallsnake312', avatar19)}
        {renderAccountOption('Jorge Russel', 'smallsnake312', avatar7)}
        {renderAccountOption('Diane Jones', 'smallsnake312', avatar8)}
        {renderAccountOption('Eleanor Mckinney', 'smallsnake312', avatar9)}
        {renderAccountOption('Greg Webb', 'smallsnake312', avatar10)}
        {renderAccountOption('Ted Lane', 'smallsnake312', avatar11)}
        {renderAccountOption('Dwight Mccoy', 'smallsnake312', avatar12)}
        {renderAccountOption('Mitchell Penna', 'smallsnake312', avatar13)}
        {renderAccountOption('Devon Simmons', 'smallsnake312', avatar14)}
        {renderAccountOption('Morris Nguyen', 'smallsnake312', avatar15)}
        {renderAccountOption('Darlene Flores', 'smallsnake312', avatar16)}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  name: {
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
});
