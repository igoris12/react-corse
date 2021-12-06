import React, { useEffect, useReducer } from 'react';

const initialValue = {
  loading: true,
  post: {},
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.data,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'Something is not working how it was planned.',
      };

    default:
      return state;
  }
};

const DateFetching = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      {state.loading ? 'Loding...' : state.post.titel}
      {state.error ? state.error : null}
    </div>
  );
};

export default DateFetching;
