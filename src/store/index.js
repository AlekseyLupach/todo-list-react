import { getDefaultMiddleware } from '@reduxjs/toolkit';

import { applyMiddleware, createStore, compose } from 'redux';

import reducers from './reducers';

export function configureStore(initialStore) {
    const store = createStore(
        reducers,
        initialStore,
        compose(
            applyMiddleware(...getDefaultMiddleware()),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return store;
}