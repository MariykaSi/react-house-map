import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import styles from "./styles";

class Button extends PureComponent {
  render() {
    const { id, onClick } = this.props;
    return (
      <button className={css(styles.button)} onClick={() => onClick(id)}>
        {`Template ${id}`}
      </button>
    );
  }
}

Button.defaultProps = {
  id: null,
  onClick: null
};

Button.propTypes = {
  id: PropTypes.number,
  onClick: PropTypes.func
};

export default Button;
