import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  cart: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
    addToCart(state, action) {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 }); 
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const product = state.cart.find((item) => item.id === id);

      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const { setProducts, addToCart, removeFromCart, updateQuantity } = productsSlice.actions;

export const selectCart = (state) => state.products.cart;
export const selectCartItemCount = (state) => state.products.cart.reduce((total, item) => total + item.quantity, 0);

export default productsSlice.reducer;
