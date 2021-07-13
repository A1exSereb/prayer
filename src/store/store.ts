import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './sagas';

const sagaMiddlewere = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddlewere));

sagaMiddlewere.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
