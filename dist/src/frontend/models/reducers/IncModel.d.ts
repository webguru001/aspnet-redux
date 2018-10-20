/********************************************************************************
*                                                                               *
*   Redux Reducers and React Context API Provider/Consumer for state IncModel   *
*   Generated by ts2redux at 2018-10-20T13:22:16.665Z                           *
*   From Source file ../IncModel.ts                                             *
*                                                                               *
********************************************************************************/
export declare class IncModel {
    cnt: number;
    increment(): void;
    decrement(): void;
}
import { State } from './index';
import * as React from 'react';
export interface ContainerPropsMethods {
    increment?: () => any;
    decrement?: () => any;
}
export interface IIncModel {
    cnt: number;
}
export interface ContainerPropsState extends IIncModel {
}
export interface Props extends ContainerPropsState, ContainerPropsMethods {
}
export declare const mapStateToProps: (state: State) => ContainerPropsState;
export declare const mapDispatchToProps: (dispatch: any) => ContainerPropsMethods;
export declare const StateConnector: any;
/**
 * @generated true
 */
export declare class RIncModel {
    private _state?;
    private _dispatch?;
    private _getState?;
    constructor(state?: IIncModel, dispatch?: (action: any) => void, getState?: () => any);
    cnt: number;
    increment(): void;
    static increment(): (dispatcher: any, getState: any) => void;
    decrement(): void;
    static decrement(): (dispatcher: any, getState: any) => void;
}
export declare const IncModelEnums: {
    IncModel_cnt: string;
    IncModel_increment: string;
    IncModel_decrement: string;
};
export declare const IncModelReducer: (state: IIncModel, action: any) => IIncModel;
/***************************
* React Context API test   *
***************************/
export declare const IncModelContext: React.Context<Props>;
export declare const IncModelConsumer: React.ComponentType<React.ConsumerProps<Props>>;
export declare class IncModelProvider extends React.Component {
    state: IIncModel;
    __devTools: any;
    constructor(props: any);
    componentWillUnmount(): void;
    increment(): void;
    decrement(): void;
    render(): JSX.Element;
}
