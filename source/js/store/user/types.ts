import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface IUserState {
    isAuthenticated: boolean,
    userInformation: UserInformation 
}

export interface UserInformation {
    personalNumber: string,
    name: string,
    givenName: string,
    surname: string,
}

export interface AuthRequest {
    personalNumber: string,
    endUserIp: string,
    userVisibleData: string
}

export enum Constants {
    AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST',
    AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE',
    AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS',
}

export type UserActions = ActionType<typeof actions>;
