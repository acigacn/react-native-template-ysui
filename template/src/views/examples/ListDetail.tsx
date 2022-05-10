import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight, Alert, StatusBar} from 'react-native';
import BasePage from '@views/base/BasePage';

export default class ListDetailDemo extends BasePage {
  moreDesc = '我曾经跨过山和大海，也穿过人山人海，我曾经拥有着的一切，转眼都飘散如烟，我曾经失落失望失掉所有方向，直到看见平凡才是唯一的答案';

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('ListDetail componentDidMount ++++++++++++++++');
    const params = this.props.route.params as any;
    this.props.navigation.setOptions({
      title: params.title,
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }

  componentWillUnmount() {
    console.log('ListDetail componentWillUnmount ---------------');
  }

  onPress = () => {
    Alert.alert('温馨提示', '这么操作你将回到首页啦', [
      {
        text: '取消',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: '确定', onPress: () => this.props.navigation.navigate('HomePage')},
    ]);
  };

  renderContent() {
    const {url, title, description} = this.props.route.params as any;
    return (
      <View style={styles.itemContainerStyle}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" animated={true} />
        <Image style={styles.imageStyle} source={{uri: url}} />
        <View style={styles.textContainerStyle}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.moreDesc}>{this.moreDesc}</Text>
        </View>
        <TouchableHighlight style={styles.btn} onPress={this.onPress}>
          <Text style={styles.btnText}>去首页</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
  },
  textContainerStyle: {
    alignItems: 'flex-start',
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 15,
  },
  description: {
    fontSize: 18,
    color: 'green',
    marginTop: 20,
    lineHeight: 26,
  },
  moreDesc: {
    fontSize: 16,
    color: 'blue',
    marginTop: 20,
    lineHeight: 26,
  },
  btn: {
    width: 200,
    height: 60,
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
  },
});
