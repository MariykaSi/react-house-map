import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";

import styles from "./styles";
import Button from "../../Atoms/Button";

class TemplatesList extends PureComponent {
  render() {
    const { templates, onChangeTemplate } = this.props;
    return (
      <div className={css(styles.list)}>
        {templates.map(item => (
          <Button id={item.id} key={item.id} onClick={onChangeTemplate} />
        ))}
      </div>
    );
  }
}

TemplatesList.defaultProps = {
  templates: null,
  changeTemplate: null
};

TemplatesList.propTypes = {
  templates: PropTypes.array.isRequired,
  changeTemplate: PropTypes.func
};

export default TemplatesList;
