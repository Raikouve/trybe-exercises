import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeigth, image } = this.props
    return (
    <div className='pokemon'>
      <div><img src={image} alt="A Pokemon!" /></div>
      <div className='pokemon-info'>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Weigth: {averageWeigth.value}{averageWeigth.measurementUnit}</p>
      </div>
    </div>
    )
  }
}

export default Pokemon;
