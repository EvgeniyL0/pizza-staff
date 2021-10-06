import { createSlice } from '@reduxjs/toolkit';
import arrayOfEmployees from '../../eployees.json';

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    emloyeesList: arrayOfEmployees
  },
  reducers: {
    addEmployee: (state, action) => {
      state.emloyeesList.push(action.payload);
    },
    editEmployee: (state, action) => {
      const employee = state.emloyeesList.find(item => item.id === action.payload.id);
      if (employee !== undefined) {
        for (let key in employee) {
          employee[key] = action.payload[key];
        }
      }
    },
  },
});

export const { addEmployee, editEmployee } = employeesSlice.actions;

export const selectEmployees = (state) => state.employees.emloyeesList;
export const selectRoles = (state) => {
  const roles = [];
  state.employees.emloyeesList.forEach(item => {
    if (!roles.includes(item.role)) roles.push(item.role);
  });
  return roles;
}

export default employeesSlice.reducer;
