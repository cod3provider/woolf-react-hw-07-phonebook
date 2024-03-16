export const handlePendingContacts = state => {
  state.isLoading = true;
}

export const handleRejectedContacts = (state , {payload}) => {
  state.isLoading = false;
  state.error = payload;
}
