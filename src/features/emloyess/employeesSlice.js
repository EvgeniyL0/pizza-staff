import { createSlice } from '@reduxjs/toolkit';

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    editEmployee: (state, action) => {
      const employee = state.find(item => item.id === action.payload.id);
      if (employee !== undefined) {
        for (let key in employee) {
          employee[key] = action.payload[key];
        }
      }
    },
  },
});

export const { addEmployee, editEmployee } = employeesSlice.actions;

export const selectEmployees = (state) => state.employess;
export const selectRoles = (state) => {
  const roles = [];
  state.employees.forEach(item => {
    if (!roles.includes(item.role)) roles.push(item.role);
  });
  return roles;
}

export default employeesSlice.reducer;
