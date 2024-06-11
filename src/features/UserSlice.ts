import { createSlice } from "@reduxjs/toolkit";
export interface User {
    id: string;
    name: string;
    email: string;
    age: number;
    createdAt: string;
}


export const users: User[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'johndoe@example.com',
        age: 30,
        createdAt: new Date().toISOString()
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        age: 25,
        createdAt: new Date().toISOString()
    },
    {
        id: '3',
        name: 'Alice Johnson',
        email: 'alicejohnson@example.com',
        age: 28,
        createdAt: new Date().toISOString()
    },
    {
        id: '4',
        name: 'Bob Brown',
        email: 'bobbrown@example.com',
        age: 35,
        createdAt: new Date().toISOString()
    },
    {
        id: '5',
        name: 'Charlie Davis',
        email: 'charliedavis@example.com',
        age: 40,
        createdAt: new Date().toISOString()
    }
];

const userSlice = createSlice({
    name:"users",
    initialState:users,
    reducers:{
        addUser:(state,action) =>{
            
        }

    }
}) 

export default userSlice.reducer;

export const {addUser} = userSlice.actions;




