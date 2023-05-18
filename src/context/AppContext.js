import { useRouter } from "next/router";
import React, { memo, useState, createContext, useContext } from "react";
import { AppPath } from "../components/MainLayout";

/* ------------- Initial State ------------- */
export const CONNECT_STATUS = {
  NOT_CONNECT: 1,
  CONNECTING: 2,
  MINT_PFP: 3,
  CONNECTED: 4,
};
const INITIAL_STATE = {
  loginStatus: CONNECT_STATUS.NOT_CONNECT,
  walletAddress: "",

  login: () => {},
  logout: () => {},
  mintPFP: () => {},
};

export const AppContext = createContext(INITIAL_STATE);
export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const router = useRouter();

  const [walletAddress, setWalletAddress] = useState();
  const [loginStatus, setLoginStatus] = useState(CONNECT_STATUS.NOT_CONNECT);

  const login = () => {
    alert("connectWallet");
    setWalletAddress("0x2343546547657");
    setLoginStatus(CONNECT_STATUS.CONNECTING);

    setTimeout(() => {
      setLoginStatus(CONNECT_STATUS.MINT_PFP);
    }, 1000);
  };

  const logout = () => {
    alert("disconnectWallet");
    setWalletAddress();
  };

  const mintPFP = () => {
    alert("mintPFP success");
    setLoginStatus(CONNECT_STATUS.CONNECTED);
    return true;
  };

  return (
    <AppContext.Provider
      value={{
        walletAddress,
        loginStatus,

        login,
        logout,
        mintPFP,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
