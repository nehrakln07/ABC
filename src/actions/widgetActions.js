import { FETCH_DATA } from './types';

const URL = {
  GET_BUYER: 'http://13.232.99.42/get_buyer',
  GET_INCOME: 'http://13.232.99.42/get_income',
  GET_HIGHLIGHT: 'http://13.232.99.42/get_highlight',
  GET_COUNTRY: 'http://13.232.99.42/get_country',
}

export const fetchData = () => dispatch => {
  Promise.all([
    fetch(URL.GET_BUYER, { mode: 'cors' }).then(res=> res.json()),
    fetch(URL.GET_INCOME, { mode: 'cors' }).then(res=> res.json()),
    fetch(URL.GET_HIGHLIGHT, { mode: 'cors' }).then(res=> res.json()),
    fetch(URL.GET_COUNTRY, { mode: 'cors' }).then(res=> res.json()),
  ]).then((res)=>{ 
    dispatch({
      type: FETCH_DATA,
      payload: res
    })
  })
  .catch((err) => {
    console.log(err);
  });
};
