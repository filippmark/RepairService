import { Action, Reducer } from "redux";

// STATE

export interface OrderState {
    shortDescription: string,
    fullDescription: string,
    town: string,
    streetHouse: string,
    reward: number,
    isNegotiable: boolean,
    amountOfInvalidForms: number,
    date: Date | null,
    partOfDay: number
}


// ACTION

export interface SetShortOrderDescriptionAction { type: 'SET_SHORT_ORDER_DESCRIPTION', shortDescription: string}
export interface SetFullOrderDescriptionAction { type: 'SET_FULL_ORDER_DESCRIPTION', fullDescription: string }
export interface SetTownOrderAction { type: 'SET_TOWN_ORDER', town: string }
export interface SetStreetHouseOrderAction { type: 'SET_STREET_HOUSE_ORDER', streetHouse: string }
export interface SetDateExecutionOrderAction { type: 'SET_DATE_EXECUTION_ORDER', date: Date}
export interface SetRewardForOrderDescriptionAction { type: 'SET_REWARD_FOR_ORDER', reward: number }
export interface SetIsNegotiableOrderRewardAction { type: 'SET_IS_NEGOTIABLE_REWARD_ACTION', isNegotiable: boolean }
export interface IncrementAmountOfInvalidFormsCountAction { type: 'INCREMENT_INVALID_FORMS_COUNT' }
export interface DecrementAmountOfInvalidFormsCountAction { type: 'DECREMENT_INVALID_FORMS_COUNT' }
export interface SetPartOfDayOrderAction {type: 'SET_PART_OF_DAY', part: number}

// UNION

export type KnownAction = SetFullOrderDescriptionAction | SetRewardForOrderDescriptionAction | SetShortOrderDescriptionAction | SetIsNegotiableOrderRewardAction
    | SetTownOrderAction | SetStreetHouseOrderAction | IncrementAmountOfInvalidFormsCountAction | DecrementAmountOfInvalidFormsCountAction
    | SetDateExecutionOrderAction | SetPartOfDayOrderAction; 

// ACTION CREATORS

export const actionCreators = {
    setShortOrderDescription: (shortDescription: string) => ({ type: 'SET_SHORT_ORDER_DESCRIPTION', shortDescription }),
    setFullOrderDescription: (fullDescription: string) => ({ type: 'SET_FULL_ORDER_DESCRIPTION', fullDescription }),
    setTownOrder: (town: string) => ({ type: 'SET_TOWN_ORDER', town }),
    setStreetHouseOrder: (streetHouse: string) => ({ type: 'SET_STREET_HOUSE_ORDER', streetHouse }),
    setRewardForOrder: (reward: number) => ({ type: 'SET_REWARD_FOR_ORDER', reward }),
    setIsNegotiableOrderReward: (isNegotiable: boolean) => ({ type: 'SET_IS_NEGOTIABLE_REWARD_ACTION', isNegotiable }),
    incrementAmountOfInvalidForms: () => ({ type: 'INCREMENT_INVALID_FORMS_COUNT' }),
    decrementAmountOfInvalidForms: () => ({ type: 'DECREMENT_INVALID_FORMS_COUNT' }),
    setDateExecutionOrderAction: (date: Date) => ({ type: 'SET_DATE_EXECUTION_ORDER', date }),
    setPartOfDayOrderAction: (part: number) => ({ type: 'SET_PART_OF_DAY', part})
}

//INITIAL STATE

const initialState = {
    shortDescription: '',
    fullDescription: '',
    town: '',
    streetHouse: '',
    reward: 0,
    isNegotiable: false,
    amountOfInvalidForms: 0,
    date: null,
    partOfDay: 0
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
        case 'INCREMENT_INVALID_FORMS_COUNT':
            return { ...state, amountOfInvalidForms: ++state.amountOfInvalidForms};
        case 'DECREMENT_INVALID_FORMS_COUNT':
            return { ...state, amountOfInvalidForms: --state.amountOfInvalidForms };
        case 'SET_DATE_EXECUTION_ORDER':
            return { ...state, date: action.date };
        case 'SET_PART_OF_DAY':
            return { ...state, partOfDay: action.part };
        default:
            return state;
    }
}