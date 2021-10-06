import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './features/emloyess/employeesSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});
