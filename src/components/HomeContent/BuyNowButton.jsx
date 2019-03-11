import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BuyNowButton = ({ foodId }) => (
  <Link to={`/checkout/${foodId}`}>
    <button>Buy Now</button>
  </Link>
);

BuyNowButton.defaultProps = {
  foodId: '-1'
};

BuyNowButton.propTypes = {
  foodId: PropTypes.string
};

export default BuyNowButton;
