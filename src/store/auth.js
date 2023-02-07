import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authentication',
    initialState: { isAuthenticated: false },
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }

});
// authSlice automatically creates unique action identifiers for reducers defined and can be accessed like accessing methods on an obj. Action creators that match the reducer name
export const authActions = authSlice.actions;
export default authSlice;