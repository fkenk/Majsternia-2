const initialState = {

};

export default function page(state = initialState, action) {

  switch (action.type) {

    case 'GET_DATA_ABOUT':
      return { ...state, data: action.payload};

    default:
      return state;
  }

}
