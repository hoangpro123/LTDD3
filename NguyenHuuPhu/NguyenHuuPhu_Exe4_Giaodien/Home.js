import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  ScrollView,
  AppRegistry,
  Navigate,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Exe4 from './Exe4';
import Insert from './InsertSanPham'
const ComponentLeft = () => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-start'}} >
       <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}}>
        <Image 
         // source={require('./img/ic_menu_bar.png')}
          style={{ resizeMode: 'contain', width: 45, height: 40, marginLeft: 20, alignSelf: 'center' }}
        />
        {/* <Text style={{ color: 'white', }}>Back Home</Text> */}
      </TouchableOpacity>
    </View>
  );
};
 
const ComponentCenter = () => {
  return(
    <View style={{flet: 1, flexDirection: 'row', padding: 20}}>
        <TextInput
          placeholder="Tìm kiếm..."
          style={{width: 220, height: 38, backgroundColor: 'white', borderRadius: 30}}
        />
        <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}}>
        <Image 
          source={require('./img/ic_cart1.png')}
          style={{ resizeMode: 'contain', width: 33, height: 40, marginLeft: 20, alignSelf: 'center' }}
        />
        {/* <Text style={{ color: 'white', }}>Back Home</Text> */}
      </TouchableOpacity>
      
    </View>
    );
};
 
const ComponentRight = () => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-end', }}>
      <TouchableOpacity>
        
      <Image
         source={require('./img/ic_user.png')}
        style={{resizeMode: 'contain', width: 70, height: 30, alignSelf: 'center' }}
      />
      </TouchableOpacity>
    </View>
  );
};

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1,  name: "Trà sữa trân châu đường đen",   position:"50.000 VND",               image:"https://www.habibi.com.vn/wp-content/uploads/2015/09/cafe-nau-den.jpg", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},
        {id:2,  name: "Trà sữa trân châu đường đen",   position:"50.000 VND",               image:"https://www.habibi.com.vn/wp-content/uploads/2015/09/cafe-nau-den.jpg", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},
        {id:3,  name: "Trà sữa trân châu đường đen",  position:"50.000 VND", image:"https://www.habibi.com.vn/wp-content/uploads/2015/09/cafe-nau-den.jpg", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
        {id:4,  name: "Trà sữa trân châu đường đen", position:"50.000 VND",     image:"https://www.habibi.com.vn/wp-content/uploads/2015/09/cafe-nau-den.jpg", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
        {id:5,  name: "Trà sữa trân châu đường đen", position:"50.000 VND",   image:"https://www.habibi.com.vn/wp-content/uploads/2015/09/cafe-nau-den.jpg", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
        {id:6,  name: "Trà sữa trân châu đường đen",   position:"50.000 VND", image:"https://www.habibi.com.vn/wp-content/uploads/2015/09/cafe-nau-den.jpg", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
        {id:7,  name: "Trà sữa trân châu đường đen",   position:"50.000 VND",           image:"https://www.habibi.com.vn/wp-content/uploads/2015/09/cafe-nau-den.jpg", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
        {id:8,  name: "Trà sữa trân châu đường đen",   position:"50.000 VND",           image:"https://www.habibi.com.vn/wp-content/uploads/2015/09/cafe-nau-den.jpg", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
        {id:9,  name: "Trà sữa trân châu đường đen",   position:"50.000 VND",           image:"https://www.habibi.com.vn/wp-content/uploads/2015/09/cafe-nau-den.jpg", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
        {id:10, name: "Trà sữa trân châu đường đen",   position:"50.000 VND",           image:"https://www.habibi.com.vn/wp-content/uploads/2015/09/cafe-nau-den.jpg", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
      ]
    };
  }
//set su kien khi nhan vao
  clickEventListener = (item) => {
    this.setState({userSelected: item}, () =>{
      this.setModalVisible(true);
    });
  }

  

  componentDidMount(){
    return fetch('http://10.0.2.2:80/Webservice/select-sanpham.php')
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


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        
          {/* Danh sach thong tin nguoi dung */}
        <FlatList 
          style={styles.userList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.dataSource}
          renderItem={({item}) => {
          return (
            // set su kien khi nhan vao
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.image} source={{uri: item.img}}/>
              <View style={styles.cardContent}>
                
              <Text style={styles.name}>{item.tensp}</Text>
                <Text style={styles.position}>Mô tả: {item.des}</Text>
                <Text style={styles.position}>Giá: {item.gia}</Text>

                {/* Button theo doi */}
                <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Xem</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>

        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this.setModalVisible(false)}
          visible={this.state.modalVisible}>

          <View style={styles.popupOverlay}>
            <View style={styles.popup}>

              <View style={styles.popupContent}>
                {/* Hien thi len thong tin cua tung nguoi theo dang scrollview */}
                <ScrollView contentContainerStyle={styles.modalInfo}>
                    <Image style={styles.image} source={{uri: this.state.userSelected.image}}/>
                    <Text style={styles.name}>{this.state.userSelected.name}</Text>
                    <Text style={styles.position}>{this.state.userSelected.position}</Text>
                    <Text style={styles.about}>{this.state.userSelected.about}</Text>
                </ScrollView>
              </View>

              {/* Button close*/}
              <View style={styles.popupButtons}>
                <TouchableOpacity onPress={() => {this.setModalVisible(false) }} style={styles.btnClose}>
                  <Text style={styles.txtClose}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.body}>
          <View style={styles.item}>
            <TouchableOpacity onPress={() => navigate('Users')}>
                <View style={styles.iconContent}>
                  <Image style={styles.icon} 
                   source={require('./img/ic_home.png')}/>
                </View>
                <View >
                  <Text style={styles.info}>Home</Text>
                </View>
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => navigate('Insert')}>
                <View style={styles.iconContent}>
                  <Image style={styles.icon} 
                  source={require('./img/ic_add.png')}/>
                </View>
                <View >
                  <Text style={styles.info}>ADD</Text>
                </View>
            </TouchableOpacity> 

            <TouchableOpacity  onPress={() => navigate('Delete')}>

                <View style={styles.iconContent}>
                  <Image style={styles.icon} 
                  source={require('./img/ic_delete.png')}/>
                </View>
                <View >
                  <Text style={styles.info}>Delete</Text>
                </View>
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => navigate('Update')}>
                <View style={styles.iconContent}>
                  <Image style={styles.icon} 
                  source={require('./img/ic_update.png')}/>
                </View>
                <View >
                  <Text style={styles.info}>Update</Text>
                </View>
            </TouchableOpacity> 
          </View>
        </View>

        
      </View>
    );
  }
}






//set style cho tung doi tuong
const styles = StyleSheet.create({

  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  info:{
    fontSize:14,
    marginLeft: 15,
    marginTop:35,
    paddingLeft: 10,
    paddingRight:10,
    color: "#FFFFFF",
  },
  body:{
    backgroundColor: "#778899",
    height:60,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },

  icon:{
    padding: 5,
    marginRight: 19,
    paddingLeft: 9,
    paddingRight:10,
    width:30,
    height:30,
    marginTop:10,
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
   
  },
  title:{
    marginTop:13,
    marginLeft:110,
    height:35,
    width:200,
    textAlign: "center",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
    color: "black",
    fontSize: 16,
    backgroundColor: "#CC33FF",
  },
  container:{
    flex:1,
    backgroundColor:"#eeeeee"
  },
  header:{
    backgroundColor: "#00CED1",
    height:200
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
    flex:1,
  },
  detailContent:{
    top:80,
    height:500,
    width:Dimensions.get('screen').width - 90,
    marginHorizontal:30,
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  userList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    //borderRadius:45,
  },



  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal:20,
    backgroundColor:"white",
    flexBasis: '46%',
    padding: 10,
    flexDirection:'row'
  },

  name:{
    fontSize:18,
    flex:1,
    //alignSelf:'left',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
   // alignSelf:'left',
    color:"#696969"
  },
  about:{
    marginHorizontal:10
  },

  followButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
 /************ modals ************/
  popup: {
    backgroundColor: 'white',
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1,
    marginTop: 30
  },
  popupContent: {
    //alignItems: 'center',
    margin: 5,
    height:250,
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent:'center'
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  btnClose:{
    height:20,
    backgroundColor:'#20b2aa',
    padding:20
  },
  modalInfo:{
    alignItems:'center',
    justifyContent:'center',
  }
}); 