import { createSlice } from "@reduxjs/toolkit";

const saveProductInLocalStorage = (cartItem) => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
};

const getProductFromLocalStorage = () => {
    const cartItem = localStorage.getItem('cartItem');
    return cartItem ? JSON.parse(cartItem) : [];
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: getProductFromLocalStorage(),
    },
    reducers: {
        addProduct: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            saveProductInLocalStorage(state.items);
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            saveProductInLocalStorage(state.items);
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                saveProductInLocalStorage(state.items);
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                saveProductInLocalStorage(state.items);
            }
        }
    }
});

export const { addProduct, removeProduct, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
