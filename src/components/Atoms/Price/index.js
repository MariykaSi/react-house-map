import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";
import formatPrice from "../../../utils/formatPrice";

import styles from "./styles";

class Price extends PureComponent {
  render() {
    const { price } = this.props;
    return (
      <div className={css(styles.price)}>Price: ${formatPrice(price)}</div>
    );
  }
}

Price.defaultProps = {
  price: null
};

Price.propTypes = {
  price: PropTypes.number
};

export default Price;
