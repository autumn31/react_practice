// 1. 新增一個繼承 React.Component 的子類別
const { 
  InputField, 
  TodoHeader, 
  TodoList 
} = window.App;

class TodoApp extends React.Component {
    constructor(props, context){
      super(props, context)
      this.state = {
        todos: [
          {
            id: 0,
            title: 'Item 1',
            completed: false
          },
          // ...
        ],
      } 
    }
    _deleteTodo(id) {
      todos = this.state.todos
      const idx = todos.findIndex((todo) => todo.id === id);
      if (idx !== -1) todos.splice(idx, 1);
      return todos;
    }
    // 2. 必須實作 render 方法：
    //    透過該方法回傳的元素，讓 React 瞭解要如何繪製該元件在頁面上
    render() {
      // destructing assignment
      const {username} = this.props
      return (
        <div>
          <TodoHeader name="代辦事項" username={username} todoCount={this.state.todos.filter((todo) => !todo.completed).length}/>
          <InputField placeholder="plz type here" />
          <TodoList todos={this.state.todos} onDeleteTodo={
            (id)=>{
              this.setStates({
                todos: this._deleteTodo(id),
              })
            }
          }/>
        </div>
      );
    }
  }
  
  // 3. 將元件類別 (TodoApp) 定義在 window.App 下：
  //    這可以讓其他 JS 檔使用該元件類別
  window.App.TodoApp = TodoApp;