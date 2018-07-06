import React from 'react';
import { Text, View, Image, FlatList, StyleSheet,ActivityIndicator} from 'react-native';
import axios from 'axios';



export default class Allnews extends React.Component {
  constructor()
  {
    super()
    this.state = {data : [] };
  }
  componentDidMount()
  {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b6d6caf323f74e7789ab7821be56e0d7';
    axios
    .get(url)
    .then(res => res)
    .then(data => {
      console.log('the message is ', data.data.articles)
      this.setState({ data: data.data.articles });
    })
    .catch((err) => console.log(err));
  }
  show(){
    return(
      <View style={{marginTop:100}}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
         <FlatList 
         data = {this.state.data}
         rendrFooter = {() => this.show()}
         renderItem = {({item}) => {
           return(
             <View style={styles.box}>
             <Image
             source = {{uri: item.urlToImage}}
             style={{height: 170, width: "100%"}}
              />
              <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{fontSize:15, fontWeight:'normal',color:'black', marginTop:10}}>{item.source.name}</Text>
                <Text style={{fontSize:15, fontWeight:'normal',color:'black', marginTop:10}} >{item.publishedAt} /></Text>
              </View>
              <Text style={{fontSize:18, fontWeight:'bold',color:'black'}} >{item.title}</Text>
              <Text style={{fontSize:15, fontWeight:'normal',color:'black', marginBottom:10}} >{item.description}</Text>
             </View>
           )
         }}
         keyExtractor= {item=>item.publishedAt}
         />
      </View>
    );
  }
}

  
  
   const styles = StyleSheet.create({
    box: {
      flex: 1,
      backgroundColor: "#ffffff",
      elevation: 3,
      borderWidth: 1,
      borderColor: "#ffffff",
      borderRadius: 5,
      marginBottom: 5,
      marginHorizontal: 5,
      padding: 2

    }
   })

