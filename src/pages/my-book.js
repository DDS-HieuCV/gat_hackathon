import React, { useEffect, useState } from "react";
import { Container, Stack } from "@mui/material";
import EmptyBook from "../components/sn-my-book/EmptyBook";
import MyBookItem from "../components/sn-my-book/MyBookItem";
import SendRequestDialog from "../components/sn-my-book/SendRequestDialog";

const MyBook = () => {
  const [bookList, setBookList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isShowSwap, setIsShowSwap] = useState(false);
  const [selectedBook, setSelectedBook] = useState();

  const handleSwap = (book) => {
    setIsShowSwap(true);
    setSelectedBook(book);
  };

  const handleCloseDialog = (book) => {
    setIsShowSwap(false);
    setSelectedBook();
  };

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false);
      setBookList(DEFAULT_BOOK);
    }, 1000);
  }, []);

  const isEmpty = !isFetching && bookList.length === 0;

  return (
    <Container>
      {isEmpty ? (
        <EmptyBook />
      ) : (
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {bookList.map((book) => (
            <MyBookItem book={book} onSwap={handleSwap} />
          ))}
        </Stack>
      )}
      {isShowSwap && (
        <SendRequestDialog
          open={SendRequestDialog}
          book={selectedBook}
          onClose={handleCloseDialog}
        />
      )}
    </Container>
  );
};

export default MyBook;
export const DEFAULT_BOOK = Array.from(Array(10).keys()).map((index) => ({
  title: "Book - " + (index + 1),
  author: "Author - " + index + 1,
  ownerAddress: "0x23355234333432423",
}));
