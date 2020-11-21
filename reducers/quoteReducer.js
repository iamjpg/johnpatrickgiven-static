import { returnRandomArrayItem } from '../helpers';

export const initialState = {
  quotes: [],
  quote: null
}

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_QUOTES':
      return {
        ...state,
        quotes: payload.quotes
      }
    case 'SET_QUOTE':
      return {
        ...state,
        quote: returnRandomArrayItem(state.quotes)
      }
    default:
      throw new Error();
  }
}