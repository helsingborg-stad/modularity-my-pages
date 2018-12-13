import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface IDemoState {
    list: string[],
    loading: boolean
}

export enum Constants {
    ADD_ITEM = 'ADD_ITEM',
    SET_LOADING = 'SET_LOADING',
}

export type DemoActions = ActionType<typeof actions>;
