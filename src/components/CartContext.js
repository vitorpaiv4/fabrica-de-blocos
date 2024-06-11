import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: []  // Inicialize o estado aqui, se necessário
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {...state, items: [...state.items, action.payload]};
    case 'REMOVE_ITEM':
      return {...state, items: state.items.filter(item => item.id !== action.payload.id)};
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
