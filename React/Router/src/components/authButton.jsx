import { useSelector, useDispatch } from "react-redux";

export default function Auth() {
  const login = useSelector((state) => {
    return state.reducer.value;
  });
  const dispatch = useDispatch();
  return login ? (
    <button
      onClick={() => {
        dispatch({type: 'login/LOGOUT'});
      }}
      className="btnLogin"
      >
      Logout
    </button>
  ) : (
    <button
    onClick={() => {
      dispatch({type: 'login/LOGIN'});
    }}
    className="btnLogin"
    >
      Login
    </button>
  );
}
