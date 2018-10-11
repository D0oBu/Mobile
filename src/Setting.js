import React, { Component } from 'react';
import { View, Text, Button,TextInput,Image } from 'react-native';

export class Settings extends Component {
  render() {
    return (
	<View> 
                <Text style ={{fontSize:38, marginLeft:150}}>Login</Text>


                <TextInput
                    style={{height: 40,marginTop:50}}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}
                />

                <TextInput
                    style={{height: 40}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}
                />

                <Button style ={{margin: 20,flexDirection: 'row',justifyContent: 'space-between'}}
		onPress={() => this.props.navigation.navigate('Home')} title="Home"
                title="Login"
                color="#841584"
                />
            </View>
    )
  }
};




export default Settings;