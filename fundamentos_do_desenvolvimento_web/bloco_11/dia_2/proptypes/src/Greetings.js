import React from 'react';
import PropTypes from 'prop-types';

class Greetings extends React.Component {
  render() {
    const { name, lastName } = this.props

    return <h1>Hello, {name} {lastName}.</h1>
  }
};

Greetings.protoTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Greetings;