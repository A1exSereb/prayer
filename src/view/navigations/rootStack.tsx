import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import {UserNavigation} from './userStack/userNavigation';
import {GuestNavigation} from './guestStack/guestNavigation';

export const RootStack = () => {
  const authorization = useSelector((state: RootState) => state.authorization);
  const {authenticated} = authorization;

  return !authenticated ? <GuestNavigation /> : <UserNavigation />;
};
