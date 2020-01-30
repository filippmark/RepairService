import { Action, Reducer } from "redux";

// STATE

export interface OrderState {
    shortDescription: string,
    fullDescription: string,
    town: string,
    streetHouse: string,
    reward: number,
    isNegotiable: boolean,
}


// ACTION

export interface SetShortOrderDescriptionAction { type: 'SET_SHORT_ORDER_DESCRIPTION', shortDescription: string}
export interface SetFullOrderDescriptionAction { type: 'SET_FULL_ORDER_DESCRIPTION', fullDescription: string }
export interface SetTownOrderAction { type: 'SET_TOWN_ORDER', town: string }
export interface SetStreetHouseOrderAction { type: 'SET_STREET_HOUSE_ORDER', streetHouse: string}
export interface SetRewardForOrderDescriptionAction { type: 'SET_REWARD_FOR_ORDER', reward: number }
export interface SetIsNegotiableOrderRewardAction { type: 'SET_IS_NEGOTIABLE_REWARD_ACTION', isNegotiable: boolean}

// UNION

export type KnownAction = SetFullOrderDescriptionAction | SetRewardForOrderDescriptionAction | SetShortOrderDescriptionAction | SetIsNegotiableOrderRewardAction
    | SetTownOrderAction | SetStreetHouseOrderAction;

// ACTION CREATORS

export const actionCreators = {
    setShortOrderDescription: (shortDescription: string) => ({ type: 'SET_SHORT_ORDER_DESCRIPTION', shortDescription }),
    setFullOrderDescription: (fullDescription: string) => ({ type: 'SET_FULL_ORDER_DESCRIPTION', fullDescription }),
    SetTownOrder: (town: string) => ({ type: 'SET_TOWN_ORDER', town }),
    SetStreetHouseOrder: (streetHouse: string) => ({ type: 'SET_STREET_HOUSE_ORDER', streetHouse }),
    SetRewardForOrderDescription: (reward: number) => ({ type: 'SET_REWARD_FOR_ORDER', reward }),
    SetIsNegotiableOrderReward: (isNegotiable: boolean) => ({ type: 'SET_IS_NEGOTIABLE_REWARD_ACTION', isNegotiable }),
}

//INITIAL STATE

const initialState = {
    shortDescription: '',
    fullDescription: '',
    town: '',
    streetHouse: '',
    reward: 0,
    isNegotiable: false,
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
        case 'SET_STREET_HOUSE_ORDER':
            return { ...state, streetHouse: action.streetHouse };
        case 'SET_REWARD_FOR_ORDER':
            return { ...state, reward: action.reward };
        case 'SET_IS_NEGOTIABLE_REWARD_ACTION':
            return { ...state, isNegotiable: action.isNegotiable };
        default:
            return state;
    }
}