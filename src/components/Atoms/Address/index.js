import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import styles from "./styles";

class Address extends PureComponent {
  render() {
    const { fullAddress } = this.props;
    return <div className={css(styles.fullAddress)}>{fullAddress}</div>;
  }
}

Address.defaultProps = {
  fullAddress: null
};

Address.propTypes = {
  fullAddress: PropTypes.string
};

export default Address;
