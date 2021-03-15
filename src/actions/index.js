import { authUser } from '../serverRequests';
import { getKeywordsTable } from '../serverRequests';

export const setUser = (userId, userEmail, token) => {
  return async dispatch => {
    let authUserId = 1;
    const isUserAuth = await authUser(userEmail, token);
    if (isUserAuth) authUserId = userId
    dispatch({
      type: 'SET_USER',
      authUserId, userEmail, token
    })
  }
}

export const disconnectUser = () => ({
  type: 'DISCONNECT_USER'
})

export const storeUpdateKeywordsTable = () => {
  return async dispatch =>                          //thank you thunk
  {
    const keywordsTable = await getKeywordsTable();
    dispatch({
      type: 'SET_KEYWORDS_TABLE',                    //const name for action
      keywordsTable					                        //transfered data
    })
  }
}

export const updatekeywordsTable = (keywordsTable) => ({
      type: 'SET_KEYWORDS_TABLE',                    //const name for action
      keywordsTable					                        //transfered data
})