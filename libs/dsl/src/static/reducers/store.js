// import { combineReducers } from "redux";
import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './themeStore';

// const rootReducer = combineReducers({
//     counter: counterReducer,
//     isLogged: loggedReducer
// })

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
