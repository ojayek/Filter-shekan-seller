/** @format */

import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./strip.css";

const StripeCheckoutButton = ({ price }) => {
  const priceforStripe = price * 100;
  const stripepublicKey =
    "pk_test_51HxT8HGrpJKOq6Kus8cKbLqaLkdeY2LbU7HAr0KlNC0Y0iDkyhiqLNQhztRHNKnufAcTcftAG7YdsGhJ6iXGNmyI00fRyrypTV";

  const onToken = (token) => {
    alert("پرداخت موفق");
  };
  return (
    <StripeCheckout
      label="پرداخت نهایی"
      name="فروش فیلتر شکن ojayek"
      billingAddress ={false}
      shippingAddress
      image="crown.svg"
      description={`جمع به تومان ${price}`}
      amount={priceforStripe}
      bitcoin ="12wku4sxfoppYAwuXZYPn414g4bgEW3UH5"
      panelLabel="پرداخت نهایی"
      token={onToken}
      currency="USDT"
      stripeKey={stripepublicKey}
    />
  );
};
export default StripeCheckoutButton;
