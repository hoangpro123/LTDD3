import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class Update extends Component {

  constructor() {
    super();
    this.state = {
      masp   : '',
      tensp: '',
      gia: '',
      des: '',
      img: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
  Update_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://10.0.2.2:80/webservice/update-sanpham.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  masp : this.state.masp,
 
                  tensp : this.state.tensp,
 
                  gia : this.state.gia,

                  des : this.state.des,

                  img : this.state.img
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
 
                this.setState({ ActivityIndicator_Loading : false });
 
            }).catch((error) =>
            {
                console.error(error);
 
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Mã SP"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(masp) => this.setState({masp})}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Tên Sp"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(tensp) => this.setState({tensp})}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Giá"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(gia) => this.setState({gia})}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="mô tả"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(des) => this.setState({des})}/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="hình"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(img) => this.setState({img})}/>
        </View>
        

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.Update_Data_Into_MySQL()}>
          <Text style={styles.loginText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
 