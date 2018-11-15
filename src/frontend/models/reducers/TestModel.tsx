/*********************************************************************************
 *                                                                                *
 *   Redux Reducers and React Context API Provider/Consumer for state TestModel   *
 *   Generated by ts2redux from Source file ../TestModel.ts                       *
 *                                                                                *
 *********************************************************************************/

import { setTimeout } from "timers";

/**
 * User Interface State
 */

export interface ShopCartItem {
  id?: number;
  name: string;
}

export interface ShopCart {
  newItemName?: string;
  items: ShopCartItem[];
}

export enum TaskState {
  UNDEFINED,
  RUNNING,
  ERROR,
  SUCCESS
}

const MSG = "STATE IS NOW";
const MSG2 = "AFTER DISPATCH STATE IS";
const DELAY = 1000;
const LAST_NAME = "I am the last item!!!!";
const STR_CART = "cart";
const STR_ITEM = "item";
const PROB_50 = 0.5;

const FRIEND_LIST = ["Arthur", "John", "Martin", "Peter"];
/**
 * @redux true
 */
class TestModel {
  // model with initializer
  items: ShopCartItem[] = [];
  maxId: number = 1;
  cartId: number = 1;
  shopState: TaskState = TaskState.UNDEFINED;

  // my shopping carts
  carts: { [key: string]: ShopCart } = {};

  // message to user
  userMessage: string = "";

  // TODO:
  // - ERROR / warning if there are no type initializers
  // - ERROR if there are more than 2 parameters to a reducer
  //   => or you could generate the protocol to be used for dispatching those values
  // - setting value of simple property could be generated

  setUserMessage(value: string) {
    this.userMessage = value;
  }

  // reducer
  add(item: ShopCartItem) {
    console.log(this.maxId);
    this.items.push({
      ...item,
      id: this.maxId++
    });
  }

  removeFirst() {
    this.items.splice(0, 1);
  }

  sort() {
    this.items.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  /**
   * Creates a new shopping cart
   */

  addCart() {
    const key = "cart" + this.cartId++;
    this.carts[key] = {
      items: [{ id: this.maxId++, name: STR_ITEM }]
    };
  }

  addCartSync() {
    const key = "cart" + this.cartId++;
    this.carts[key] = {
      items: [{ id: this.maxId++, name: STR_ITEM }]
    };
  }

  addToCart(adding: { cartId: string; item: ShopCartItem }) {
    this.carts[adding.cartId].items.push({
      ...adding.item,
      id: this.maxId++
    });
  }

  setCartNewItem(adding: { cartId: string; name: string }) {
    this.carts[adding.cartId].newItemName = name;
  }

  addToCartRandom() {
    Object.keys(this.carts).forEach(cartKey => {
      this.addToCart({
        cartId: cartKey,
        item: { name: STR_ITEM + this.maxId++ }
      });
    });
  }

  renameLast(newName: string) {
    this.items[this.items.length - 1].name = newName;
  }
  // action
  async createItem(someName: string) {
    console.log(MSG, this.shopState);
    if (this.shopState == TaskState.RUNNING) {
      return;
    }
    this.shopState = TaskState.RUNNING;
    await new Promise(res => {
      setTimeout(res, DELAY);
    });
    console.log(MSG2, this.shopState);
    this.add({ name: someName });
    this.shopState = TaskState.SUCCESS;
  }

  async addOneFriend(name) {
    this.add({ name });
  }

  async fillSomeFriends() {
    FRIEND_LIST.forEach(name => {
      this.add({ name });
    });
  }

  async ChangeLastItem() {
    this.renameLast(LAST_NAME);
  }
}

import * as immer from "immer";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { IState } from "./index";
import * as React from "react";

export interface IContainerPropsMethods {
  setUserMessage: (value: string) => any;
  add: (item: ShopCartItem) => any;
  removeFirst: () => any;
  sort: () => any;
  addCart: () => any;
  addCartSync: () => any;
  addToCart: (
    adding: {
      cartId: string;
      item: ShopCartItem;
    }
  ) => any;
  setCartNewItem: (
    adding: {
      cartId: string;
      name: string;
    }
  ) => any;
  addToCartRandom: () => any;
  renameLast: (newName: string) => any;
  createItem: (someName: string) => any;
  addOneFriend: (name) => any;
  fillSomeFriends: () => any;
  ChangeLastItem: () => any;
}
export interface ITestModel {
  // model with initializer
  items: ShopCartItem[];
  maxId: number;
  cartId: number;
  shopState: TaskState;
  // my shopping carts
  carts: {
    [key: string]: ShopCart;
  };
  // message to user
  userMessage: string;
}
export const itemsSelectorFn = (state: ITestModel): ShopCartItem[] =>
  state.items;
export const maxIdSelectorFn = (state: ITestModel): number => state.maxId;
export const cartIdSelectorFn = (state: ITestModel): number => state.cartId;
export const shopStateSelectorFn = (state: ITestModel): TaskState =>
  state.shopState;
export const cartsSelectorFn = (
  state: ITestModel
): {
  [key: string]: ShopCart;
} => state.carts;
export const userMessageSelectorFn = (state: ITestModel): string =>
  state.userMessage;

export type IContainerPropsState = ITestModel;
export interface IProps extends IContainerPropsState, IContainerPropsMethods {}
export const mapStateToProps = (state: IState): IContainerPropsState => {
  return {
    items: state.TestModel.items,
    maxId: state.TestModel.maxId,
    cartId: state.TestModel.cartId,
    shopState: state.TestModel.shopState,
    carts: state.TestModel.carts,
    userMessage: state.TestModel.userMessage
  };
};
export const mapDispatchToProps = (dispatch: any): IContainerPropsMethods => {
  return {
    setUserMessage: (value: string) => {
      return dispatch(RTestModel.setUserMessage(value));
    },
    add: (item: ShopCartItem) => {
      return dispatch(RTestModel.add(item));
    },
    removeFirst: () => {
      return dispatch(RTestModel.removeFirst());
    },
    sort: () => {
      return dispatch(RTestModel.sort());
    },
    addCart: () => {
      return dispatch(RTestModel.addCart());
    },
    addCartSync: () => {
      return dispatch(RTestModel.addCartSync());
    },
    addToCart: (adding: { cartId: string; item: ShopCartItem }) => {
      return dispatch(RTestModel.addToCart(adding));
    },
    setCartNewItem: (adding: { cartId: string; name: string }) => {
      return dispatch(RTestModel.setCartNewItem(adding));
    },
    addToCartRandom: () => {
      return dispatch(RTestModel.addToCartRandom());
    },
    renameLast: (newName: string) => {
      return dispatch(RTestModel.renameLast(newName));
    },
    createItem: (someName: string) => {
      return dispatch(RTestModel.createItem(someName));
    },
    addOneFriend: name => {
      return dispatch(RTestModel.addOneFriend(name));
    },
    fillSomeFriends: () => {
      return dispatch(RTestModel.fillSomeFriends());
    },
    ChangeLastItem: () => {
      return dispatch(RTestModel.ChangeLastItem());
    }
  };
};
export const StateConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);

const initTestModel = () => {
  const o = new TestModel();
  return {
    items: o.items,
    maxId: o.maxId,
    cartId: o.cartId,
    shopState: o.shopState,
    carts: o.carts,
    userMessage: o.userMessage
  };
};
const initWithMethodsTestModel = () => {
  const o = new TestModel();
  return {
    items: o.items,
    maxId: o.maxId,
    cartId: o.cartId,
    shopState: o.shopState,
    carts: o.carts,
    userMessage: o.userMessage,
    setUserMessage: o.setUserMessage,
    add: o.add,
    removeFirst: o.removeFirst,
    sort: o.sort,
    addCart: o.addCart,
    addCartSync: o.addCartSync,
    addToCart: o.addToCart,
    setCartNewItem: o.setCartNewItem,
    addToCartRandom: o.addToCartRandom,
    renameLast: o.renameLast,
    createItem: o.createItem,
    addOneFriend: o.addOneFriend,
    fillSomeFriends: o.fillSomeFriends,
    ChangeLastItem: o.ChangeLastItem
  };
};

/**
 * @generated true
 */
export class RTestModel {
  private _state?: ITestModel;
  private _dispatch?: (action: any) => void;
  private _getState?: () => any;
  constructor(
    state?: ITestModel,
    dispatch?: (action: any) => void,
    getState?: () => any
  ) {
    this._state = state;
    this._dispatch = dispatch;
    this._getState = getState;
  }
  get items(): ShopCartItem[] | undefined {
    if (this._getState) {
      return this._getState().TestModel.items;
    } else {
      if (this._state) {
        return this._state.items;
      }
    }
    return undefined;
  }
  set items(value: ShopCartItem[] | undefined) {
    if (this._state && typeof value !== "undefined") {
      this._state.items = value;
    } else {
      // dispatch change for item items
      if (this._dispatch) {
        this._dispatch({
          type: TestModelEnums.TestModel_items,
          payload: value
        });
      }
    }
  }
  get maxId(): number | undefined {
    if (this._getState) {
      return this._getState().TestModel.maxId;
    } else {
      if (this._state) {
        return this._state.maxId;
      }
    }
    return undefined;
  }
  set maxId(value: number | undefined) {
    if (this._state && typeof value !== "undefined") {
      this._state.maxId = value;
    } else {
      // dispatch change for item maxId
      if (this._dispatch) {
        this._dispatch({
          type: TestModelEnums.TestModel_maxId,
          payload: value
        });
      }
    }
  }
  get cartId(): number | undefined {
    if (this._getState) {
      return this._getState().TestModel.cartId;
    } else {
      if (this._state) {
        return this._state.cartId;
      }
    }
    return undefined;
  }
  set cartId(value: number | undefined) {
    if (this._state && typeof value !== "undefined") {
      this._state.cartId = value;
    } else {
      // dispatch change for item cartId
      if (this._dispatch) {
        this._dispatch({
          type: TestModelEnums.TestModel_cartId,
          payload: value
        });
      }
    }
  }
  get shopState(): TaskState | undefined {
    if (this._getState) {
      return this._getState().TestModel.shopState;
    } else {
      if (this._state) {
        return this._state.shopState;
      }
    }
    return undefined;
  }
  set shopState(value: TaskState | undefined) {
    if (this._state && typeof value !== "undefined") {
      this._state.shopState = value;
    } else {
      // dispatch change for item shopState
      if (this._dispatch) {
        this._dispatch({
          type: TestModelEnums.TestModel_shopState,
          payload: value
        });
      }
    }
  }
  get carts():
    | {
        [key: string]: ShopCart;
      }
    | undefined {
    if (this._getState) {
      return this._getState().TestModel.carts;
    } else {
      if (this._state) {
        return this._state.carts;
      }
    }
    return undefined;
  }
  set carts(
    value:
      | {
          [key: string]: ShopCart;
        }
      | undefined
  ) {
    if (this._state && typeof value !== "undefined") {
      this._state.carts = value;
    } else {
      // dispatch change for item carts
      if (this._dispatch) {
        this._dispatch({
          type: TestModelEnums.TestModel_carts,
          payload: value
        });
      }
    }
  }
  get userMessage(): string | undefined {
    if (this._getState) {
      return this._getState().TestModel.userMessage;
    } else {
      if (this._state) {
        return this._state.userMessage;
      }
    }
    return undefined;
  }
  set userMessage(value: string | undefined) {
    if (this._state && typeof value !== "undefined") {
      this._state.userMessage = value;
    } else {
      // dispatch change for item userMessage
      if (this._dispatch) {
        this._dispatch({
          type: TestModelEnums.TestModel_userMessage,
          payload: value
        });
      }
    }
  }

  // is a reducer
  setUserMessage(value: string) {
    if (this._state) {
      this.userMessage = value;
    } else {
      if (this._dispatch) {
        this._dispatch({
          type: TestModelEnums.TestModel_setUserMessage,
          payload: value
        });
      }
    }
  }

  public static setUserMessage(value: string) {
    return (dispatcher: any, getState: any) => {
      new RTestModel(undefined, dispatcher, getState).setUserMessage(value);
    };
  }
  // is a reducer
  add(item: ShopCartItem) {
    if (this._state) {
      console.log(this.maxId);
      this.items.push({
        ...item,
        id: this.maxId++
      });
    } else {
      if (this._dispatch) {
        this._dispatch({ type: TestModelEnums.TestModel_add, payload: item });
      }
    }
  }

  public static add(item: ShopCartItem) {
    return (dispatcher: any, getState: any) => {
      new RTestModel(undefined, dispatcher, getState).add(item);
    };
  }
  // is a reducer
  removeFirst() {
    if (this._state) {
      this.items.splice(0, 1);
    } else {
      if (this._dispatch) {
        this._dispatch({ type: TestModelEnums.TestModel_removeFirst });
      }
    }
  }

  public static removeFirst() {
    return (dispatcher: any, getState: any) => {
      new RTestModel(undefined, dispatcher, getState).removeFirst();
    };
  }
  // is a reducer
  sort() {
    if (this._state) {
      this.items.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      if (this._dispatch) {
        this._dispatch({ type: TestModelEnums.TestModel_sort });
      }
    }
  }

  public static sort() {
    return (dispatcher: any, getState: any) => {
      new RTestModel(undefined, dispatcher, getState).sort();
    };
  }
  // is a reducer
  addCart() {
    if (this._state) {
      const key = "cart" + this.cartId++;
      this.carts[key] = {
        items: [{ id: this.maxId++, name: STR_ITEM }]
      };
    } else {
      if (this._dispatch) {
        this._dispatch({ type: TestModelEnums.TestModel_addCart });
      }
    }
  }

  public static addCart() {
    return (dispatcher: any, getState: any) => {
      new RTestModel(undefined, dispatcher, getState).addCart();
    };
  }
  // is a reducer
  addCartSync() {
    if (this._state) {
      const key = "cart" + this.cartId++;
      this.carts[key] = {
        items: [{ id: this.maxId++, name: STR_ITEM }]
      };
    } else {
      if (this._dispatch) {
        this._dispatch({ type: TestModelEnums.TestModel_addCartSync });
      }
    }
  }

  public static addCartSync() {
    return (dispatcher: any, getState: any) => {
      new RTestModel(undefined, dispatcher, getState).addCartSync();
    };
  }
  // is a reducer
  addToCart(adding: { cartId: string; item: ShopCartItem }) {
    if (this._state) {
      this.carts[adding.cartId].items.push({
        ...adding.item,
        id: this.maxId++
      });
    } else {
      if (this._dispatch) {
        this._dispatch({
          type: TestModelEnums.TestModel_addToCart,
          payload: adding
        });
      }
    }
  }

  public static addToCart(adding: { cartId: string; item: ShopCartItem }) {
    return (dispatcher: any, getState: any) => {
      new RTestModel(undefined, dispatcher, getState).addToCart(adding);
    };
  }
  // is a reducer
  setCartNewItem(adding: { cartId: string; name: string }) {
    if (this._state) {
      this.carts[adding.cartId].newItemName = name;
    } else {
      if (this._dispatch) {
        this._dispatch({
          type: TestModelEnums.TestModel_setCartNewItem,
          payload: adding
        });
      }
    }
  }

  public static setCartNewItem(adding: { cartId: string; name: string }) {
    return (dispatcher: any, getState: any) => {
      new RTestModel(undefined, dispatcher, getState).setCartNewItem(adding);
    };
  }
  // is a reducer
  addToCartRandom() {
    if (this._state) {
      Object.keys(this.carts).forEach(cartKey => {
        this.addToCart({
          cartId: cartKey,
          item: { name: STR_ITEM + this.maxId++ }
        });
      });
    } else {
      if (this._dispatch) {
        this._dispatch({ type: TestModelEnums.TestModel_addToCartRandom });
      }
    }
  }

  public static addToCartRandom() {
    return (dispatcher: any, getState: any) => {
      new RTestModel(undefined, dispatcher, getState).addToCartRandom();
    };
  }
  // is a reducer
  renameLast(newName: string) {
    if (this._state) {
      this.items[this.items.length - 1].name = newName;
    } else {
      if (this._dispatch) {
        this._dispatch({
          type: TestModelEnums.TestModel_renameLast,
          payload: newName
        });
      }
    }
  }

  public static renameLast(newName: string) {
    return (dispatcher: any, getState: any) => {
      new RTestModel(undefined, dispatcher, getState).renameLast(newName);
    };
  }
  // is task
  // action
  async createItem(someName: string) {
    console.log(MSG, this.shopState);
    if (this.shopState == TaskState.RUNNING) {
      return;
    }
    this.shopState = TaskState.RUNNING;
    await new Promise(res => {
      setTimeout(res, DELAY);
    });
    console.log(MSG2, this.shopState);
    this.add({ name: someName });
    this.shopState = TaskState.SUCCESS;
  }

  public static createItem(someName: string) {
    return (dispatcher: any, getState: any) => {
      new RTestModel(undefined, dispatcher, getState).createItem(someName);
    };
  }
  // is task
  async addOneFriend(name) {
    this.add({ name });
  }

  public static addOneFriend(name) {
    return (dispatcher: any, getState: any) => {
      new RTestModel(undefined, dispatcher, getState).addOneFriend(name);
    };
  }
  // is task
  async fillSomeFriends() {
    FRIEND_LIST.forEach(name => {
      this.add({ name });
    });
  }

  public static fillSomeFriends() {
    return (dispatcher: any, getState: any) => {
      new RTestModel(undefined, dispatcher, getState).fillSomeFriends();
    };
  }
  // is task
  async ChangeLastItem() {
    this.renameLast(LAST_NAME);
  }

  public static ChangeLastItem() {
    return (dispatcher: any, getState: any) => {
      new RTestModel(undefined, dispatcher, getState).ChangeLastItem();
    };
  }
}

export const TestModelEnums = {
  TestModel_items: "TestModel_items",
  TestModel_maxId: "TestModel_maxId",
  TestModel_cartId: "TestModel_cartId",
  TestModel_shopState: "TestModel_shopState",
  TestModel_carts: "TestModel_carts",
  TestModel_userMessage: "TestModel_userMessage",
  TestModel_setUserMessage: "TestModel_setUserMessage",
  TestModel_add: "TestModel_add",
  TestModel_removeFirst: "TestModel_removeFirst",
  TestModel_sort: "TestModel_sort",
  TestModel_addCart: "TestModel_addCart",
  TestModel_addCartSync: "TestModel_addCartSync",
  TestModel_addToCart: "TestModel_addToCart",
  TestModel_setCartNewItem: "TestModel_setCartNewItem",
  TestModel_addToCartRandom: "TestModel_addToCartRandom",
  TestModel_renameLast: "TestModel_renameLast"
};

export const TestModelReducer = (
  state: ITestModel = initTestModel(),
  action: any
) => {
  return immer.produce(state, draft => {
    switch (action.type) {
      case TestModelEnums.TestModel_items:
        new RTestModel(draft).items = action.payload;
        break;
      case TestModelEnums.TestModel_maxId:
        new RTestModel(draft).maxId = action.payload;
        break;
      case TestModelEnums.TestModel_cartId:
        new RTestModel(draft).cartId = action.payload;
        break;
      case TestModelEnums.TestModel_shopState:
        new RTestModel(draft).shopState = action.payload;
        break;
      case TestModelEnums.TestModel_carts:
        new RTestModel(draft).carts = action.payload;
        break;
      case TestModelEnums.TestModel_userMessage:
        new RTestModel(draft).userMessage = action.payload;
        break;
      case TestModelEnums.TestModel_setUserMessage:
        new RTestModel(draft).setUserMessage(action.payload);
        break;
      case TestModelEnums.TestModel_add:
        new RTestModel(draft).add(action.payload);
        break;
      case TestModelEnums.TestModel_removeFirst:
        new RTestModel(draft).removeFirst();
        break;
      case TestModelEnums.TestModel_sort:
        new RTestModel(draft).sort();
        break;
      case TestModelEnums.TestModel_addCart:
        new RTestModel(draft).addCart();
        break;
      case TestModelEnums.TestModel_addCartSync:
        new RTestModel(draft).addCartSync();
        break;
      case TestModelEnums.TestModel_addToCart:
        new RTestModel(draft).addToCart(action.payload);
        break;
      case TestModelEnums.TestModel_setCartNewItem:
        new RTestModel(draft).setCartNewItem(action.payload);
        break;
      case TestModelEnums.TestModel_addToCartRandom:
        new RTestModel(draft).addToCartRandom();
        break;
      case TestModelEnums.TestModel_renameLast:
        new RTestModel(draft).renameLast(action.payload);
        break;
    }
  });
};
/***************************
 * React Context API test   *
 ***************************/
export const TestModelContext = React.createContext<IProps>(
  initWithMethodsTestModel()
);
export const TestModelConsumer = TestModelContext.Consumer;
let instanceCnt = 1;
export class TestModelProvider extends React.Component {
  public state: ITestModel = initTestModel();
  public lastSetState: ITestModel;
  private __devTools: any = null;
  constructor(props: any) {
    super(props);
    this.lastSetState = this.state;
    this.setUserMessage = this.setUserMessage.bind(this);
    this.add = this.add.bind(this);
    this.removeFirst = this.removeFirst.bind(this);
    this.sort = this.sort.bind(this);
    this.addCart = this.addCart.bind(this);
    this.addCartSync = this.addCartSync.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.setCartNewItem = this.setCartNewItem.bind(this);
    this.addToCartRandom = this.addToCartRandom.bind(this);
    this.renameLast = this.renameLast.bind(this);
    this.createItem = this.createItem.bind(this);
    this.addOneFriend = this.addOneFriend.bind(this);
    this.fillSomeFriends = this.fillSomeFriends.bind(this);
    this.ChangeLastItem = this.ChangeLastItem.bind(this);
    const devs = window["devToolsExtension"]
      ? window["devToolsExtension"]
      : null;
    if (devs) {
      this.__devTools = devs.connect({ name: "TestModel" + instanceCnt++ });
      this.__devTools.init(this.state);
      this.__devTools.subscribe((msg: any) => {
        if (msg.type === "DISPATCH" && msg.state) {
          this.setState(JSON.parse(msg.state));
        }
      });
    }
  }
  public componentWillUnmount() {
    if (this.__devTools) {
      this.__devTools.unsubscribe();
    }
  }
  public setStateSync(state: ITestModel) {
    this.lastSetState = state;
    this.setState(state);
  }
  setUserMessage(value: string) {
    const nextState = immer.produce(this.state, draft =>
      new RTestModel(draft).setUserMessage(value)
    );
    if (this.__devTools) {
      this.__devTools.send("setUserMessage", nextState);
    }
    this.setStateSync(nextState);
  }
  add(item: ShopCartItem) {
    const nextState = immer.produce(this.state, draft =>
      new RTestModel(draft).add(item)
    );
    if (this.__devTools) {
      this.__devTools.send("add", nextState);
    }
    this.setStateSync(nextState);
  }
  removeFirst() {
    const nextState = immer.produce(this.state, draft =>
      new RTestModel(draft).removeFirst()
    );
    if (this.__devTools) {
      this.__devTools.send("removeFirst", nextState);
    }
    this.setStateSync(nextState);
  }
  sort() {
    const nextState = immer.produce(this.state, draft =>
      new RTestModel(draft).sort()
    );
    if (this.__devTools) {
      this.__devTools.send("sort", nextState);
    }
    this.setStateSync(nextState);
  }
  addCart() {
    const nextState = immer.produce(this.state, draft =>
      new RTestModel(draft).addCart()
    );
    if (this.__devTools) {
      this.__devTools.send("addCart", nextState);
    }
    this.setStateSync(nextState);
  }
  addCartSync() {
    const nextState = immer.produce(this.state, draft =>
      new RTestModel(draft).addCartSync()
    );
    if (this.__devTools) {
      this.__devTools.send("addCartSync", nextState);
    }
    this.setStateSync(nextState);
  }
  addToCart(adding: { cartId: string; item: ShopCartItem }) {
    const nextState = immer.produce(this.state, draft =>
      new RTestModel(draft).addToCart(adding)
    );
    if (this.__devTools) {
      this.__devTools.send("addToCart", nextState);
    }
    this.setStateSync(nextState);
  }
  setCartNewItem(adding: { cartId: string; name: string }) {
    const nextState = immer.produce(this.state, draft =>
      new RTestModel(draft).setCartNewItem(adding)
    );
    if (this.__devTools) {
      this.__devTools.send("setCartNewItem", nextState);
    }
    this.setStateSync(nextState);
  }
  addToCartRandom() {
    const nextState = immer.produce(this.state, draft =>
      new RTestModel(draft).addToCartRandom()
    );
    if (this.__devTools) {
      this.__devTools.send("addToCartRandom", nextState);
    }
    this.setStateSync(nextState);
  }
  renameLast(newName: string) {
    const nextState = immer.produce(this.state, draft =>
      new RTestModel(draft).renameLast(newName)
    );
    if (this.__devTools) {
      this.__devTools.send("renameLast", nextState);
    }
    this.setStateSync(nextState);
  }
  // action
  async createItem(someName: string) {
    new RTestModel(
      undefined,
      (action: any) => {
        const nextState = TestModelReducer(this.lastSetState, action);
        if (this.__devTools) {
          this.__devTools.send(action.type, nextState);
        }
        this.setStateSync(nextState);
      },
      () => ({ TestModel: this.lastSetState })
    ).createItem(someName);
  }
  async addOneFriend(name) {
    new RTestModel(
      undefined,
      (action: any) => {
        const nextState = TestModelReducer(this.lastSetState, action);
        if (this.__devTools) {
          this.__devTools.send(action.type, nextState);
        }
        this.setStateSync(nextState);
      },
      () => ({ TestModel: this.lastSetState })
    ).addOneFriend(name);
  }
  async fillSomeFriends() {
    new RTestModel(
      undefined,
      (action: any) => {
        const nextState = TestModelReducer(this.lastSetState, action);
        if (this.__devTools) {
          this.__devTools.send(action.type, nextState);
        }
        this.setStateSync(nextState);
      },
      () => ({ TestModel: this.lastSetState })
    ).fillSomeFriends();
  }
  async ChangeLastItem() {
    new RTestModel(
      undefined,
      (action: any) => {
        const nextState = TestModelReducer(this.lastSetState, action);
        if (this.__devTools) {
          this.__devTools.send(action.type, nextState);
        }
        this.setStateSync(nextState);
      },
      () => ({ TestModel: this.lastSetState })
    ).ChangeLastItem();
  }
  public render() {
    return (
      <TestModelContext.Provider
        value={{
          ...this.state,
          setUserMessage: this.setUserMessage,
          add: this.add,
          removeFirst: this.removeFirst,
          sort: this.sort,
          addCart: this.addCart,
          addCartSync: this.addCartSync,
          addToCart: this.addToCart,
          setCartNewItem: this.setCartNewItem,
          addToCartRandom: this.addToCartRandom,
          renameLast: this.renameLast,
          createItem: this.createItem,
          addOneFriend: this.addOneFriend,
          fillSomeFriends: this.fillSomeFriends,
          ChangeLastItem: this.ChangeLastItem
        }}
      >
        {" "}
        {this.props.children}
      </TestModelContext.Provider>
    );
  }
}
