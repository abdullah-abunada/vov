import React, { Component } from 'react';
import { View, Platform, Text, Image,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';



export default class IconAndLabel extends Component {
    render () {
        return (  
            <View style={styles.container}>
                <Ionicons
                    name={this.props.name}
                    size={26}
                    color={this.props.color}
                    name={
                        Platform.OS === 'ios'
                            ? `ios-${this.props.name}`
                            : `md-${this.props.name}`
                    }
                />
                 <Text  style={{marginRight:15, alignSelf:"center", fontSize:12,
                marginLeft:10}}>{this.props.text}</Text>
            </View>
            
               
              
        );
    }
}
const styles = StyleSheet.create({
 
  container: {
      flexDirection : 'row',
      justifyContent: 'space-between',
      alignItems:'baseline',
      alignItems:"center",
      alignSelf:'center'

  }


})
