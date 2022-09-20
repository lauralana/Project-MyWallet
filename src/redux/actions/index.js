export const USER_LOGIN = 'USER_LOGIN';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const DELETE_INFO = 'DELETE_INFO';
export const EDIT_INFO = 'EDIT_INFO';
export const CHANGED_INFO = 'CHANGED_INFO';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  email: payload,
});

const fetchCurrencies = (currencies) => ({
  type: FETCH_CURRENCIES,
  currencies,
});

const url = 'https://economia.awesomeapi.com.br/json/all';
export const getApi = () => async (dispatch) => {
  const response = await fetch(url);
  const curr = await response.json();
  const objKey = Object.keys(curr).filter((coin) => coin !== 'USDT');
  dispatch(fetchCurrencies(objKey));
};

const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  expense: payload,
  // price: Number(payload.value) * Number(payload.exchangeRates[payload.currency].ask),
});

export const getApiExpense = (value) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const curr = await response.json();
  dispatch(addExpenses({ ...value, exchangeRates: curr }));
};

export const deleteInfo = (id) => ({
  type: DELETE_INFO,
  id,
// price: id.reduce((acc, cur) => Number(acc) + (Number(cur.value)
  //* Number(cur.exchangeRates[cur.currency].ask)), 0),
});

export const editInfo = (id) => ({
  type: EDIT_INFO,
  id,
});

export const changedInfo = (expenses) => ({
  type: CHANGED_INFO,
  expenses,
});
