import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    cart: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          state.cart = state.cart.filter(item => item.id !== id);
        }
      }
    },
  },
});

export const { setProducts, addToCart, removeFromCart, updateQuantity } = productsSlice.actions;
export const selectCart = (state) => state.products.cart;
export const selectCartItemCount = (state) => state.products.cart.reduce((total, item) => total + item.quantity, 0);

export default productsSlice.reducer;
