import {
    FETCH_FILMS,
} from '../actions'

const initialState = {
    films: [],
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_FILMS:
        return {
          ...state,
          films: action.payload,
        }
      default:
        return state
    }
}