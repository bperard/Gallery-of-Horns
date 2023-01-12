import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: this.props.index
    }
  }

  render() {
    return (
      <Modal onHide={this.props.handleModalClose}>
        <Modal.Header closeButton>
          {this.props.title}
        </Modal.Header>
        <Modal.Footer>
          {this.props.description}
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;