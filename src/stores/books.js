import { observable,action  } from 'mobx';

import BookApi from '../api/books';

class Books {
  @observable booksList={
    items: [],
  };
  @observable ebooksList={
    items: [],
  };
  @observable booksDetail={};

  @action  queryBooksList = async () => {
    this.booksList = await BookApi.getBooksList();
  }
  @action  queryEBooksList = async () => {
    this.ebooksList = await BookApi.getEBooksList();
  }
  @action  queryBooksDetail = async (payload) => {
    this.booksDetail = await BookApi.getBookDetail(payload);
  }
}

const books = new Books();

export {books};