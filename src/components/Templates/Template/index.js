import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { css } from "aphrodite/no-important";

import styles from "./styles";
import { getTemplatesStart } from "../../../actions/templates";
import Loading from "../../Atoms/Loading";
import ComponentCreator from "../../Molecules/ComponentCreator";
import Header from "../../Organisms/Header";

class Template extends Component {
  componentDidMount() {
    this.props.getTemplatesStart();
  }

  render() {
    const {
      global: { loading },
      templates,
      properties: { list }
    } = this.props;
    const currentTemplate =
      templates.list[0] &&
      templates.list.find(item => item.id === templates.current);
    return (
      <Fragment>
        {loading && (
          <section className={css(styles.loading)}>
            <Loading />
          </section>
        )}
        <section className={css(styles.main)}>
          {list[0] && (
            <Fragment>
              <Header />
              <div className={css(styles.content)}>
                {list.map(item => (
                  <ComponentCreator
                    components={currentTemplate.template}
                    property={item}
                    key={item.id}
                  />
                ))}
              </div>
            </Fragment>
          )}
          {templates.error && (
            <div className={css(styles.error)}>{`Sorry, ${
              templates.error
            }`}</div>
          )}
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {
  getTemplatesStart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Template);
