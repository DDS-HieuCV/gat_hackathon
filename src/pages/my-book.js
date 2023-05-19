import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmptyBook from "../components/sn-my-book/EmptyBook";

const MyBook = () => {
  const [bookList, setBookList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false);
    }, 1000);
  }, []);

  const isEmpty = !isFetching && bookList.length === 0;

  return <Container>{isEmpty ? <EmptyBook /> : <Box />}</Container>;
};

export default MyBook;
