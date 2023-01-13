import React from 'react';
import Form from 'react-bootstrap/Form';
import HornedBeast from './../HornedBeasts/HornedBeast';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBeasts: this.props.beastData
    }
  }

  handleFilterChange = (event) => {
    if (event.target.value === 'all') {
      this.setState({
        selectedBeasts: this.props.beastData
      })
    } else {
      this.setState({
        selectedBeasts: this.props.beastData.filter(beast => beast.horns === parseInt(event.target.value))
      })
    }
  }

  render() {

    const handleModalOpen = this.props.handleModalOpen;

    return (
      <>
        <Form>
          <Form.Group>
            <Form.Select
              name="hornOption"
              onChange={this.handleFilterChange}
            >
              <option>Open Horn Select Menu</option>
              <option value="all">All</option>
              {this.props.hornSelectOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>

        <div className="beastContainer">
          {this.state.selectedBeasts.map((beast, index) => (
            <HornedBeast
              key={beast._id}
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
              index={index}
              handleModalOpen={handleModalOpen}
            />
          ))}
        </div>
      </>

    )
  }
}

export default Main;