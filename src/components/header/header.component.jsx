/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CardIcon from "../CardIcon/CartItem.component";
import CardDropdown from "../CartDropdown/cartdropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurentUser } from "../../redux/user/user.selector";
import { SelectCartHidden } from "../../redux/cart/cart.selector";
import "./header.styles.css";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        خرید
      </Link>
      <Link className="option" to="/shop">
        ارتباط با ما
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          خروج
        </div>
      ) : (
        <Link className="option" to="/signin">
          ورود
        </Link>
      )}
      <CardIcon />
    </div>
    {hidden ? null : <CardDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurentUser,
  hidden: SelectCartHidden,
});

export default connect(mapStateToProps)(Header);
