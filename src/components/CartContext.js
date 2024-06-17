// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: []
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        // Atualiza a quantidade se o item já estiver no carrinho
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex ? { ...item, qty: item.qty + 1 } : item
        );
        return { ...state, items: updatedItems };
      } else {
        // Adiciona um novo item ao carrinho
        return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] };
      }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
    case 'INCREASE_QTY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        )
      };
    case 'DECREASE_QTY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
        )
      };
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
