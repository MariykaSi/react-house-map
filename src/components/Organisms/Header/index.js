import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "aphrodite/no-important";

import styles from "./styles";
import { changeTemplate } from "../../../actions/templates";
import TemplatesList from "../../Molecules/TemplatesList";

class Header extends Component {
  onChangeTemplate = id => {
    this.props.changeTemplate(id);
  };

  render() {
    const {
      templates: { list }
    } = this.props;
    return (
      <header className={css(styles.header)}>
        <div className={css(styles.logo)}>
          <a href="/">House map</a>
        </div>
        <TemplatesList
          templates={list}
          onChangeTemplate={this.onChangeTemplate}
        />
      </header>
    );
  }
}

const mapStateToProps = ({ templates }) => ({ templates });
const mapDispatchToProps = {
  changeTemplate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
