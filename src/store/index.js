import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import userReducer from '../redux/userSlice'; 

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
  },
});

export default store;
