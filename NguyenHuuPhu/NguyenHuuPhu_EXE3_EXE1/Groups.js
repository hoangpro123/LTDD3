import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

export default class Groups extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {
          id:3, 
          image: "http://seoiclick.com//content/uploads/1420854296_os_android.png", 
          name:"Group Android", 
          countMembers:51,  
          members:[
            "https://bootdey.com/img/Content/avatar/avatar6.png", 
            "https://bootdey.com/img/Content/avatar/avatar1.png", 
            "https://bootdey.com/img/Content/avatar/avatar2.png",
            "https://bootdey.com/img/Content/avatar/avatar7.png",
            "https://bootdey.com/img/Content/avatar/avatar3.png",
            "https://bootdey.com/img/Content/avatar/avatar4.png"
          ]
        },
        {
          id:2, 
          image: "data:image/png;base64,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", 
          name:"Group IOS", 
          countMembers:10,  
          members:[
            "https://bootdey.com/img/Content/avatar/avatar6.png", 
            "https://bootdey.com/img/Content/avatar/avatar1.png", 
          ]
        },
        {
          id:4, 
          image: "https://cdn2.iconfinder.com/data/icons/crystalproject/crystal_project_256x256/apps/php.png", 
          name:"Group Web", 
          countMembers:58,  
          members:[
            "https://bootdey.com/img/Content/avatar/avatar6.png", 
            "https://bootdey.com/img/Content/avatar/avatar1.png", 
            "https://bootdey.com/img/Content/avatar/avatar2.png"
          ]
        },
        {
          id:5, 
          image: "http://dccoder.com/wp-content/uploads/2018/07/c.png", 
          name:"Group C#", 
          countMembers:63,  
          members:[
            "https://bootdey.com/img/Content/avatar/avatar6.png", 
            "https://bootdey.com/img/Content/avatar/avatar1.png", 
            "https://bootdey.com/img/Content/avatar/avatar2.png",
            "https://bootdey.com/img/Content/avatar/avatar7.png",
            "https://bootdey.com/img/Content/avatar/avatar3.png",
          ]
        },
        {
          id:1, 
          image: "http://www.bizzcode.com/img/react.png", 
          name:"Group React Native", 
          countMembers:3,   
          members:[
            "https://bootdey.com/img/Content/avatar/avatar6.png", 
            "https://bootdey.com/img/Content/avatar/avatar1.png", 
            "https://bootdey.com/img/Content/avatar/avatar2.png"
          ]
        },
        {
          id:6, 
          image: "data:image/png;base64,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", 
          name:"Group C++", 
          countMembers:12,  
          members:[
            "https://bootdey.com/img/Content/avatar/avatar6.png", 
            "https://bootdey.com/img/Content/avatar/avatar1.png", 
            "https://bootdey.com/img/Content/avatar/avatar2.png"
          ]
        },
        {
          id:7, 
          image: "https://miro.medium.com/fit/c/256/256/1*FFHsUMGrt-Ece6KP6TRhHA.png", 
          name:"Group Python", 
          countMembers:234, 
          members:[
            "https://bootdey.com/img/Content/avatar/avatar6.png", 
            "https://bootdey.com/img/Content/avatar/avatar1.png", 
            "https://bootdey.com/img/Content/avatar/avatar2.png"
          ]
        },
      ]
    }
  }

  renderGroupMembers = (group) => {
    if(group.members) {
      return (
        <View style={styles.groupMembersContent}>
          {group.members.map((prop, key) => {
            return (
              <Image key={key} style={styles.memberImage}  source={{uri:prop}}/>
            );
          })}
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Group = item.item;
          let mainContentStyle;
          if(Group.attachment) {
            mainContentStyle = styles.mainContent;
          }
          return(
            <View style={styles.container}>
              <Image source={{uri:Group.image}} style={styles.avatar}/>
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.groupName}>{Group.name}</Text>
                  </View>
                  <Text style={styles.countMembers}>
                    {Group.countMembers} members
                  </Text>
                  <Text style={styles.timeAgo}>
                    Updated 2 months ago
                  </Text>
                  {this.renderGroupMembers(Group)}
                </View>
              </View>
            </View>
          );
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF"
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: 'flex-start'
  },
  avatar: {
    width:55,
    height:55,
    borderRadius:25,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  memberImage: {
    height: 30,
    width: 30,
    marginRight:4,
    borderRadius:10,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  countMembers:{
    color:"#20B2AA"
  },
  timeAgo:{
    fontSize:12,
    color:"#696969"
  },
  groupName:{
    fontSize:23,
    color:"#1E90FF"
  },
  groupMembersContent:{
    flexDirection:'row',
    marginTop:10
  }
});   