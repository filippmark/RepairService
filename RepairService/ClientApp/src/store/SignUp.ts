import { Action, Reducer, Dispatch } from 'redux';
import axios from 'axios';
import { ApplicationState } from './';
import qs from 'qs';


export interface ISignUpRequestStatus {
    status: string,
    error: string,
}

export interface IUserCredentials {
    phone: string,
    email: string,
    password: string,
    role: string,
}

export interface SignUpRequestStartedAction { type: 'SIGN_UP_REQUEST_STARTED' };
export interface SignUpRequestSucceedAction { type: 'SIGN_UP_REQUEST_SUCCEED' };
export interface SignUpRequestFailuredAction { type: 'SIGN_UP_REQUEST_FAILURED', error: string};

export type KnownAction = SignUpRequestFailuredAction | SignUpRequestStartedAction | SignUpRequestSucceedAction;


export const ActionCreators = {
    signUp: (userCredentials: IUserCredentials): any => {
        return async (dispatch: Dispatch<KnownAction>, getState: () => ApplicationState) => {
            dispatch({ type: 'SIGN_UP_REQUEST_STARTED' });
            try {
                const endpoint = userCredentials.role === 'employer' ? 'api/employer/signup' : 'api/builder/signup';

                console.log(userCredentials);

                await axios.post(endpoint, qs.stringify({
                        email: userCredentials.email,
                        phone: userCredentials.phone,
                        password: userCredentials.password
                      }));


                dispatch({ type: 'SIGN_UP_REQUEST_SUCCEED' });

            } catch (err) {
                dispatch({ type: 'SIGN_UP_REQUEST_FAILURED', error: 'kek' });
            }
        }
    }
}


const initialState = {
    status: '',
    error: ''
}

export const reducer: Reducer<ISignUpRequestStatus> = (state: ISignUpRequestStatus | undefined, incomingAction: Action): ISignUpRequestStatus => {

    if (state === undefined) {
        return initialState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SIGN_UP_REQUEST_STARTED':
            return { ...state, status: 'SIGN_UP_REQUEST_STARTED' };
        case 'SIGN_UP_REQUEST_SUCCEED':
            return { ...state, status: 'SIGN_UP_REQUEST_SUCCEED' };
        case 'SIGN_UP_REQUEST_FAILURED':
            return { ...state, status: 'SIGN_UP_REQUEST_STARTED', error: action.error };
        default:
            return state;
    }
}