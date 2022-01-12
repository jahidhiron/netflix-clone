import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "./authAction";

export const login = async (user, dispatch) => {
  dispatch(loginStart());

  try {
    await axios.post("auth/login", user).then((res) => {
      console.log(res.data.isAdmin);
      res.data.isAdmin && dispatch(loginSuccess(res.data));
    });
  } catch (err) {
    dispatch(loginFailure(err));
  }
};
