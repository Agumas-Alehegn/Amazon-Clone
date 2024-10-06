import React from "react";
import numeral from "numeral";
const FormatCurrency = ({ amount }) => {
  const formattedAmount = numeral(amount).format("$0, 0.00");
  return <div>Price:{formattedAmount}</div>;
};

export default FormatCurrency;
