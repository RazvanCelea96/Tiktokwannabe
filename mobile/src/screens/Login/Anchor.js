import React, {PureComponent} from 'react';
import {Text, TouchableNativeFeedback} from 'react-native';

export default class Anchor extends PureComponent {
  render() {
    const {title, onPress, style} = this.props;
    return (
      <TouchableNativeFeedback
        onPress={onPress}
        style={style}
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
        <Text children={title} />
      </TouchableNativeFeedback>
    );
  }
}
