"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// ACTION CREATORS
exports.actionCreators = {
    setShortOrderDescription: function (shortDescription) { return ({ type: 'SET_SHORT_ORDER_DESCRIPTION', shortDescription: shortDescription }); },
    setFullOrderDescription: function (fullDescription) { return ({ type: 'SET_FULL_ORDER_DESCRIPTION', fullDescription: fullDescription }); },
    SetTownOrder: function (town) { return ({ type: 'SET_TOWN_ORDER', town: town }); },
    SetStreetHouseOrder: function (streetHouse) { return ({ type: 'SET_STREET_HOUSE_ORDER', streetHouse: streetHouse }); },
    SetRewardForOrderDescription: function (reward) { return ({ type: 'SET_REWARD_FOR_ORDER', reward: reward }); },
    SetIsNegotiableOrderReward: function (isNegotiable) { return ({ type: 'SET_IS_NEGOTIABLE_REWARD_ACTION', isNegotiable: isNegotiable }); },
};
//INITIAL STATE
var initialState = {
    shortDescription: '',
    fullDescription: '',
    town: '',
    streetHouse: '',
    reward: 0,
    isNegotiable: false,
};
//REDUCER
exports.reducer = function (state, incomingAction) {
    if (state === undefined) {
        return initialState;
    }
    var action = incomingAction;
    switch (action.type) {
        case 'SET_SHORT_ORDER_DESCRIPTION':
            return __assign(__assign({}, state), { shortDescription: action.shortDescription });
        case 'SET_FULL_ORDER_DESCRIPTION':
            return __assign(__assign({}, state), { fullDescription: action.fullDescription });
        case 'SET_TOWN_ORDER':
            return __assign(__assign({}, state), { town: action.town });
        case 'SET_STREET_HOUSE_ORDER':
            return __assign(__assign({}, state), { streetHouse: action.streetHouse });
        case 'SET_REWARD_FOR_ORDER':
            return __assign(__assign({}, state), { reward: action.reward });
        case 'SET_IS_NEGOTIABLE_REWARD_ACTION':
            return __assign(__assign({}, state), { isNegotiable: action.isNegotiable });
        default:
            return state;
    }
};
//# sourceMappingURL=Order.js.map