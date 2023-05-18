import { number } from "prop-types";
import React, { memo, useState, createContext, useContext } from "react";

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
  login: () => {},
  logout: () => {},
  loginStatus: number,
};
export const AuthContext = createContext(INITIAL_STATE);
export const useAuthContext = () => useContext(AuthContext);
export const CONNECT_STATUS = {
  NOT_CONNECT: 1,
  CONNECTING: 2,
  CONNECTED: 3,
};

const AuthProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState();
  const [loginStatus, setLoginStatus] = useState(CONNECT_STATUS.NOT_CONNECT);

  const login = () => {
    alert("connectWallet");
    setWalletAddress("0x2343546547657");
    setLoginStatus(CONNECT_STATUS.CONNECTING);

    setTimeout(() => {
      setLoginStatus(CONNECT_STATUS.CONNECTED);
    }, 2000);
  };
  const logout = () => {
    alert("disconnectWallet");
    setWalletAddress();
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        walletAddress,
        loginStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default memo(AuthProvider);
