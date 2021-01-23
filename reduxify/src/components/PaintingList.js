import React from 'react';
import DeleteablePainting from './DeleteablePainting';
import Painting from './Painting';
import { connect } from 'react-redux'
import { fetchPaintingsSuccess } from '../actions/paintings'


class PaintingList extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/paintings')
    .then(resp => resp.json())
    .then(paintings => {
      this.props.fetchPaintingsSuccess(paintings)
    })
  }

  handleVote = (id) => {
    const updatedPaintings = this.state.paintings.map(p => {
          if (p.id !== id) {
            return p;
          } else {
            return { ...p, votes: p.votes + 1 };
          }
    })

    this.setState({
      paintings: updatedPaintings
    })
  }

  renderPaintings = () => {
    return this.props.paintings.map(p => (
      <Painting painting={p} handleVote={this.handleVote} />
    ));
  }

  render() {
    console.log(this.props, '------');
    return (
        <div>
            <div>
                <h1>All Paintings</h1>
                <div className="ui items">{this.renderPaintings()}</div>
            </div>
        </div>
    );
  }
}

//  mapStateToProps
//  ================
// - returns an obj with key/val pairs
// - those key/val pairs become props on the component that is being connected

const mapStateToProps= (storeState) => {
  return {
    paintings: storeState.paintings
  }
}


const writeAccess = {
  fetchPaintingsSuccess: fetchPaintingsSuccess
}


export default connect(mapStateToProps, writeAccess)(PaintingList);




















