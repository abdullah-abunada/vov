import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

class ButtonTag extends React.Component {
  state = {
    isCheck: false
  }

  handleButton = id => {
    this.props.handleButtonClick(id)
    this.setState({ isCheck: !this.state.isCheck })
  }

  render() {
    const { text, id } = this.props;
    const { isCheck } = this.state;
    return (
        <TouchableOpacity
        onPress={() => this.handleButton(id)}
        style={[styles.container, isCheck ? styles.check : styles.normal]}>
        <Text style={[styles.text, isCheck ? styles.checkText : null]}>{text}</Text>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 35,
    margin: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 2,
  },
  check: {
    backgroundColor: '#8A04B2',
    borderColor: '#8A04B2',
    color: '#fff'
  },
  normal: {
    backgroundColor: '#fff',
    borderColor: '#E9E9E9',
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  checkText: {
    color: '#fff'
  },
});


export default ButtonTag;
