import ActionType from "../reducers/constant";
import * as api from "../../api/index.js";

// export const signin = (formData, history) => async (dispatch) => {
//   try {
//     const { data } = await api.signIn(formData);

//     dispatch({ type: "AUTH", data });

//     history.push("/dashboard");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const Login = (body) => async (dispatch) => {
//   try {
//     const userLogin = await api.SignIn(body);

//     console.log(userLogin);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const key = (body) => async (dispatch) => {
  try {
    const getKey = await api.GetClientKey(body);

    const key = getKey.data.CLIENT_KEY;
    // console.log(key);

    dispatch({ type: ActionType.SET_CLIENT_KEY, clientKey: key });
    dispatch({
      type: ActionType.SET_SESSION_LOGIN_ID,
      sessionLoginId: localStorage.getItem("auth"),
    });

    dispatch({
      type: ActionType.SET_USER_ID,
      userId: localStorage.getItem("userId"),
    });
  } catch (error) {
    console.log(error);
  }
};
