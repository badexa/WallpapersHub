const initialState = {
    notificationVisible: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_NOTIFICATION':
        return { ...state, notificationVisible: true };
      case 'HIDE_NOTIFICATION':
        return { ...state, notificationVisible: false };
      default:
        return state;
    }
  };
  
  export default reducer;