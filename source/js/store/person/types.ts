import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface IForm {
    PersonNr: string,
}

export interface IPersonState {
    form: IForm
    loading: boolean,
    error: boolean
}

export enum Constants {
    // SENDFORM = 'SENDFORM',
    LOGGED_SUCCESSFULLY = 'LOGGED_SUCCESSFULLY',
    LOGGED_FAILED = 'LOGGED_FAILED',
    LOGIN_ATTEMPT = 'LOGIN_ATTEMPT',
}

export type PersonActions = ActionType<typeof actions>;
