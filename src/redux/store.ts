import {createStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import rootReducer from './rootReducer';

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
