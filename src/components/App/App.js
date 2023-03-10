import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Main from './../Main/Main';
import SelectedBeast from '../SelectedBeast/SelectedBeast';
import beastData from '../../data/data.json';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalBeast: null
    }

  }

  handleModalOpen = (index) => {
    this.setState(() => ({
      modalBeast: beastData[index]
    }));
  }

  handleModalClose = () => {
    this.setState(() => ({
      modalBeast: null
    }));
  }

  render() {
    const hornSelectOptions = [];
    beastData.forEach(beast => {
      if (!hornSelectOptions.includes(beast.horns)) {
        hornSelectOptions.push(beast.horns);
      }
    });
    hornSelectOptions.sort((a,b) => a - b);
    
    return (
      <>
        <Header />
        <Main
          beastData={beastData}
          hornSelectOptions={hornSelectOptions}
          handleModalOpen={this.handleModalOpen}
        />
        {this.state.modalBeast ? <SelectedBeast
          src={this.state.modalBeast.imageUrl}
          description={this.state.modalBeast.description}
          title={this.state.modalBeast.title}
          handleModalClose={this.handleModalClose}
        /> : null}
        <Footer />
      </>
    )
  }
}

export default App;