import React, { useState } from "react";
import {
  Button,
  Typography,
  Paper,
  Stack,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import AppDialog from "../AppDialog";
import { DEFAULT_BOOK } from "../../pages/my-book";

const SendRequestDialog = ({ onClose, ...otherProps }) => {
  const [bookList, setBookList] = useState(DEFAULT_BOOK);

  const handleSwap = () => {
    alert(`Swap`);
    onClose();
  };

  return (
    <AppDialog onClose={onClose} sx={{ p: 4 }} {...otherProps}>
      <Stack spacing={2} sx={{ width: "60vw" }}>
        <Typography sx={{ fontWeight: 700, fontSize: 36, color: "#4A3AFF" }}>
          Book List of Community
        </Typography>
        <TableContainer sx={{ height: 400, overflow: "auto" }}>
          <Table aria-label="simple table">
            <TableBody>
              {bookList.map((book, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#1E1E1E",
                      }}
                    >
                      {book.title}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#1E1E1E",
                      }}
                    >
                      {book.author}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#1E1E1E",
                      }}
                    >
                      {getFormatAddress(book.ownerAddress)}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      size="large"
                      variant="contained"
                      onClick={handleSwap}
                    >
                      Swap
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </AppDialog>
  );
};

export default SendRequestDialog;

export const getFormatAddress = (address) => {
  const length = address.length;
  return `${address.slice(0, 4)}...${address.slice(length - 4, length)}`;
};
