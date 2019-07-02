import { observable,action  } from 'mobx';

class Todos {
  @observable titleList=[];
  @action addTitle = (value) => {
    this.titleList.push(value);
    this.titleList.push({
      text: value,
      isDone: false,
      id: Math.random(),
    });
  }
  @action changeDoneStatus = (text) => {
    this.titleList.filter(i => {
      if (i.text === text) {
        i.isDone = !i.isDone;
      }
    });
  }
}

const todos = new Todos();

export {todos};