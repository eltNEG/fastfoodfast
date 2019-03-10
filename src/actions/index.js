export const triggerLoading = type => ({
  type
});

export const setFetchState = (type, newState) => ({
  type,
  payload: newState
});
