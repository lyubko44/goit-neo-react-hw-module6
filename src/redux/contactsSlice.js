import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.push(action.payload);
        },
        deleteContact: (state, action) => {
            return state.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts;
export const selectFilteredContacts = (state) => {
    const filter = state.filters.nameFilter.toLowerCase();
    return state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );
};
export default contactsSlice.reducer;