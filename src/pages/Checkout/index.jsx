import React from 'react';
import { Grid } from 'semantic-ui-react';
import FoodDetails from '../../containers/Checkout/FoodDetails';
import CheckoutForm from '../../components/CheckoutForm';

export default props => (
  <div className="main checkout">
    <Grid columns="equal">
      <Grid.Column floated="left">
        <FoodDetails {...props} />
      </Grid.Column>
      <Grid.Column floated="right">
        <CheckoutForm {...props} />
      </Grid.Column>
    </Grid>
  </div>
);
