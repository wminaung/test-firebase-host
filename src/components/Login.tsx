import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [newUserName, setNewUserName] = useState<string>("");

  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);

  return (
    <div>
      <h1>Login page</h1>
      <h5>{username}</h5>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewUserName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(login({ username: newUserName }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
