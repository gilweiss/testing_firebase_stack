import './App.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import {applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import {Header} from './components/header';
import {Login} from './components/login';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
  ));


function App() {
  return (
    <div className="mainDiv">
      <Provider store={store}>
      <Header/>
        <Login/>
        </Provider>
    </div>
  );
}

export default App;
