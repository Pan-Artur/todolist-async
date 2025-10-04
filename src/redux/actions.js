import { createAction } from '@reduxjs/toolkit';
import { ADD, REMOVE, TOGGLE } from './constants';

export const addAction = createAction(ADD);

export const removeAction = createAction(REMOVE);

export const toggleAction = createAction(TOGGLE);

