const initialState = {

};

export default function page(state = initialState, action) {

  switch (action.type) {

    case 'GET_DECORATION_IMAGES':
      return {...state, data: action.payload};

    case 'GET_ARCHITECTURE_IMAGES':
      return {...state, data: action.payload};

    case 'GET_PARK_IMAGES':
      return {...state, data: action.payload};

    default:
      return state;
  }

}
