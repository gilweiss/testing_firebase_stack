const user = (state = { id: 0 }, action) => { //initiates state to default value or new given state if exists
  switch (action.type) {
    case 'SET_USER':
      return {
        id: action.authUserId,
        email: action.userEmail,
        token: action.token
      }
    case 'DISCONNECT_USER':
      return {
        id: 0,
        email: null,
        token: null,
      }
    default:
      return state
  }
}
export default user