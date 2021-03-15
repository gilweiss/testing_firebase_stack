import { combineReducers } from 'redux'
import user from './user'      
import keywordsTable from './keywordsTable'                      

export default combineReducers({ 
    user,
    keywordsTable
})