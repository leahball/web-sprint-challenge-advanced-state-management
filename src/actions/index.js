import axios from "axios";

export const FETCH_SMURFS = "FETCH_STARTS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch(fetchSmurfs());
    axios.get("http://localhost:3333/smurfs").then((res) => {
      dispatch(fetchSuccess(res.data));
    });
  };
};

export const fetchSmurfs = () => {
  return { type: FETCH_SMURFS };
};

export const fetchSuccess = (smurfs) => {
  return { type: FETCH_SUCCESS, payload: smurfs };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
