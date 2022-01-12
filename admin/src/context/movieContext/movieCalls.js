import axios from "axios";
import {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFailure,
} from "./MovieAction";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());

  try {
    await axios
      .get("/movies", {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")),
        },
      })
      .then((res) => dispatch(getMoviesSuccess(res.data)));
  } catch (err) {
    dispatch(getMoviesFailure(err));
  }
};
