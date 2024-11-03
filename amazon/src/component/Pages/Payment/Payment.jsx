import React, { useState } from "react";
import classes from "./payment.module.css";
import LayOut from "../../LayOut/LayOut";
import { DataContext } from "../../DataProvider/DataProvider";
import { useContext } from "react";
import ProductsCard from "../../Product/ProductsCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import FormatCurrency from "../../CurrencyFormat/FormatCurrency";
import { FaSolarPanel } from "react-icons/fa";

function Payment() {
  const [{ cart, user }, dispatch] = useContext(DataContext);
  console.log(user);
  const totalQuantity = cart?.reduce((quantity, item) => {
    return item.quantity + quantity;
  }, 0);
  const total = cart.reduce((quantity, item) => {
    return item.price * item.quantity + quantity;
  }, 0);
  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const handleChanges = (e) => {
    console.log(e);
    e.error?.message ? setCardError(e.error.message) : setCardError(null);
  };
  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment_header}>
        Checkout ({totalQuantity})items
      </div>
      {/* payment */}
      <section className={classes.Payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>ET047 My st.</div>
            <div>Bole, Addis Ababa</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review products and delivery</h3>
          <div className={classes.checkOut_product}>
            {cart?.map((item, i) => (
              <ProductsCard key={i} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form  */}
        <div className={classes.flex}>
          <h3>Payment Method</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form action="">
                <CardElement onChange={handleChanges} />
                {cardError && (
                  <small
                    style={{
                      color: "salmon",
                      fontSize: "12px",
                    }}
                  >
                    {cardError}
                  </small>
                )}
                {/* price summary */}
                <div className={classes.payment_price}>
                  <div>
                    <p>Total order | {totalQuantity} Items</p>
                    <span>
                      <p> Total</p>
                      <FormatCurrency quantity={total} />
                    </span>
                  </div>
                  <button type="submit">Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
