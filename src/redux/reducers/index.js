import { initialState } from '../store'
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SEARCH_VALUE":
        return {
          ...state,
            search: {
                value: [action.payload],
            },
          };
    case "ADD_SEARCH_RESULT":
            return {
              ...state,
                search: {
                    result: [action.payload],
                },
              }
    default:
      return state
  }
}

export default mainReducer
