const initialState = {
  data : {}
};

export default function page(state = initialState, action) {

  switch (action.type) {

    case 'POST_DATA_CONTACT_FORM':
      return {...state, data: action.payload};

    default:
      return state;
  }

}
