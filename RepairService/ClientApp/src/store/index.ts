import * as WeatherForecasts from './WeatherForecasts';
import * as Counter from './Counter';
import * as Order from './Order';
import * as SignUp from './SignUp';
import * as SignIn from './SignIn';
import * as EmployerProfile from './EmployerProfile';

// The top-level state object
export interface ApplicationState {
    counter: Counter.CounterState | undefined;
    weatherForecasts: WeatherForecasts.WeatherForecastsState | undefined;
    order: Order.OrderState | undefined;
    signUp: SignUp.ISignUpRequestStatus | undefined;
    signIn: SignIn.SignInState | undefined;
    employerProfile: EmployerProfile.IEmployerProfileState | undefined;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer,
    order: Order.reducer,
    signUp: SignUp.reducer,
    signIn: SignIn.reducer,
    employerProfile: EmployerProfile.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
     (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
