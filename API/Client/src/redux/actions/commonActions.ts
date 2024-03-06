import { Action, AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";

// More details on how to use Redux and Thunk with Typescript here:
// https://redux.js.org/usage/usage-with-typescript
export type ThunkAction<
    R, // Return type of the thunk function
    S, // State type used by getState
    E, // any "extra argument" injected into the thunk
    A extends Action // Known types of actions that can be dispatched
> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R

// Most of the times, the ThunkAction will have void return type, RootState type, no extra argument, and accept any action type.
// To avoid repetition, we'll simply define it as CommonThunk type here.
export type CommonThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type CommonThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
export type AsyncThunkAction<ReturnType = Promise<void>> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
export type BooleanThunkAction<ReturnType = Promise<boolean>> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
export type HttpResponseThunkAction<ReturnType = Promise<Response>> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
