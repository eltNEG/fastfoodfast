import React from 'react';
import { Card } from 'semantic-ui-react';
import './HomeContent.scss';
import items from '../../mocks';
import cardItems from '../../helpers';
import BuyNowBtn from './BuyNowButton';

export default () => (
  <div className="home-content">
    <Card.Group
      stackable
      doubling
      className="food-list"
      itemsPerRow={4}
      items={cardItems(items, <BuyNowBtn />)}
    />
  </div>
);
