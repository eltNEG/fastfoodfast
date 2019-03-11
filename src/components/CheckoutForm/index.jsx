import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Form, Segment } from 'semantic-ui-react';
import './CheckoutForm.scss';
import { doOrderFood } from '../../actions/foodActions';
import { getFoodDetails } from '../../containers/Checkout/FoodDetails';

export class CheckoutFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      state: ''
    };
  }

  handleChange = (event, data) => {
    const { name, value } = data;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { doOrderFood, match, foodItems } = this.props;
    const { name, address, state } = this.state;
    const food = getFoodDetails(match.params.foodId, foodItems);
    doOrderFood({
      customerName: name,
      foodOrdered: food[0].foodname,
      customerAddress: `${address}, ${state}`
    });
  };

  renderInput = (label, placeholder, value, name) => (
    <Form.Input
      onChange={this.handleChange}
      name={name}
      value={value}
      required
      label={label}
      type="text"
      placeholder={placeholder}
    />
  );

  render() {
    const { name, address, state } = this.state;
    const { orderIsLoading } = this.props;
    return (
      <Form size="huge">
        <Segment>
          <h3>Complete your order</h3>
          {this.renderInput('Name', 'John Doe', name, 'name')}
          {this.renderInput('Address', 'Some safe', address, 'address')}
          {this.renderInput('State', 'Osun State', state, 'state')}
          <Form.Button disabled={orderIsLoading} onClick={this.handleSubmit} fluid size="huge">
            {orderIsLoading ? 'Processing...' : 'Checkout'}
          </Form.Button>
        </Segment>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  const { foodReducer } = state;
  const { foodItems, orderIsLoading } = foodReducer;
  return { foodItems, orderIsLoading };
};

const mapDispatchToProps = dispatch => bindActionCreators({ doOrderFood }, dispatch);

CheckoutFormComponent.propTypes = {
  doOrderFood: PropTypes.func.isRequired,
  foodItems: PropTypes.instanceOf(Array).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  orderIsLoading: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutFormComponent);
