import React, { useContext } from "react";
import classes from "./cart.module.css";
import LayOut from "../../LayOut/LayOut";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductCard from "../../Product/ProductsCard";
import FormatCurrency from "../../CurrencyFormat/FormatCurrency";
import { Link } from "react-router-dom";

function Cart() {
  const [{ cart }, dispatch] = useContext(DataContext);
  console.log(cart);
  const total = cart.reduce((amount, item) => {
    console.log(item.price);
    console.log(amount);
    return amount + item.price;
  }, 0);
  console.log(total);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h3>Your Cart</h3>
          <hr />
          {cart?.length === 0 ? (
            <p>Opps! Your Amazon Cart is empty.</p>
          ) : (
            cart.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  flex={true}
                  renderDesc={true}
                  renderCartBtn={false}
                />
              );
            })
          )}
        </div>
        {cart?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal: ({cart?.length} Items)</p>
              <FormatCurrency amount={total} />
            </div>
            <span>
              <input type="checkbox" name="" id="" />
              <small>This order Contains a gift</small>
            </span>
            <Link to="/Payment">Continue to Check out</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
