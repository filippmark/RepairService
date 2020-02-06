import { Action, Reducer, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import axios from 'axios';
import { ApplicationState } from './';
import qs from 'qs';


export interface IUserSignInData {
    email: string,
    password: string,
    role: string,
}

export interface IRequestStatus {
    status: string,
    error: string
}

export interface IUserData {
    email: string,
    jwt: string,
    role: string,
    id: number
}

export type SignInState = IRequestStatus & IUserData;

export interface SignInRequestStartedAction { type: 'SIGN_IN_REQUEST_STARTED' };
export interface SignInRequestSucceedAction { type: 'SIGN_IN_REQUEST_SUCCEED' };
export interface SignInRequestFailuredAction { type: 'SIGN_IN_REQUEST_FAILURED', error: string };
export interface SetUserDataAction {type: 'SET_USER_DATA', jwt: string, email: string, role: string, id: number}

export type KnownAction = SignInRequestFailuredAction | SignInRequestStartedAction | SignInRequestSucceedAction | SetUserDataAction;


export const ActionCreators = {
    signIn: (userCredentials: IUserSignInData): any => {
        return async (dispatch: ThunkDispatch<ApplicationState, undefined, KnownAction>, getState: () => ApplicationState) => {
            dispatch({ type: 'SIGN_IN_REQUEST_STARTED' });
            try {
                const endpoint = userCredentials.role === 'employer' ? 'api/employer/signin' : 'api/builder/signin';

               const response = await  axios.post(endpoint, qs.stringify({
                                        email: userCredentials.email,
                                        password: userCredentials.password
               }));

                const { jwt, email, id } = response.data;

                dispatch({ type: 'SIGN_IN_REQUEST_SUCCEED' });

                dispatch({ type: 'SET_USER_DATA', jwt, email, role: userCredentials.role, id: parseInt(id)});
            } catch (err) {
                dispatch({ type: 'SIGN_IN_REQUEST_FAILURED', error: 'kek' });
            }
        }
    }
}

const initialState = {
    status: '',
    error: '',
    email: '',
    role: '',
    jwt: '',
    id: 0
}

export const reducer: Reducer<SignInState> = (state: SignInState | undefined, incomingAction: Action): SignInState => {

    if (state === undefined) {
        return initialState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SIGN_IN_REQUEST_STARTED':
            return { ...state, status: 'SIGN_IN_REQUEST_STARTED' };
        case 'SIGN_IN_REQUEST_SUCCEED':
            return { ...state, status: 'SIGN_IN_REQUEST_SUCCEED' };
        case 'SIGN_IN_REQUEST_FAILURED':
            return { ...state, status: 'SIGN_IN_REQUEST_FAILURED', error: action.error };
        case 'SET_USER_DATA':
            return { ...state, jwt: action.jwt, email: action.email, role: action.role, id: action.id}
        default:
            return state;
    }
}