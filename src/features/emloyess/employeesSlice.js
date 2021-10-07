import { createSlice } from '@reduxjs/toolkit';

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    emloyeesList: []
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
    copyToStorage: (state) => {
      localStorage.removeItem("copy");
      localStorage.setItem("copy", JSON.stringify(state.emloyeesList));
      console.log(JSON.parse(localStorage.getItem("copy")));
    }
  },
});

export const { addEmployee, editEmployee, copyToStorage } = employeesSlice.actions;

export const selectEmployees = (state) => state.employees.emloyeesList;
export const selectRoles = (state) => {
  const roles = [];
  state.employees.emloyeesList.forEach(item => {
    if (!roles.includes(item.role)) roles.push(item.role);
  });
  return roles;
}

export default employeesSlice.reducer;
