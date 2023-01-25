/**
 * eslint-disable no-sequences
 *
 * @format
 */

/** @format */

import React from "react";
import "./collection-item.styles.css";
import Swal from "sweetalert2";

import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.reducer";
const Todo = () =>
  Swal.fire({
    title: "آیا از خرید اطمینان دارید",
    text: "متشکرم",
    icon: "success",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("اضافه به سبد خرید", "موفق", "success");
    }
  });
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          fontFamily: " Vazir",
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => {
          addItem(item);
          Todo();
        }}>
        اضافه به سبد خرید
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
