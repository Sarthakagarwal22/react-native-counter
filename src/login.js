import React from 'react';
import {Button,Alert,Text, StyleSheet, View} from 'react-native'

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			counter:0
		}
	}
	onPressButton(){
		var counter = this.state.counter+1; 
		this.setState({counter:counter}); 
		Alert.alert(`${counter}`);
	}
	render() {
		return(
			<View> 
			{this.state.counter !==0 && <Text style={styles.text}> {this.state.counter} </Text>}
				<Button title="Click Me" onPress={()=>{this.onPressButton()}} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	text: {
    fontSize: 30,
	}
});

export default Login;