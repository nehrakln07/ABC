import { FETCH_DATA } from '../actions/types';

const initialState = {
  data: [
    {
      heading: "Highlights",
      data: [],
    },{
      heading: "Buyers",
      data: [],
    },{
      heading: "Countries",
      data: [],
    },{
      heading: "Income",
      data: [],
    },
  ],
  loading: true,
};


export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: initialState.data.map((item,key)=>{ 
          item.data = action.payload[key].data;
          return item;
        }),
        loading: false
      };
    default:
      return state;
  }
}