import { observable,action  } from 'mobx';
import BookApi from '../api/books';

class Books {
  @observable booksList={
    items: [],
  };

  @action  queryBooksList = async () => {
    this.booksList = await BookApi.getBooksList();
  }
}

const books = new Books();

export {books};