import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import photoCarousel1 from '../../../assets/photoCarousel1.jpg';
import photoCarousel2 from '../../../assets/photoCarousel2.jpg';

export default class Profile extends Component {
  renderTop = () => {
    return (
      <View
        style={{
          alignItems: 'flex-start',
          flexDirection: 'row',
        }}>
        <Image
          style={{width: 73, height: 73, borderRadius: 50}}
          source={{
            uri: 'https://bootdey.com/img/Content/avatar/avatar2.png',
          }}
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

          <TouchableOpacity style={styles.buttonContainer}>
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
        {this.renderNumber('300', 'Posts')}
        {this.renderNumber('600', 'Following')}
        {this.renderNumber('144k', 'Followers')}
      </View>
    );
  };

  renderPosts = () => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: 'blue',
          height: 298,
          flexDirection: 'row',
          paddingVertical: 5,
        }}>
        <Image
          source={photoCarousel1}
          style={{
            width: 200,
            height: '100%',
            marginRight: 20,
            borderRadius: 15,
          }}
        />
        <Image
          source={photoCarousel2}
          style={{
            width: 200,
            height: '100%',
            marginRight: 20,
            borderRadius: 15,
          }}
        />
      </View>
    );
  };

  render() {
    return (
      <View
        style={{
          padding: 10,
          paddingTop: 30,
          borderWidth: 1,
          borderColor: 'green',
          height: '100%',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
        <View style={{paddingLeft: 10, borderColor: 'red', borderWidth: 1}}>
          {this.renderTop()}
          {this.renderNumbers()}
        </View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled>
            {this.renderPosts()}
          </ScrollView>
        </View>
        <View style={{borderWidth: 1, borderColor: 'red', flexGrow: 1}}></View>
      </View>
    );
  }
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
