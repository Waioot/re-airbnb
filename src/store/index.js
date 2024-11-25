import { configureStore } from '@reduxjs/toolkit';
import { reducer as homeReducer } from './modules/home';
import { reducer as entireReducer } from './modules/entire';

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
  },
});

export default store;
