import { observable,action  } from 'mobx';

import BookApi from '../api/books';

class Books {
  @observable booksList={
    items: [],
  };
  @observable ebooksList={
    items: [],
  };

  @action  queryBooksList = async () => {
    this.booksList = await BookApi.getBooksList();
  }
  @action  queryEBooksList = async () => {
    this.ebooksList = await BookApi.getEBooksList();
  }
}

const books = new Books();

export {books};