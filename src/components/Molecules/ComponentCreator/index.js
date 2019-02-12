import React, { Component } from "react";

import "./styles.scss";

import { ADDRESS, AREA, IMAGE, PRICE } from "../../../constants/components";
import Address from "../../Atoms/Address";
import Area from "../../Atoms/Area";
import Price from "../../Atoms/Price";
import ImagesWrap from "../../Molecules/ImagesWrap";
const uuidv1 = require("uuid/v1");

class ComponentCreator extends Component {
  render() {
    const { components, property } = this.props;
    return (
      <div className="component">
        {components &&
          components.map(item => {
            switch (item.component) {
              case IMAGE: {
                return property[item.field] ? (
                  <ImagesWrap
                    images={property[item.field]}
                    property={property}
                    children={item.children}
                    key={uuidv1()}
                  />
                ) : null;
              }
              case ADDRESS: {
                return property[item.field] ? (
                  <Address fullAddress={property[item.field]} key={uuidv1()} />
                ) : null;
              }
              case PRICE: {
                return property[item.field] ? (
                  <Price price={property[item.field]} key={uuidv1()} />
                ) : null;
              }
              case AREA: {
                return property[item.field] ? (
                  <Area area={property[item.field]} key={uuidv1()} />
                ) : null;
              }
              default: {
                return null;
              }
            }
          })}
      </div>
    );
  }
}

export default ComponentCreator;
