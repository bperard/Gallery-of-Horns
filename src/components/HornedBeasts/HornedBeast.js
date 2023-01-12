import React from 'react';
import Alert from 'react-bootstrap/Alert';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: 0,
      alertTimer: 0,
      alertRender: false,
      index: this.props.index
    }
  }

  handleAlertRender = () => {
    this.setState(prevState => ({
      alertTimer: prevState.alertTimer - 1
    }));

    if (this.state.alertTimer === 1) {
      this.setState(prevState => ({
        alertRender: false
      }));
    }
  }

  handleAddFavorite = () => {
    this.setState((prevState) => ({
      favorites: prevState.favorites + 1,
      alertTimer: prevState.alertTimer + 1,
      alertRender: true
    }));

    setTimeout(this.handleAlertRender, 1500);
  }

  render() {
    return(
      <div className="card" >
        <h2 onClick={this.props.handleModalOpen}>
          {this.props.title}
        </h2>
        <img 
        src={this.props.imageUrl}
        alt={this.props.title}
        title={this.props.title}
        onClick={this.handleAddFavorite}
        />
        <p>
          {this.props.description}
        </p>
        <p>
          {this.state.favorites} &#x2665;
        </p>
        {this.state.alertRender ? <Alert variant="danger">Favorite Added!</Alert> : null}
      </div>
    )
  }
}

export default HornedBeast;