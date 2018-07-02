import { observable, computed, action } from 'mobx-react'

class Todo {
  id = Math.random()*10
  //定义要观察的属性
  @observable title
  @observable finished = false
  constructor(title) {
    this.title = title
  }
}

class TodoList {
  @observable todos = []
  @action
  addTodo(title) {
    if (title) {
      this.todos.push(new Todo(title))
    }else{
      return
    }
  }
  @action
  hadFinished(){
    
  }
}
//生成store
// const todolist = new TodoList()
// todolist.addTodo('学习')
// todolist.addTodo('读书')
// export default todolist;