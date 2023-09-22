import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import item from "../components/items/Item";

type Item = {
    id: string;
    active: boolean;
    name: string;
    comments?: Comment[]
}

type Comment = {
    color: string;
    description: string;
}

type ItemsState = {
    list: Item[]
}

type CommentPayload = {
    id: string;
    text: string;
    color: string;
}

const storage = window.localStorage;

const initialState: ItemsState = {
    list: [{id: "1", active: true, name: "Test", comments: []}]
}

const itemSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<string>){
            state.list.push({
                id: new Date().toISOString(),
                active: true,
                name: action.payload,
                comments: []
            })
        },
        removeItem(state, action: PayloadAction<string>){
            state.list = state.list.filter(item => item.id !== action.payload)
        },
        removeActive(state){
            const activeEl = state.list.find(item => item.active === true)
            if (activeEl) activeEl.active = false
        },
        addActive(state, action: PayloadAction<string>){
            const currentEl = state.list.find(item => item.id === action.payload)
            if (currentEl) currentEl.active = true
        },
        addComment(state, action: PayloadAction<CommentPayload>){
            const currentEl = state.list.find(item => item.id === action.payload.id)
            if (currentEl) currentEl.comments.push({color: action.payload.color, description: action.payload.text})
        }
    }
});

export const {addItem, removeItem, removeActive, addActive, addComment} = itemSlice.actions;
export default itemSlice.reducer;