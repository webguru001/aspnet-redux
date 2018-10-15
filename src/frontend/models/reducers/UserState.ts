class UserState {

  logged:boolean = false
  username: string = 'anonymous'
  firstName: string
  lastName: string
  lastLogin: number 
  async login(loginInfo:{username:string, password:string}) {
    
  }
  async logout() {

  }
  fakeLogin() {
    this.username = 'Fake Login'
  }
}

import * as immer from 'immer'
import { connect } from 'react-redux'
import { State } from './index'

export interface ContainerPropsMethods {
  login? : (loginInfo: {
  username: string;
  password: string;
  }) => any
  logout? : () => any
  fakeLogin? : () => any
}
export interface IUserState {
  logged: boolean
  username: string
  firstName: string
  lastName: string
  lastLogin: number
}

export interface ContainerPropsState extends IUserState {}
export interface Props extends ContainerPropsState, ContainerPropsMethods {}
export const mapStateToProps = (state : State) : ContainerPropsState => {
  return {
    logged: state.UserState.logged,
    username: state.UserState.username,
    firstName: state.UserState.firstName,
    lastName: state.UserState.lastName,
    lastLogin: state.UserState.lastLogin,
  }
}
export const mapDispatchToProps = (dispatch) : ContainerPropsMethods => {
  return {
    login : (loginInfo: {
    username: string;
    password: string;
    }) => {
      return dispatch(RUserState.login(loginInfo))
    },
    logout : () => {
      return dispatch(RUserState.logout())
    },
    fakeLogin : () => {
      return dispatch(RUserState.fakeLogin())
    },
  }
}
export const StateConnector = connect( mapStateToProps, mapDispatchToProps);

const init_UserState = () => {
  const o = new UserState();
  return {
    logged: o.logged,
    username: o.username,
    firstName: o.firstName,
    lastName: o.lastName,
    lastLogin: o.lastLogin,
  }
}

/**
 * @generated true
 */
export class RUserState {
  private _state?: IUserState
  private _dispatch?: (action:any)=>void
  private _getState?: ()=>any
  constructor(state?: IUserState, dispatch?:(action:any)=>void, getState?:()=>IUserState) {
    this._state = state
    this._dispatch = dispatch
    this._getState = getState
  }
  get logged() : boolean{
    if(this._getState) {
      return this._getState().UserState.logged
    } else {
      return this._state.logged
    }
  }
  set logged(value:boolean) {
    if(this._state) {
      this._state.logged = value
    } else {
      // dispatch change for item logged
      this._dispatch({type:UserStateEnums.UserState_logged, payload:value})
    }
  }
  get username() : string{
    if(this._getState) {
      return this._getState().UserState.username
    } else {
      return this._state.username
    }
  }
  set username(value:string) {
    if(this._state) {
      this._state.username = value
    } else {
      // dispatch change for item username
      this._dispatch({type:UserStateEnums.UserState_username, payload:value})
    }
  }
  get firstName() : string{
    if(this._getState) {
      return this._getState().UserState.firstName
    } else {
      return this._state.firstName
    }
  }
  set firstName(value:string) {
    if(this._state) {
      this._state.firstName = value
    } else {
      // dispatch change for item firstName
      this._dispatch({type:UserStateEnums.UserState_firstName, payload:value})
    }
  }
  get lastName() : string{
    if(this._getState) {
      return this._getState().UserState.lastName
    } else {
      return this._state.lastName
    }
  }
  set lastName(value:string) {
    if(this._state) {
      this._state.lastName = value
    } else {
      // dispatch change for item lastName
      this._dispatch({type:UserStateEnums.UserState_lastName, payload:value})
    }
  }
  get lastLogin() : number{
    if(this._getState) {
      return this._getState().UserState.lastLogin
    } else {
      return this._state.lastLogin
    }
  }
  set lastLogin(value:number) {
    if(this._state) {
      this._state.lastLogin = value
    } else {
      // dispatch change for item lastLogin
      this._dispatch({type:UserStateEnums.UserState_lastLogin, payload:value})
    }
  }
  
  // is task
  async login(loginInfo: {
      username: string;
      password: string;
  }) {
  }
  
  static login(loginInfo: {
  username: string;
  password: string;
  }){
    return (dispatcher, getState) => {
      (new RUserState(null, dispatcher, getState)).login(loginInfo)
    }
  }
  // is task
  async logout() {
  }
  
  static logout(){
    return (dispatcher, getState) => {
      (new RUserState(null, dispatcher, getState)).logout()
    }
  }
  // is a reducer
  fakeLogin(){
    if(this._state) {
      this.username = 'Fake Login';
    } else {
      this._dispatch({type:UserStateEnums.UserState_fakeLogin})
    }
  }
  
  static fakeLogin(){
    return (dispatcher, getState) => {
      (new RUserState(null, dispatcher, getState)).fakeLogin()
    }
  }
}

export const UserStateEnums = {
  UserState_logged : 'UserState_logged',
  UserState_username : 'UserState_username',
  UserState_firstName : 'UserState_firstName',
  UserState_lastName : 'UserState_lastName',
  UserState_lastLogin : 'UserState_lastLogin',
  UserState_fakeLogin : 'UserState_fakeLogin',
}

export const UserStateReducer = (state:IUserState = init_UserState(), action) => {
  return immer.produce(state, draft => {
    switch (action.type) {
      case UserStateEnums.UserState_logged: 
        (new RUserState(draft)).logged = action.payload
        break;
      case UserStateEnums.UserState_username: 
        (new RUserState(draft)).username = action.payload
        break;
      case UserStateEnums.UserState_firstName: 
        (new RUserState(draft)).firstName = action.payload
        break;
      case UserStateEnums.UserState_lastName: 
        (new RUserState(draft)).lastName = action.payload
        break;
      case UserStateEnums.UserState_lastLogin: 
        (new RUserState(draft)).lastLogin = action.payload
        break;
      case UserStateEnums.UserState_fakeLogin: 
        (new RUserState(draft)).fakeLogin()
        break;
    }
  })
}
