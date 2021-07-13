import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import {UserNavigations} from './userStack/userNavigations';
import {GuestNavigations} from './guestStack/guestNavigations';

export const RootStack = () => {
  const authorization = useSelector((state: RootState) => state.authorization);
  const {authenticated} = authorization;

  return !authenticated ? <GuestNavigations /> : <UserNavigations />;
};
