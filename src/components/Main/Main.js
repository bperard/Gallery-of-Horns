import React from 'react';
import HornedBeast from './../HornedBeasts/HornedBeast';
import beastData from '../../data/data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div className="beastContainer">
        {beastData.map((beast) => (
          <HornedBeast
            title={beast.title}
            imageUrl={beast.image_url}
            description={beast.description}
          />
        ))}
      </div>
    )
  }
}

export default Main;