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
  myBook: [],

  login: () => {},
  logout: () => {},
  mintPFP: () => {},
  mintBook: () => {},
};

export const AppContext = createContext(INITIAL_STATE);
export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const router = useRouter();

  const [walletAddress, setWalletAddress] = useState();
  const [loginStatus, setLoginStatus] = useState(CONNECT_STATUS.NOT_CONNECT);
  const [myBook, setMyBook] = useState(DEFAULT_BOOK);

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

  const mintBook = (book) => {
    alert(`Mint success: ${book.title} - ${book.author}`);
    setMyBook((preState) => [...preState, book]);
  };

  return (
    <AppContext.Provider
      value={{
        walletAddress,
        loginStatus,
        myBook,

        login,
        logout,
        mintPFP,
        mintBook,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const DEFAULT_BOOK = Array.from(Array(10).keys()).map((index) => ({
  title: "Book - " + (index + 1),
  author: "Author - " + index + 1,
  ownerAddress: "0x23355234333432423",
}));
