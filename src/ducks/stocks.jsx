const BUY_STOCK = "BUY_STOCK";
// what we want out data to look like when they load the page.
const initialState = {
  balance: 1000,
  stocks: []
};
// NOTE BELOW IS REDUCER - take in state how it looks rightnow, and its going to give an action, then action is going to tell you waht to do.
// reducer function right here.. when this funciton is called it needs to return a state.Always need to have some kind of State. App needs data .. ACTION - this is talking about what changed and why are we calling the reducter, this action is WHY we are updating it. Those are the two paramenters
export default function stocks( state = initialState, action) {
  // a way to check a value against alot of different things. Is action.type this this or something else? every action has a type property of what happen? Object with a type property
  switch ( action.type ){
      case BUY_STOCK:
        return {
            balance: state.balance - action.price,
            stocks: [ action.stock, ...state.stocks ]
        }
      default: return state;

  }
}

export function buyStock( price, stock ){
  return { type: BUY_STOCK, price: price, stock: stock}
}
