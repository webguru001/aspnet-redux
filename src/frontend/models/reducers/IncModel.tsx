/********************************************************************************
*                                                                               *
*   Redux Reducers and React Context API Provider/Consumer for state IncModel   *
*   Generated by ts2redux at 2018-10-20T11:11:58.861Z                           *
*   From Source file ../IncModel.ts                                             *
*                                                                               *
********************************************************************************/

export class IncModel {
  cnt:number = 0
  async increment() {
    this.cnt++
  }
  async decrement() {
    this.cnt--
  }  
}
import * as immer from 'immer'
import { connect } from 'react-redux'
import { State } from './index'
import * as React from 'react'

export interface ContainerPropsMethods {
  increment? : () => any
  decrement? : () => any
}
export interface IIncModel {
  cnt: number
}

export interface ContainerPropsState extends IIncModel {}
export interface Props extends ContainerPropsState, ContainerPropsMethods {}
export const mapStateToProps = (state : State) : ContainerPropsState => {
  return {
    cnt: state.IncModel.cnt,
  }
}
export const mapDispatchToProps = (dispatch) : ContainerPropsMethods => {
  return {
    increment : () => {
      return dispatch(RIncModel.increment())
    },
    decrement : () => {
      return dispatch(RIncModel.decrement())
    },
  }
}
export const StateConnector = connect( mapStateToProps, mapDispatchToProps);

const init_IncModel = () => {
  const o = new IncModel();
  return {
    cnt: o.cnt,
  }
}

/**
 * @generated true
 */
export class RIncModel {
  private _state?: IIncModel
  private _dispatch?: (action:any)=>void
  private _getState?: ()=>any
  constructor(state?: IIncModel, dispatch?:(action:any)=>void, getState?:()=>any) {
    this._state = state
    this._dispatch = dispatch
    this._getState = getState
  }
  get cnt() : number{
    if(this._getState) {
      return this._getState().IncModel.cnt
    } else {
      return this._state.cnt
    }
  }
  set cnt(value:number) {
    if(this._state) {
      this._state.cnt = value
    } else {
      // dispatch change for item cnt
      this._dispatch({type:IncModelEnums.IncModel_cnt, payload:value})
    }
  }
  
  // is task
  async increment() {
      this.cnt++;
  }
  
  static increment(){
    return (dispatcher, getState) => {
      (new RIncModel(null, dispatcher, getState)).increment()
    }
  }
  // is task
  async decrement() {
      this.cnt--;
  }
  
  static decrement(){
    return (dispatcher, getState) => {
      (new RIncModel(null, dispatcher, getState)).decrement()
    }
  }
}

export const IncModelEnums = {
  IncModel_cnt : 'IncModel_cnt',
}

export const IncModelReducer = (state:IIncModel = init_IncModel(), action) => {
  return immer.produce(state, draft => {
    switch (action.type) {
      case IncModelEnums.IncModel_cnt: 
        (new RIncModel(draft)).cnt = action.payload
        break;
    }
  })
}
/***************************
* React Context API test   *
***************************/
export const IncModelContext = React.createContext<Props>(null)
export const IncModelConsumer = IncModelContext.Consumer
let instanceCnt = 1
export class IncModelProvider extends React.Component {
  state: IIncModel = init_IncModel() 
  __devTools:any = null
  constructor( props ){
    super(props)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    const devs = window['devToolsExtension'] ? window['devToolsExtension'] : null
    if(devs) {
      this.__devTools = devs.connect({name:'IncModel'+instanceCnt++})
      this.__devTools.init(this.state)
      this.__devTools.subscribe( msg => {
        if (msg.type === 'DISPATCH' && msg.state) {
          this.setState(JSON.parse(msg.state))
        }
      })
    }
  }
  componentWillUnmount() {
    if(this.__devTools) this.__devTools.unsubscribe()
  }
  async increment(){
    (new RIncModel(null, (action) => {
      const nextState = IncModelReducer( this.state, action )
      if(this.__devTools) this.__devTools.send(action.type, nextState)
      this.setState(nextState)
    }, () => ({IncModel:this.state})) ).increment()
  }
  async decrement(){
    (new RIncModel(null, (action) => {
      const nextState = IncModelReducer( this.state, action )
      if(this.__devTools) this.__devTools.send(action.type, nextState)
      this.setState(nextState)
    }, () => ({IncModel:this.state})) ).decrement()
  }
  render() {
    return (<IncModelContext.Provider value={{...this.state, 
      increment: this.increment,
      decrement: this.decrement,
    }}> {this.props.children} 
    </IncModelContext.Provider>)
  }
}