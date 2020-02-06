import { Action, Reducer, Dispatch } from 'redux';
import axios from 'axios';
import { ApplicationState } from './';
import qs from 'qs';
// STATE

export interface IOrder {
    shortDescription: string,
    fullDescription: string,
    town: string,
    street: string,
    house: string,
    reward: number,
    isNegotiable: boolean,
    date: Date | null,
    partOfDay: number
}

interface formValidation {
    amountOfInvalidForms: number,
}

interface RequestStatuses {
    loading: boolean ,
    requestSucceed: boolean,
    error: string,
}

export type OrderState = Order & RequestStatuses & formValidation;

// ACTION

export interface SetShortOrderDescriptionAction { type: 'SET_SHORT_ORDER_DESCRIPTION', shortDescription: string}
export interface SetFullOrderDescriptionAction { type: 'SET_FULL_ORDER_DESCRIPTION', fullDescription: string }
export interface SetTownOrderAction { type: 'SET_TOWN_ORDER', town: string }
export interface SetStreetOrderAction { type: 'SET_STREET_ORDER', street: string }
export interface SetHouseOrderAction { type: 'SET_HOUSE_ORDER', house: string }
export interface SetDateExecutionOrderAction { type: 'SET_DATE_EXECUTION_ORDER', date: Date}
export interface SetRewardForOrderDescriptionAction { type: 'SET_REWARD_FOR_ORDER', reward: number }
export interface SetIsNegotiableOrderRewardAction { type: 'SET_IS_NEGOTIABLE_REWARD_ACTION', isNegotiable: boolean }
export interface IncrementAmountOfInvalidFormsCountAction { type: 'INCREMENT_INVALID_FORMS_COUNT' }
export interface DecrementAmountOfInvalidFormsCountAction { type: 'DECREMENT_INVALID_FORMS_COUNT' }
export interface SetPartOfDayOrderAction { type: 'SET_PART_OF_DAY', part: number }
export interface PostRequestStartedAction { type: "POST_REQUEST_STARTED", loading: boolean}
export interface PostRequestSucceedAction { type: "POST_REQUEST_SUCCEED", requestSucceed: boolean, loading: boolean }
export interface PostRequestFailuredAction { type: "POST_REQUEST_FAILURED", error: string, loading: boolean}

// UNION

export type KnownAction = SetFullOrderDescriptionAction | SetRewardForOrderDescriptionAction | SetShortOrderDescriptionAction | SetIsNegotiableOrderRewardAction
    | SetTownOrderAction | SetStreetOrderAction | SetDateExecutionOrderAction | SetPartOfDayOrderAction | PostRequestFailuredAction | PostRequestStartedAction
    | PostRequestSucceedAction | IncrementAmountOfInvalidFormsCountAction | DecrementAmountOfInvalidFormsCountAction | SetHouseOrderAction;

// ACTION CREATORS

export interface IUserDataFroOrder {
    employerId: number,
}


export const actionCreators = {
    setShortOrderDescription: (shortDescription: string) => ({ type: 'SET_SHORT_ORDER_DESCRIPTION', shortDescription }),
    setFullOrderDescription: (fullDescription: string) => ({ type: 'SET_FULL_ORDER_DESCRIPTION', fullDescription }),
    setTownOrder: (town: string) => ({ type: 'SET_TOWN_ORDER', town }),
    setStreetOrder: (street: string) => ({ type: 'SET_STREET_ORDER', street }),
    setHouseOrder: (house: string) => ({ type: 'SET_HOUSE_ORDER', house }),
    setRewardForOrder: (reward: number) => ({ type: 'SET_REWARD_FOR_ORDER', reward }),
    setIsNegotiableOrderReward: (isNegotiable: boolean) => ({ type: 'SET_IS_NEGOTIABLE_REWARD_ACTION', isNegotiable }),
    incrementAmountOfInvalidForms: () => ({ type: 'INCREMENT_INVALID_FORMS_COUNT' }),
    decrementAmountOfInvalidForms: () => ({ type: 'DECREMENT_INVALID_FORMS_COUNT' }),
    setDateExecutionOrderAction: (date: Date) => ({ type: 'SET_DATE_EXECUTION_ORDER', date }),
    setPartOfDayOrderAction: (part: number) => ({ type: 'SET_PART_OF_DAY', part }),
    registerOrder: (order: Order & IUserDataFroOrder): any => {

        return async (dispatch: Dispatch<KnownAction>, getState: () => ApplicationState) => {
            dispatch({ type: "POST_REQUEST_STARTED", loading: true, requestSucceed: false, error: ''});

            try {
                await axios.post('api/order', qs.stringify({ ...order}));

                dispatch({ type: "POST_REQUEST_SUCCEED", requestSucceed: true, loading: false });
            } catch (err) {
                console.log(err);
                dispatch({ type: "POST_REQUEST_FAILURED", error: 'lox', loading: false });
            }
        }
    }
}
//INITIAL STATE (order: Order)

const initialState = {
    shortDescription: '',
    fullDescription: '',
    town: '',
    street: '',
    house: '',
    reward: 0,
    isNegotiable: false,
    amountOfInvalidForms: 0,
    date: null,
    partOfDay: 0,
    loading: false,
    requestSucceed: false,
    error: ""
}

//REDUCER

export const reducer: Reducer<OrderState> = (state: OrderState | undefined, incomingAction: Action): OrderState => {

    if (state === undefined) {
        return initialState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SET_SHORT_ORDER_DESCRIPTION':
            return { ...state, shortDescription: action.shortDescription };
        case 'SET_FULL_ORDER_DESCRIPTION':
            return { ...state, fullDescription: action.fullDescription };
        case 'SET_TOWN_ORDER':
            return { ...state, town: action.town};
        case 'SET_STREET_ORDER':
            return { ...state, street: action.street };
        case 'SET_HOUSE_ORDER':
            return { ...state, house: action.house };
        case 'SET_REWARD_FOR_ORDER':
            return { ...state, reward: action.reward };
        case 'SET_IS_NEGOTIABLE_REWARD_ACTION':
            return { ...state, isNegotiable: action.isNegotiable };
        case 'INCREMENT_INVALID_FORMS_COUNT':
            return { ...state, amountOfInvalidForms: ++state.amountOfInvalidForms};
        case 'DECREMENT_INVALID_FORMS_COUNT':
            return { ...state, amountOfInvalidForms: --state.amountOfInvalidForms };
        case 'SET_DATE_EXECUTION_ORDER':
            return { ...state, date: action.date };
        case 'SET_PART_OF_DAY':
            return { ...state, partOfDay: action.part };
        case "POST_REQUEST_STARTED":
            return { ...state, loading: action.loading };
        case "POST_REQUEST_SUCCEED":
            return { ...state, requestSucceed: action.requestSucceed, loading: action.loading };
        case "POST_REQUEST_FAILURED":
            return { ...state, error: action.error, loading: action.loading };
        default:
            return state;
    }
}