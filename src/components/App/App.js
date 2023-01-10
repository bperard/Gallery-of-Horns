import React from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Main from './../Main/Main';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;