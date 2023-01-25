/** @format */

import React from "react";
import "./collection-overview.styles.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { collectionfroPreview } from "../../redux/shop/shop.selector";
const CollectionOverview = ({ collectionsitems }) => (
  <div className="collection-overview">
    {collectionsitems.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collectionsitems: collectionfroPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
