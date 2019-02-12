import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import styles from "./styles";

class Area extends PureComponent {
  render() {
    const { area } = this.props;
    return <div className={css(styles.area)}>Area: {area} sq. fr.</div>;
  }
}

Area.defaultProps = {
  area: null
};

Area.propTypes = {
  area: PropTypes.number
};

export default Area;
