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
        post: action.data,
        error: 'Something is not working how it was planned.',
      };

    default:
      return state;
  }
};
const DateFetching = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: 'FETCH_SUCCESS',
          data: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'FETCH_ERROR',
          data: {},
        });
      });
  }, []);

  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      {state.loading ? 'Loding...' : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default DateFetching;
