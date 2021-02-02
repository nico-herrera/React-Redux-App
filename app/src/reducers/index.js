import { FACT_RETRIEVED, START_FETCHING, FETCH_FAILED } from "../actions";

const initialState = {
  fact: null,
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING: {
      return { ...state, isFetching: true, error: "" };
    }
    case FACT_RETRIEVED: {
      return { ...state, fact: action.payload, isFetching: false };
    }

    case FETCH_FAILED: {
      return { ...state, error: action.payload, isFetching: false };
    }
    default:
      return state;
  }
};
