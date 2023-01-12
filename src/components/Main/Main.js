import React from 'react';
import HornedBeast from './../HornedBeasts/HornedBeast';
import './Main.css';

class Main extends React.Component {
  render() {

    const handleModalOpen = this.props.handleModalOpen;

    return (
      <div className="beastContainer">
        {this.props.beastData.map((beast, index) => (
          <HornedBeast
            title={beast.title}
            imageUrl={beast.image_url}
            description={beast.description}
            index={index}
            handleModalOpen={handleModalOpen}
          />
        ))}
      </div>
    )
  }
}

export default Main;