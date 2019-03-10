import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import './HomeContent.scss';
import cardItems from '../../helpers';
import BuyNowBtn from './BuyNowButton';

const HomeContent = ({ foodItems }) => (
  <div className="home-content">
    <Card.Group
      stackable
      doubling
      className="food-list"
      itemsPerRow={4}
      items={cardItems(foodItems, <BuyNowBtn />)}
    />
  </div>
);

HomeContent.propTypes = {
  foodItems: PropTypes.instanceOf(Array).isRequired
};

export default HomeContent;
