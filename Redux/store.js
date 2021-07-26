import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './Reducers'
import { createLogger } from 'redux-logger';

const logger = createLogger({
    predicate: () => true,
    diff: true,
    duration: true,
});


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

// sagaMiddleware.run(rootSaga);