import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import styles from "./styles";

class Image extends PureComponent {
  render() {
    const { image } = this.props;
    return <img alt="house-map" src={image} className={css(styles.image)} />;
  }
}

Image.defaultProps = {
  image: null
};

Image.propTypes = {
  image: PropTypes.string
};

export default Image;
