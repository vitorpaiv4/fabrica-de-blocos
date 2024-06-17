// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  contactInfo: {
    name: '',
    phone: '',
    address: '',
    neighborhood: '',
    city: '',
    zip: '',
    paymentMethod: 'Cartão de Crédito', // Default payment method
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex ? { ...item, qty: item.qty + 1 } : item
        );
        return { ...state, items: updatedItems };
      } else {
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
    case 'UPDATE_CONTACT_INFO':
      return {
        ...state,
        contactInfo: { ...state.contactInfo, ...action.payload }
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
