import { FETCH_CURRENCIES, ADD_EXPENSES, DELETE_INFO, EDIT_INFO,
  CHANGED_INFO } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  // sumValue: 0,
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
      // sumValue: (Number(state.sumValue) + Number(action.price)).toFixed(2)
    };
  case DELETE_INFO:
    return {
      ...state,
      expenses: [...state.expenses].filter((info) => info.id !== action.id),
      // sumValue: (Number(action.price).toFixed(2)),
    };
  case EDIT_INFO:
    return {
      ...state,
      editor: true,
      idToEdit: action.id,
    };
  case CHANGED_INFO:
    return {
      ...state,
      editor: false,
      expenses: state.expenses.map((obj) => {
        if (obj.id === state.idToEdit) {
          return { id: obj.id, ...action.expenses, exchangeRates: obj.exchangeRates };
        }
        return obj;
      }),
    };
  default:
    return state;
  }
};

export default wallet;
