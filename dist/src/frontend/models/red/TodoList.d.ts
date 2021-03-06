export interface TodoListItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
export declare type TaskState = 'UNDEFINED' | 'RUNNING' | 'LOADED' | 'ERROR';
/**
 * @redux true
 */
export declare class TodoList {
    items: TodoListItem[];
    state: TaskState;
    stateError: any;
    clearTodoList(): void;
    reverse(): void;
    sortById(): void;
    sortByTitle(): void;
    sortByCompletion(): void;
    getItems(): Promise<void>;
}
import { State } from './index';
import * as React from 'react';
export interface ContainerPropsMethods {
    clearTodoList?: () => any;
    reverse?: () => any;
    sortById?: () => any;
    sortByTitle?: () => any;
    sortByCompletion?: () => any;
    getItems?: () => any;
}
export interface ITodoList {
    items: TodoListItem[];
    state: TaskState;
    stateError: any;
}
export interface ContainerPropsState extends ITodoList {
}
export interface Props extends ContainerPropsState, ContainerPropsMethods {
}
export declare const mapStateToProps: (state: State) => ContainerPropsState;
export declare const mapDispatchToProps: (dispatch: any) => ContainerPropsMethods;
export declare const StateConnector: any;
/**
 * @generated true
 */
export declare class RTodoList {
    private _state?;
    private _dispatch?;
    private _getState?;
    constructor(state?: ITodoList, dispatch?: (action: any) => void, getState?: () => any);
    items: TodoListItem[];
    state: TaskState;
    stateError: any;
    clearTodoList(): void;
    static clearTodoList(): (dispatcher: any, getState: any) => void;
    reverse(): void;
    static reverse(): (dispatcher: any, getState: any) => void;
    sortById(): void;
    static sortById(): (dispatcher: any, getState: any) => void;
    sortByTitle(): void;
    static sortByTitle(): (dispatcher: any, getState: any) => void;
    sortByCompletion(): void;
    static sortByCompletion(): (dispatcher: any, getState: any) => void;
    getItems(): Promise<void>;
    static getItems(): (dispatcher: any, getState: any) => void;
}
export declare const TodoListEnums: {
    TodoList_items: string;
    TodoList_state: string;
    TodoList_stateError: string;
    TodoList_clearTodoList: string;
    TodoList_reverse: string;
    TodoList_sortById: string;
    TodoList_sortByTitle: string;
    TodoList_sortByCompletion: string;
};
export declare const TodoListReducer: (state: ITodoList, action: any) => ITodoList;
/***************************
* React Context API test   *
***************************/
export declare const TodoListContext: React.Context<Props>;
export declare const TodoListConsumer: React.ComponentType<React.ConsumerProps<Props>>;
export declare class TodoListProvider extends React.Component {
    state: ITodoList;
    __devTools: any;
    constructor(props: any);
    componentWillUnmount(): void;
    clearTodoList(): void;
    reverse(): void;
    sortById(): void;
    sortByTitle(): void;
    sortByCompletion(): void;
    getItems(): Promise<void>;
    render(): JSX.Element;
}
