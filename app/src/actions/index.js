import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FACT_RETRIEVED = "FACT_RETRIEVED";
export const FETCH_FAILED = "FETCH_FAILED";

export const getFact = () => (dispatch) => {
  dispatch({ type: START_FETCHING });
  const fetchData = async () => {
    try {
      const data = await axios("https://cat-fact.herokuapp.com/facts");
      console.log(data.data);
      dispatch({ type: FACT_RETRIEVED, payload: data.data });
    } catch (error) {
      console.error("error getting a kanye quote from api: ", error);
      dispatch({ type: FETCH_FAILED, payload: error.message });
    }
  };
  fetchData();
};
