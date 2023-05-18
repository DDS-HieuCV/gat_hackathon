import React from "react";
import { useAppContext } from "../context/AppContext";
import { Button, Box } from "@mui/material";
import { PhantomIcon } from "public/images";
import styled from "@emotion/styled";

const WalletButton = (props) => {
  const { walletAddress } = useAppContext();

  return (
    <Button
      size="large"
      variant="contained"
      startIcon={<Box component="img" src={PhantomIcon} />}
      {...props}
    >
      {walletAddress}
    </Button>
  );
};

export default WalletButton;
