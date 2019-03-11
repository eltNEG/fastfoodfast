import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import ImagePlaceholder from '../ImagePlaceholder';
import './FoodDetails.scss';

const FoodDetails = ({
  foodName, foodDescription, foodPrice, foodImgUrl
}) => (
  <Card fluid className="food-details">
    <Card.Content className="title" header="Food Details" />
    <Card.Content>
      <ImagePlaceholder imgUrl={foodImgUrl} />
    </Card.Content>
    <Card.Content>
      <Card.Header>{foodName}</Card.Header>
      <Card.Meta>{`price: ${foodPrice}`}</Card.Meta>
      <Card.Description>{foodDescription}</Card.Description>
    </Card.Content>
  </Card>
);

FoodDetails.defaultProps = {
  foodDescription: 'Nice and delicious. Try it out!'
};

FoodDetails.propTypes = {
  foodName: PropTypes.string.isRequired,
  foodDescription: PropTypes.string,
  foodPrice: PropTypes.string.isRequired,
  foodImgUrl: PropTypes.string.isRequired
};

export default FoodDetails;
