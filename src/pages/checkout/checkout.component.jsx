/** @format */

import React from "react";
import "./checkout.styles.css";
//import { createBrowserHistory } from 'history';
//import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  CartAmountTotal,
  SelectCartItems,
} from "../../redux/cart/cart.selector";

import CheckOutComponent from "../../components/Check-Out/checkout.component";
//import StripeCheckoutButton from "../../components/stripe/stripe.component";



// const Bank =() =>
// {
// open.window()
// // eslint-disable-next-line no-restricted-globals
// useHistory.push("../../src/Bank_Mellat_SP/server.js");

// };
const CheckOutPage = ({ total, cartItem }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>محصول</span>
      </div>
      <div className="header-block">
        <span>توضیحات</span>
      </div>
      <div className="header-block">
        <span>تعداد</span>
      </div>
      <div className="header-block">
        <span>قیمت</span>
      </div>
      <div className="header-block">
        <span>حذف کردن</span>
      </div>
    </div>
    <div>
      {cartItem.map((cart) => (
        <CheckOutComponent key={cart.id} cart={cart} />
      ))}
    </div>
    <span className="total"> جمع مبلغ: ریال{total}</span>

    {/* <Bank/> */}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItem: SelectCartItems,
  total: CartAmountTotal,
});

export default connect(mapStateToProps, null)(CheckOutPage);
