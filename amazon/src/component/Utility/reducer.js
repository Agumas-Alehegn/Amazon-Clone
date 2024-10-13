import { Type } from "./action.type";

export const initialState = {
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.AddTo_Cart:
      return { ...state, cart: [...state.cart, action.item] };
    default:
      return state;
  }
};
