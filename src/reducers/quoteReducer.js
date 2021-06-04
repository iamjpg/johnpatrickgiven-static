import { returnRandomArrayItem } from '../helpers';

export const initialState = {
  quotes: [],
  quote: null,
  author: '',
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_QUOTES':
      return {
        ...state,
        quotes: payload.quotes,
      };
    case 'SET_QUOTE':
      const { en: quote, author } = returnRandomArrayItem(state.quotes);
      return {
        ...state,
        quote,
        author,
      };
    default:
      throw new Error();
  }
};
