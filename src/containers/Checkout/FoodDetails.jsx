import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FoodDetailsForm from '../../components/FoodDetails';

export function getFoodDetails(foodId, foodItems) {
  return foodItems.filter(food => Number(foodId) === food.foodid);
}

export const FoodDetailsComponent = ({ match, foodItems }) => {
  const food = getFoodDetails(match.params.foodId, foodItems);
  if (food.length !== 1) {
    return <Redirect to="/buy" />;
  }
  const { foodname, url } = food[0];
  return (
    <FoodDetailsForm
      foodDescription="Delicious meal"
      foodName={foodname}
      foodImgUrl={url}
      foodPrice="₦1,200.00"
    />
  );
};

const mapStateToProps = (state) => {
  const { foodReducer } = state;
  const { foodItems } = foodReducer;
  return { foodItems };
};

FoodDetailsComponent.propTypes = {
  foodItems: PropTypes.instanceOf(Array).isRequired,
  match: PropTypes.instanceOf(Object).isRequired
};

export default connect(mapStateToProps)(FoodDetailsComponent);
