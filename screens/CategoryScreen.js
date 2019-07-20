import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Alert } from 'react-native'
import CustomButton from '../components/Buttons/CustomButton'
import ButtonTag from '../components/ButtonTags/ButtonTag'
import Ratings from '../components/Ratings/Ratings'
import CustomIcon from '../components/CustomIcon'
import SearchBar from '../components/SearchBar'
import Card from '../components/cards/cards'
import Slider from '../components/Slider'
import Layout from '../constants/Layout'
import Modal from '../components/Modal'

export default class CategoryScreen extends Component  {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'FOOD',
      headerRight: <CustomIcon onPress={navigation.getParam('showModal')} active={true} color='#000000' name='funnel' size={26} />,
      headerTitleStyle: {
        fontFamily: 'Poppins-Bold',
        fontWeight: "100",
        fontSize: 25,
        textAlign:"center", //to center title
        flex:1, //to center title
      },
      headerStyle: {
        backgroundColor: '#fff',
        elevation:0, //To remove the border-bottom in the header
        marginRight: 22,
        marginTop: 4,
      }
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ showModal: this._showModal });
  }

  state = {
    showModal: false,
    tagButonsData: [
      {
        label: 'VELACHERY',
        id: 0
      },
      {
        label: 'VADAPALANI',
        id: 1
      },
      {
        label: 'GUNDY',
        id: 2,
      },
      {
        label: 'ADYAR',
        id: 3,
      },
      {
        label: 'T.NAGAR',
        id: 4,
      },
      {
        label: 'BESANT NAGAR',
        id: 5,
      },
    ],
    oneStarSelected: false,
    twoStarSelected: false,
    threeStarSelected: false,
    fourStarSelected: false,
    fiveStarSelected: false,
    searchText: '',
  };

  _showModal = () => this.setState(prevState =>({showModal: !prevState.showModal}))
  handleSearchInput = (text) => this.setState({searchText: text})
  handleTagButton = (id) => {}
  handleStarButton = (starsNumber) => {
    switch(starsNumber){
      case 1: { return this.setState(prevState =>( {oneStarSelected: !prevState.oneStarSelected, twoStarSelected: false, threeStarSelected: false, fourStarSelected: false, fiveStarSelected: false})) }
      case 2: { return this.setState(prevState =>( {twoStarSelected: !prevState.twoStarSelected, oneStarSelected: false, threeStarSelected: false, fourStarSelected: false, fiveStarSelected: false})) }
      case 3: { return this.setState(prevState =>( {threeStarSelected: !prevState.threeStarSelected, oneStarSelected: false, twoStarSelected: false, fourStarSelected: false, fiveStarSelected: false})) }
      case 4: { return this.setState(prevState =>( {fourStarSelected: !prevState.fourStarSelected, oneStarSelected: false, twoStarSelected: false, threeStarSelected: false, fiveStarSelected: false})) }
      case 5: { return this.setState(prevState =>( {fiveStarSelected: !prevState.fiveStarSelected, oneStarSelected: false, twoStarSelected: false, threeStarSelected: false, fourStarSelected: false})) }
    }
  }
  handleCancelButton = () => Alert.alert('handleCancelButton')
  handleApplyButton = () => Alert.alert('handleApplyButton')

  render() {
    return (
      <ScrollView style={styles.container}>
        <SearchBar text={this.state.searchText} handleSearchInput={this.handleSearchInput}/>
        <View style={styles.cardsContainer}>
          <Card  />
          <Card  />
          <Card  />
        </View>

        <Modal isVisible={this.state.showModal}
               width="100%"
               height={360}
               onBackButtonPress={this._showModal}
               onBackdropPress={this._showModal}
               style={{ height:513, width:'100%' }}
               coverScreen={true}
        >
          <Text style={styles.modalTitle}>Find your nearest shop!</Text>
          <View style={styles.tagButtonsContainer}>
            {this.state.tagButonsData.map(tagButton => <ButtonTag key={tagButton.id} text={tagButton.label} id={tagButton.id} handleButtonClick={this.handleTagButton} />)}
          </View>
          <Slider title="Offer" />
          <View style={styles.ratingButtonsContainer}>
            <Text style={styles.ratingTitle}>Ratings</Text>
            <View style={styles.ratingButtonSubContainer}>
              <Ratings numStars={1} onPress={()=>this.handleStarButton(1)} status={this.state.oneStarSelected? 'selected': null} />
              <Ratings numStars={2} onPress={()=>this.handleStarButton(2)} status={this.state.twoStarSelected? 'selected': null} />
              <Ratings numStars={3} onPress={()=>this.handleStarButton(3)} status={this.state.threeStarSelected? 'selected': null} />
              <Ratings numStars={4} onPress={()=>this.handleStarButton(4)} status={this.state.fourStarSelected? 'selected': null} />
              <Ratings numStars={5} onPress={()=>this.handleStarButton(5)} status={this.state.fiveStarSelected? 'selected': null} />
            </View>
          </View>
          <View style={styles.applyButtonsContainer}>
            <View  style={{flex:1, marginRight: 14}} ><CustomButton onPress={this.handleCancelButton} caption='X' theme='light'/></View>
            <View  style={{flex:4}} ><CustomButton onPress={this.handleApplyButton} caption='APPLY' theme='dark'/></View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: 15,
  backgroundColor: '#fff',
  margin:  Layout.screenMargin,
},
cardsContainer: {
  marginTop: 70,
},
modalTitle: {
  fontSize: 24,
  fontFamily: 'Poppins-Bold',
},
tagButtonsContainer: {
  flexDirection:'row',
  justifyContent:'flex-start',
  flexWrap: 'wrap',
},
ratingButtonsContainer: {
  flexDirection: 'column',
  flex: 1,
},
ratingButtonSubContainer: {
  flexDirection:'row',
  justifyContent:'flex-start',
  flexWrap: 'wrap',
},
ratingTitle: {
  fontSize: 24,
  fontFamily: 'Poppins-Bold',
  alignItems: 'flex-start',
},
applyButtonsContainer: {
  flex: 1,
  flexDirection: 'row'
}
});
