const keywordsTable = (state = {keywordsTable : []}, action) => { //initiates state to default value or new given state if exists
  switch (action.type) {
    case 'SET_KEYWORDS_TABLE':
      return {
        keywordsTable: action.keywordsTable
      }
    case 'DISCONNECT_USER':
      return {
        keywordsTable: {keywordsTable : []}
      }
    default:
      return state
  }
}
export default keywordsTable