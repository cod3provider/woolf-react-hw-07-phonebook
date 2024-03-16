export const handlePendingContacts = state => {
  state.isLoading = true;
};

export const handleRejectedContacts = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};


export const handleFulfilledContacts = (state) => {
  state.isLoading = false;
  state.error = null;
};
