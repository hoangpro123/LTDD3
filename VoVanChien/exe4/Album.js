import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  TouchableHighlight
} from 'react-native';

export default class Album extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 0, title: "Product 1", count: 8, image: "https://lorempixel.com/400/200/nature/6/" },
        { id: 1, title: "Product 2", count: 8, image: "https://lorempixel.com/400/200/nature/5/" },
        { id: 2, title: "Product 3", count: 8, image: "https://lorempixel.com/400/200/nature/4/" },
        { id: 3, title: "Product 4", count: 8, image: "https://lorempixel.com/400/200/nature/6/" },
        { id: 4, title: "Product 5", count: 8, image: "https://lorempixel.com/400/200/sports/1/" },
        { id: 5, title: "Product 6", count: 8, image: "https://lorempixel.com/400/200/nature/8/" },
        { id: 6, title: "Product 7", count: 8, image: "https://lorempixel.com/400/200/nature/1/" },
        { id: 7, title: "Product 8", count: 3, image: "https://lorempixel.com/400/200/nature/3/" },
        { id: 8, title: "Product 9", count: 8, image: "https://lorempixel.com/400/200/nature/4/" },
        { id: 9, title: "Product 10", count: 8, image: "https://lorempixel.com/400/200/nature/5/" },
      ]
    };
  }

  next() {
    fetch('https://jsonplaceholder.typicode.com/photos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson})
        if (responseJson == "true") {
          alert("Successfully");
        } else {
          alert("Failed");
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  componentDidMount() {
   this.next();
  }

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart')
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator} />
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <View style={styles.imageContainer}>
                  <TouchableHighlight onPress={() => this.props.navigation.navigate('Galleries')}>
                    <Image style={styles.cardImage} source={{ uri: item.url }} />
                  </TouchableHighlight>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.count}>({item.albumID})</Text>
                </View>
              </View>
            )
          }} />
      </View>
    );
  }
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
  listContainer: {
    alignItems: 'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    marginVertical: 8,
    backgroundColor: "white",
    flexBasis: '45%',
    marginHorizontal: 10,
  },
  cardContent: {
    paddingVertical: 17,
    justifyContent: 'space-between',
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
    color: "#778899"
  },
  count: {
    fontSize: 18,
    flex: 1,
    color: "#B0C4DE"
  },
});  