export const selectPhonebookContacts = state => state.phonebook.items;
export const selectPhonebookIsLoading = state => state.phonebook.loading;
export const selectPhonebookIsError = state => state.phonebook.error;