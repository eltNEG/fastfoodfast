import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from 'semantic-ui-react';
import './ImagePlaceholder.scss';

class ImagePlaceholder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  loaded = () => {
    this.setState({ loading: false });
  };

  render() {
    const { loading } = this.state;
    const { imgUrl } = this.props;
    const isloading = loading ? 'img-loading' : 'img-not-loading';
    return (
      <React.Fragment>
        <img className={`loading-img ${isloading}`} src={imgUrl} alt="" onLoad={this.loaded} />
        <Placeholder fluid className={`img-placeholder ${isloading}`}>
          <Placeholder.Image />
        </Placeholder>
      </React.Fragment>
    );
  }
}

ImagePlaceholder.propTypes = {
  imgUrl: PropTypes.string.isRequired
};

export default ImagePlaceholder;
