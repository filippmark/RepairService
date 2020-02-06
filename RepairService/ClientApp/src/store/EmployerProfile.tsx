import { Action, Reducer, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import axios from 'axios';
import { ApplicationState } from './';

export interface IRequestStatus {
    isLoading: boolean,
    status: string,
    error: string,
    orders: Array<any>
}

export interface IOrder {
    employerId: number,
    amountOfOrdersAtPage: number, 
    pageIndex: number,
}


export type IEmployerProfileState = IRequestStatus;

export interface RequestEmployerOrdersStartedAction { type: 'REQUEST_EMPLOYER_ORDERS_STARTED', isLoading: boolean};
export interface RequestEmployerOrdersSucceedAction { type: 'REQUEST_EMPLOYER_ORDERS_SUCCEED', orders: []};
export interface RequestEmployerOrdersFailuredAction { type: 'REQUEST_EMPLOYER_ORDERS_FAILURED', error: string };

export type KnownAction = RequestEmployerOrdersStartedAction | RequestEmployerOrdersSucceedAction | RequestEmployerOrdersFailuredAction;


export const ActionCreators = {
    receiveEmployerOrders: (orderData: IOrder): any => {
        return async (dispatch: ThunkDispatch<ApplicationState, undefined, KnownAction>, getState: () => ApplicationState) => {
            dispatch({ type: 'REQUEST_EMPLOYER_ORDERS_STARTED', isLoading: true});
            try {
                const response = await axios.get(`api/order/1/${orderData.amountOfOrdersAtPage}/${orderData.pageIndex}`)

                console.log(response);

                dispatch({ type: 'REQUEST_EMPLOYER_ORDERS_SUCCEED', orders: response.data});

            } catch (err) {
                dispatch({ type: 'REQUEST_EMPLOYER_ORDERS_FAILURED', error: 'kek' });
            }
        }
    }
}

const initialState = {
    isLoading: false,
    status: '',
    error: '',
    orders: []
}

export const reducer: Reducer<IEmployerProfileState> = (state: IEmployerProfileState | undefined, incomingAction: Action): IEmployerProfileState => {

    if (state === undefined) {
        return initialState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_EMPLOYER_ORDERS_STARTED':
            return { ...state, status: 'REQUEST_EMPLOYER_ORDERS_STARTED', isLoading: action.isLoading };
        case 'REQUEST_EMPLOYER_ORDERS_SUCCEED':
            return { ...state, status: 'REQUEST_EMPLOYER_ORDERS_SUCCEED', orders: action.orders };
        case 'REQUEST_EMPLOYER_ORDERS_FAILURED':
            return { ...state, status: 'REQUEST_EMPLOYER_ORDERS_FAILURED', error: action.error };
        default:
            return state;
    }
}