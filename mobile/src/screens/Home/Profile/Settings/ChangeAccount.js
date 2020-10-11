import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import avatar6 from '../../../../assets/avatar6.png';
import avatar7 from '../../../../assets/avatar7.png';
import avatar8 from '../../../../assets/avatar8.png';
import selected from '../../../../assets/selected.png';

export default function ChangeAccount({navigation}) {
  const [isSelected, setIsSelected] = useState(true);
  const [isSelectedTwo, setIsSelectedTwo] = useState(true);
  const [isSelectedThree, setIsSelectedThree] = useState(true);

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
      <View style={{alignSelf: 'center'}}>
        {select ? (
          <></>
        ) : (
          <Image
            style={{
              width: 22,
              height: 22,
            }}
            source={selected}
          />
        )}
      </View>
    );
  };
  const renderButton = () => {
    return (
      <TouchableOpacity
        style={{
          borderWidth: 0.5,
          borderRadius: 37.5,
          marginBottom: 20,
          borderColor: ' solid #253141',
          width: 337,
          height: 63,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Settings')}>
        <Text
          style={{
            paddingTop: 21,
            color: 'black',
            fontWeight: '500',
            fontSize: 14,
          }}>
          Add Account
        </Text>
      </TouchableOpacity>
    );
  };
  const renderAccountOption = (name, description, source) => {
    return (
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
    );
  };

  return (
    <View
      style={{
        paddingHorizontal: 30,
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
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 37.5,
            marginBottom: 20,
            borderColor: '1px solid rgba(0, 0, 0, 0.09)',
            width: 337,
            height: 63,
            flexDirection: 'row',
          }}
          onPress={() => setIsSelected(!isSelected)}>
          {renderAccountOption('Jorge Robertson', 'smallsnake312', avatar6)}
          {renderChecked(isSelected)}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 37.5,
            marginBottom: 20,
            borderColor: '1px solid rgba(0, 0, 0, 0.09)',
            width: 337,
            height: 63,
            flexDirection: 'row',
          }}
          onPress={() => setIsSelectedTwo(!isSelectedTwo)}>
          {renderAccountOption('Esther Richards', '@EstherRichards', avatar7)}
          {renderChecked(isSelectedTwo)}
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 37.5,
            marginBottom: 20,
            borderColor: '1px solid rgba(0, 0, 0, 0.09)',
            width: 337,
            height: 63,
            flexDirection: 'row',
          }}
          onPress={() => setIsSelectedThree(!isSelectedThree)}>
          {renderAccountOption('Angel Flores', '@AngelFlores.23', avatar8)}
          {renderChecked(isSelectedThree)}
        </TouchableOpacity>
        {renderButton()}
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
