import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import SanPham from './SanPham';
export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.1.10:80/Webservice/select-sanpham.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <SanPham maSP={item.masp} tenSP={item.tensp} gia={item.gia} des={item.des} img={item.img}/>}
         
        />
      </View>
    );
  }
}
