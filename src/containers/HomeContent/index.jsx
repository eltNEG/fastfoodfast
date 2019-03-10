import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import HomeContent from '../../components/HomeContent';
import { doFetchFoods } from '../../actions/foodActions';

class HomeContentContainer extends React.Component {
  componentDidMount() {
    const { doFetchFoods } = this.props;
    doFetchFoods();
  }

  render() {
    const { foodItems } = this.props;
    return <HomeContent foodItems={foodItems} />;
  }
}

const mapStateToProps = (state) => {
  const { foodReducer } = state;
  const { foodItems } = foodReducer;
  return { foodItems };
};

const mapDispatchToProps = dispatch => bindActionCreators({ doFetchFoods }, dispatch);

HomeContentContainer.propTypes = {
  foodItems: PropTypes.instanceOf(Array).isRequired,
  doFetchFoods: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContentContainer);
