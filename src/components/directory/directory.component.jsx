/** @format */

import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import { SelectDirecotySections } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./directory.styles.css";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: SelectDirecotySections,
});

export default connect(mapStateToProps)(Directory);
