export interface IUserState {
    isAuthenticated: boolean,
    authInProgress: boolean,
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

export enum Const {
    AUTH_REQ = 'AUTHENTICATION_REQUEST',
    AUTH_FAIL = 'AUTHENTICATION_FAILURE',
    AUTH_SUCCESS = 'AUTHENTICATION_SUCCESS',
}
