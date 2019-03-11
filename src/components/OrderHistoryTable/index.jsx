import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Segment, Table } from 'semantic-ui-react';
import './OrderHistoryTable.scss';
import Loader from '../Loader';
import { doGetOrderHistory } from '../../actions/orderHistoryActions';

export class OrderHistoryTableComponent extends React.Component {
  componentDidMount = () => {
    const { doGetOrderHistory } = this.props;
    doGetOrderHistory();
  };

  renderRow = () => {
    const { orderHistory } = this.props;
    return orderHistory.map(order => (
      <Table.Row key={order.orderid}>
        <Table.Cell>{order.foodordered}</Table.Cell>
        <Table.Cell>{order.dateordered}</Table.Cell>
      </Table.Row>
    ));
  };

  render() {
    const { orderHistoryIsLoading, orderFetched } = this.props;
    if ((orderHistoryIsLoading && !orderFetched) || (!orderHistoryIsLoading && !orderFetched)) {
      return <Loader />;
    }
    return (
      <Segment>
        <h2>Your Order History</h2>
        <Table celled selectable unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Food Ordered</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderRow()}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

OrderHistoryTableComponent.propTypes = {
  orderHistory: PropTypes.instanceOf(Array).isRequired,
  doGetOrderHistory: PropTypes.func.isRequired,
  orderHistoryIsLoading: PropTypes.bool.isRequired,
  orderFetched: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  const { orderHistoryReducer } = state;
  const { orderHistory, orderHistoryIsLoading, orderFetched } = orderHistoryReducer;
  return { orderHistory, orderHistoryIsLoading, orderFetched };
};

const mapDispatchToProps = dispatch => bindActionCreators({ doGetOrderHistory }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderHistoryTableComponent);
