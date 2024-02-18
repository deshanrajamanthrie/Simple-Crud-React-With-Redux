import {createSlice} from "@reduxjs/toolkit";
import {userList} from "./Data";


const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const {id, name, email} = action.payload;
            const newUser = state.find(u => u.id == id)
            if (newUser) {
                newUser.name = name;
                newUser.email = email
            }
        },
        deleteUser: (state, action) => {
            const id = action.payload;
            const uu = state.find(user => user.id == id);
            if (uu) {
               return  state.filter(u => u.id !== id);
            }
        }
    }
});
export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;





