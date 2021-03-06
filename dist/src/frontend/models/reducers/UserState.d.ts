/*********************************************************************************
 *                                                                                *
 *   Redux Reducers and React Context API Provider/Consumer for state UserState   *
 *   Generated by ts2redux from Source file ../UserState.ts                       *
 *                                                                                *
 *********************************************************************************/
import { IState } from "./index";
import * as React from "react";
export interface IContainerPropsMethods {
    login: (loginInfo: {
        username: string;
        password: string;
    }) => any;
    logout: () => any;
    fakeLogin: () => any;
}
export interface IUserState {
    logged: boolean;
    username: string;
    firstName: string;
    lastName: string;
    lastLogin: number;
}
export declare type IContainerPropsState = IUserState;
export interface IProps extends IContainerPropsState, IContainerPropsMethods {
}
export declare function mapStateToPropsWithKeys<K extends keyof IContainerPropsState>(state: IState, keys: K[]): Pick<IContainerPropsState, K>;
export declare const mapStateToProps: (state: IState) => IUserState;
export declare const mapDispatchToProps: (dispatch: any) => IContainerPropsMethods;
export declare function ConnectKeys<K extends keyof IUserState, J extends keyof IContainerPropsMethods>(keys: K[], methods: J[]): any;
export declare const StateConnector: any;
/**
 * @generated true
 */
export declare class RUserState {
    private _state?;
    private _dispatch?;
    private _getState?;
    constructor(state?: IUserState, dispatch?: (action: any) => void, getState?: () => any);
    logged: boolean;
    username: string;
    firstName: string;
    lastName: string;
    lastLogin: number;
    login(loginInfo: {
        username: string;
        password: string;
    }): Promise<void>;
    static login(loginInfo: {
        username: string;
        password: string;
    }): (dispatcher: any, getState: any) => void;
    logout(): Promise<void>;
    static logout(): (dispatcher: any, getState: any) => void;
    fakeLogin(): void;
    static fakeLogin(): (dispatcher: any, getState: any) => void;
}
export declare const UserStateEnums: {
    UserState_logged: string;
    UserState_username: string;
    UserState_firstName: string;
    UserState_lastName: string;
    UserState_lastLogin: string;
    UserState_fakeLogin: string;
};
export declare const UserStateReducer: (state: IUserState, action: any) => IUserState;
/********************************
 * React Context API component   *
 ********************************/
export declare const UserStateContext: React.Context<IProps>;
export declare const UserStateConsumer: React.ComponentType<React.ConsumerProps<IProps>>;
export declare class UserStateProvider extends React.Component {
    state: IUserState;
    lastSetState: IUserState;
    private __devTools;
    constructor(props: any);
    componentWillUnmount(): void;
    setStateSync(state: IUserState): void;
    login(loginInfo: {
        username: string;
        password: string;
    }): Promise<void>;
    logout(): Promise<void>;
    fakeLogin(): void;
    render(): JSX.Element;
}
