import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productsReducer from './productsSlice'; 

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer, 
    
  },
});

export default store;
