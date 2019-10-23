/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View, 
  Image, 
} from 'react-native';
var icon;

export default class SanPham extends Component{
  constructor(props){
    super(props);
    this.state={
    }

  }




  render() {
    return (
      <View style={styles.product}>
        <View style={styles.containerImg}>
          <View>
            <Image style={styles.img} source={{uri: this.props.img}} />
          </View>
        </View>   
        <View style={styles.containerContent}>
          <Text> Mã sản phẩm : {this.props.maSP} </Text>
          <Text> Tên sản phẩm : {this.props.tenSP} </Text>
          <Text> Mô tả : {this.props.des} </Text>
          <Text> Giá : {this.props.gia} </Text>
        </View>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  product: {
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'white',
    width: 400,
    height: 110,
    marginLeft: 5,
    marginBottom : 10,
    borderColor : 'black',
    borderWidth: 2,
  
  },

  productText: {
    marginBottom : 5,
  },

  img: {
  
    width: 50,
    height:60,
  },
  containerImg: {
    width: 100,
    height: 150,
    marginLeft: 10
  },

  containerContent: {
    marginTop:-150,
    marginLeft: 80
  },

  soLuong:{
    marginLeft: 20,
  },

  soLuongText: {
    fontSize: 10
  }, 
});
