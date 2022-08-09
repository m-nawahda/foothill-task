import { configureStore } from '@reduxjs/toolkit'
import cartsReducer from './reducers/shoppingCarts'

export default configureStore({
  reducer: {
    carts: cartsReducer,
  },
})