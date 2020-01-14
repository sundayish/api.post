import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class dbpost extends React.Component {

  constructor(props){
    super(props);
    this.state = { isLoading: true}
  }

  componentDidMount(){
    fetch('http://192.168.2.60:4563/register', {
      method: 'POST',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'icloud@icloud.com',
        firstname: 'React',
        lastname: 'Post',
        password: 'test'
      }),
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
  }
}