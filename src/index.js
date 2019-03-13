import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import App from './App'
import './index.scss'
import * as serviceWorker from './serviceWorker'



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export const client = sanityClient({
    projectId: 'dwlpzwt9',
    dataset: 'production',
    useCdn: true
})

export const builder = imageUrlBuilder(client)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
