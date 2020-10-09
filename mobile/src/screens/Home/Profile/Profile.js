import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import photoCarousel1 from '../../../assets/photoCarousel1.jpg';
import photoCarousel2 from '../../../assets/photoCarousel2.jpg';
import avatar1 from '../../../assets/avatar1.png';
import avatar2 from '../../../assets/avatar2.png';
import avatar3 from '../../../assets/avatar3.png';
import avatar4 from '../../../assets/avatar4.png';
import avatar5 from '../../../assets/avatar5.png';

export default function Profile({navigation}) {
  renderTop = () => {
    return (
      <View
        style={{
          alignItems: 'flex-start',
          flexDirection: 'row',
        }}>
        <Image
          style={{width: 73, height: 73, borderRadius: 50}}
          source={avatar5}
        />
        <View
          style={{
            height: 73,
            marginLeft: 20,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.name}>Beth Robertson</Text>
          <Text style={styles.nameTwo}>@BethRobertson</Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Settings')}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontWeight: '500',
                letterSpacing: 0.5,
                fontSize: 11,
                lineHeight: 22,
                fontFamily: 'Avenir Next Cyr',
              }}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderNumber = (count, title) => {
    return (
      <View style={styles.detailContent}>
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  renderNumbers = () => {
    return (
      <View
        style={{
          alignItems: 'flex-start',
          flexDirection: 'row',
          paddingVertical: 20,
        }}>
        {renderNumber('300', 'Posts')}
        {renderNumber('600', 'Following')}
        {renderNumber('144k', 'Followers')}
      </View>
    );
  };

  renderImage = (name) => {
    return (
      <Image
        source={name}
        style={{
          width: 200,
          height: '100%',
          marginRight: 20,
          borderRadius: 15,
        }}
      />
    );
  };

  renderPosts = () => {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled>
        {renderImage(photoCarousel1)}
        {renderImage(photoCarousel2)}
        {renderImage(photoCarousel1)}
        {renderImage(photoCarousel2)}
      </ScrollView>
    );
  };

  renderComment = (avatar) => {
    return (
      <View
        style={{
          alignItems: 'flex-start',
          flexDirection: 'row',
        }}>
        <Image
          style={{width: 50, height: 50, borderRadius: 25}}
          source={avatar}
        />
        <View
          style={{
            fontFamily: 'Avenir Next Cyr',
            height: 40,
            marginLeft: 20,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.name}>Beth Robertson</Text>
          <Text style={styles.nameTwo}>
            What a magniful story! Thanks for sharring
          </Text>
        </View>
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
      <View style={{paddingLeft: 10}}>
        {renderTop()}
        {renderNumbers()}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{height: 298}}>{renderPosts()}</View>
        <View
          style={{
            flexGrow: 1,
          }}>
          <Text
            style={{
              fontSize: 13,
              lineHeight: 18,
              color: '#040C1B',
              fontWeight: '600',
              opacity: 0.5,
              padding: 20,
            }}>
            HIGHLIGHTS
          </Text>

          {renderComment(avatar1)}
          {renderComment(avatar2)}
          {renderComment(avatar3)}
          {renderComment(avatar4)}
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
