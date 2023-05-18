import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppLink } from "./index";
import { useRouter } from "next/router";
import { Container } from "@mui/material";

const MainLayout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <AppBar component="nav" sx={{ background: "white" }} elevation={0}>
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              MUI
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <AppLink
                to={AppPath.MY_BOOK}
                sx={{
                  color:
                    pathname === AppPath.MY_BOOK ? "primary.main" : "black",
                }}
              >
                My Book
              </AppLink>
              <AppLink
                to={AppPath.REQUESTS}
                sx={{
                  color:
                    pathname === AppPath.REQUESTS ? "primary.main" : "black",
                }}
              >
                Request
              </AppLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Container>{children}</Container>
      </Box>
    </>
  );
};

MainLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainLayout;

export const AppPath = {
  MY_BOOK: "/my-book",
  REQUESTS: "/requests",
};
