import React, { PureComponent } from "react";
import { css } from "aphrodite/no-important";
import PropTypes from "prop-types";
import ReactSwipe from "react-swipe";

import styles from "./styles";
import "./styles.scss";
import Image from "../../Atoms/Image";
import ComponentCreator from "../../Molecules/ComponentCreator";
const uuidv1 = require("uuid/v1");

class ImagesWrap extends PureComponent {
  render() {
    let reactSwipeEl;
    const { images, property, children } = this.props;
    return (
      <div className={css(styles.imagesWrap)}>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}
        >
          {images.map(item => (
            <div key={uuidv1()} className={css(styles.imgContainer)}>
              <Image image={item} />
              {children && (
                <div className={`${css(styles.children)} children`}>
                  <ComponentCreator property={property} components={children} />
                </div>
              )}
            </div>
          ))}
        </ReactSwipe>
        {images.length > 1 && (
          <div className={css(styles.buttonsContainer)}>
            <button
              className={css(styles.button, styles.buttonPrev)}
              onClick={() => reactSwipeEl.prev()}
            />
            <button
              className={css(styles.button, styles.buttonNext)}
              onClick={() => reactSwipeEl.next()}
            />
          </div>
        )}
      </div>
    );
  }
}

ImagesWrap.defaultProps = {
  images: null
};

Image.propTypes = {
  images: PropTypes.array
};

export default ImagesWrap;
