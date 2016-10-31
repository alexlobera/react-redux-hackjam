import React, { Component } from 'react';
import PhotoList from "../components/PhotoList";
import * as actions from '../actions/Photos';
import { connect } from 'react-redux';
import fetchPhotos from '../api/Photos'

class PhotoListContainer extends Component {
  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    fetchPhotos()
      .then(response => response.json())
      .then((photos) => {this.props.receivePhotos(photos.slice(0,20))})
      .catch(console.log)
  }

  render() {
    return (<PhotoList photos={this.props.photos} />)
  }
}

PhotoListContainer.propTypes = {
  receivePhotos: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) => (
  { photos: state.photos }
)

const mapDispatchToProps = (dispatch) => ({
  receivePhotos: (photos) => { dispatch(actions.receivePhotos(photos)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoListContainer)
